import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  // up is what this migration will to do in database
  await knex.schema.createTable('transactions', (table) => {
    table.uuid('id').primary() // universal unique id - primary key
    table.text('title').notNullable() // not accept null value
    table.decimal('amount', 10, 2).notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable() // we let's use variably 'knex' for return the date that can are used in any database type
  })
}

export async function down(knex: Knex): Promise<void> {
  // if to happen error - down is for remove table or remove a field in table if to happen a error
  await knex.schema.dropTable('transactions')
}
