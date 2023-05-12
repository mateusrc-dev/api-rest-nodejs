import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable('transactions', (table) => {
    table.uuid('session_id').after('id').index() // add new field in table that already exist - we let's create a index for that the transactions relation with session_id to be save in cache
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable('transactions', (table) => {
    table.dropColumn('session_id') // add new field in table that already exist - we let's create a index for that the transactions relation with session_id to be save in cache
  })
}
