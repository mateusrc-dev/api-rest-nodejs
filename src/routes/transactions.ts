import { FastifyInstance } from 'fastify'
import { knex } from '../database'
import crypto from 'node:crypto'

export async function transactionsRoutes(app: FastifyInstance) {
  // in 'fastify' all plugin need to be async
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
}
