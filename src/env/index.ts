import { config } from 'dotenv' // now this file will to read the file '.env' e will to put the information in 'process.env'
import { z } from 'zod'

if (process.env.NODE_ENV === 'test') {
  // NODE_ENV is an environment variable that is automatically populated with 'test' when vitest is run
  config({ path: '.env.test' }) // let's say which file will be read, now will to create a database for tests
} else {
  config() // he will to find environment variable in .env
}

const envSchema = z.object({
  // process.env is a object // process.env.DATABASE_URL
  NODE_ENV: z.enum(['development', 'test', 'production']).default('production'), // development, test, production - common ambients
  DATABASE_CLIENT: z.enum(['sqlite', 'pg']), // our application accept postGreeSQL and sqlite
  DATABASE_URL: z.string(), // this value is mandatory because I didn't insert 'nullable'
  PORT: z.coerce.number().default(10000), // 'coerce' is for transform any value in number
}) // we let's create a schema that is a data format

const _env = envSchema.safeParse(process.env) // here will to build validation with our schema - if the data is not correct, an error will occur - we let's use safeParse for create our error
if (_env.success === false) {
  console.error('Invalid environment variables!', _env.error.format())

  throw new Error('Invalid environment variables!')
}

export const env = _env.data
