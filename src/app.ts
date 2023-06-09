import fastify from 'fastify'
import { transactionsRoutes } from './routes/transactions'
import cookie from '@fastify/cookie' // this module have integration with typescript

export const app = fastify() // for create the base of application - the methods http will be availability in instance 'app'

app.register(cookie) // we need to create this plugin here because its creation needs to be done before routes - register cookie module
app.register(transactionsRoutes, {
  prefix: 'transactions', // 'url' prefix for this plugin to be active - inside this plugin we don't need use the name 'transactions' in routes
}) // we let's register our plugin
