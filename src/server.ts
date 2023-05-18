import { app } from './app'
import { env } from './env'

app
  .listen({
    host: '0.0.0.0',
    port: env.PORT,
  })
  .then(() => {
    // we let's execute a console.log when the promise finished your execution
    console.log(`HTTP Server running in port ${env.PORT}`)
  })
