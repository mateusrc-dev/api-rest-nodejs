import fastify from 'fastify'
import { knex } from './database'

const app = fastify() // for create the base of application - the methods http will be availability in instance 'app'

app.get('/hello', async () => {
  const tables = await knex('sqlite_schema').select('*') // let's do a query on a global table (every bank has it) that has information about other tables

  return tables
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    // we let's execute a console.log when the promise finished your execution
    console.log('HTTP Server Running!')
  })
