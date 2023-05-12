import 'dotenv/config' // now this file will to read the file '.env' e will to put the information in 'process.env'
import { knex as setupKnex, Knex } from 'knex'

export const config: Knex.Config = {
  // let's put an interface to know the knex config properties
  client: 'sqlite',
  connection: {
    filename: process.env.DATABASE_URL ? process.env.DATABASE_URL : '',
  },
  useNullAsDefault: true, // all field of table will have a null value
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setupKnex(config)
