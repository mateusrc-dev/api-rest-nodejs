import { knex as setupKnex, Knex } from 'knex'

export const config: Knex.Config = {
  // let's put an interface to know the knex config properties
  client: 'sqlite',
  connection: {
    filename: './db/app.db',
  },
  useNullAsDefault: true, // all field of table will have a null value
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setupKnex(config)
