import fastify from 'fastify'
import { env } from './env'
import { transactionsRoutes } from './routes/transactions'

const app = fastify() // for create the base of application - the methods http will be availability in instance 'app'

app.register(transactionsRoutes, {
  prefix: 'transactions', // 'url' prefix for this plugin to be active - inside this plugin we don't need use the name 'transactions' in routes
}) // we let's register our plugin

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    // we let's execute a console.log when the promise finished your execution
    console.log('HTTP Server Running!')
  })
