import { FastifyInstance } from 'fastify'
import { knex } from '../database'
import { z } from 'zod'
import crypto from 'node:crypto'

export async function transactionsRoutes(app: FastifyInstance) {
  // in 'fastify' all plugin need to be async
  app.get('/', async () => {
    const transactions = await knex('transactions').select() // return all fields

    return {
      // we let's return how object because we can put more information
      transactions,
    }
  })

  app.get('/:id', async (request) => {
    const getTransactionParamsSchema = z.object({
      id: z.string().uuid(), // have we can create validation with data on format 'uuid'
    })

    const { id } = getTransactionParamsSchema.parse(request.params) // 'params' are the named params that come in url

    const transaction = await knex('transactions').where('id', id).first() // method 'first' catch just first find item, not come a array of data

    return { transaction }
  })

  app.get('/summary', async () => {
    const summary = await knex('transactions')
      .sum('amount', { as: 'amount' })
      .first() // method 'sum' can are used in any sql database, is a method of aggregation, sum all fields of a column specific

    return {
      summary,
    }
  })

  app.post('/', async (request, reply) => {
    const createTransactionBodySchema = z.object({
      title: z.string(),
      amount: z.number(),
      type: z.enum(['credit', 'debit']),
    })

    const { amount, title, type } = createTransactionBodySchema.parse(
      request.body,
    ) // let's doing the validation of the request body with the zod schema - with it the body is now typed - in the body of the request comes the information to create resources

    let sessionId = request.cookies.sessionId // find inside cookies if exist a sessionId

    if (!sessionId) {
      sessionId = crypto.randomUUID()

      reply.cookie('sessionID', sessionId, {
        // put configs - save sessionId in cookies
        path: '/', // all routes of backend can access this cookie
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
      })
    }

    await knex('transactions').insert({
      id: crypto.randomUUID(),
      title,
      amount: type === 'credit' ? amount : amount * -1,
      session_id: sessionId,
    })

    return reply.status(201).send()
  })
}
