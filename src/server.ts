import fastify from 'fastify'
import { knex } from './database'
import crypto from 'node:crypto'

const app = fastify() // for create the base of application - the methods http will be availability in instance 'app'

app.get('/hello', async () => {
  const transaction = await knex('transactions')
    .insert({
      id: crypto.randomUUID(),
      title: 'Transação de teste',
      amount: 1000,
    })
    .returning('*') // for returning all information about insertion

  return transaction
})

app.get('/fetch', async () => {
  const transactions = await knex('transactions')
    .where('amount', 1000) // where 'amount' = 1000
    .select('*') // for fetch records in database

  return transactions
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    // we let's execute a console.log when the promise finished your execution
    console.log('HTTP Server Running!')
  })
