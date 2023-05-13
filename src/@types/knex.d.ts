// eslint-disable-next-line no-unused-vars
import { Knex } from 'knex' // we let's get the global type of next - for use all type inside knex, after we let's create new types

declare module 'knex/types/tables' {
  // overwrite tables type of knex
  export interface Tables {
    transactions: {
      id: string
      title: string
      amount: number
      created_at: string
      session_id?: string // this field is optional
    }
  }
}
