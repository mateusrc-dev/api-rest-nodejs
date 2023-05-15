import { test, beforeAll, afterAll, describe, expect, beforeEach } from 'vitest'
import { app } from '../app' // we let's have access the application without having to climb it
import request from 'supertest'
import { execSync } from 'node:child_process' // with 'execSync' we can do terminal commands in Node code

describe('Transactions routes', () => {
  // name test category
  beforeAll(async () => {
    // this function execute before all tests
    await app.ready() // we let's await that this app stay ready - let's await register all plugins because they are async
  })

  afterAll(async () => {
    // this function execute after all tests
    await app.close() // we let's await that this app stay close
  })

  beforeEach(() => {
    // before each test we let's execute this code
    execSync('npm run knex migrate:rollback --all') // for reset database of tests
    execSync('npm run knex migrate:latest')
  })

  test('the user can create a new transaction', async () => {
    await request(app.server) // we let's access 'Node' server http that are inside in framework
      .post('/transactions')
      .send({
        title: 'New transaction',
        amount: 5000,
        type: 'credit',
      })
      .expect(201)
  })

  test('the user can list all transactions', async () => {
    const createTransactionResponse = await request(app.server) // we let's access 'Node' server http that are inside in framework
      .post('/transactions')
      .send({
        title: 'New transaction',
        amount: 5000,
        type: 'credit',
      })
    const cookies = createTransactionResponse.get('Set-Cookie') // cannot send this cookie to another test, each test is isolated from the other - a test not can dependence of other - for create a test we need consider that other tests not exist

    const listTransactionsResponse = await request(app.server)
      .get('/transactions')
      .set('Cookie', cookies) // set is for send a information in headers of request (view more in documentation)
      .expect(200) // 200 = success

    expect(listTransactionsResponse.body.transactions).toEqual([
      expect.objectContaining({
        // id: expect.any(String), // hope my id is any string
        title: 'New transaction',
        amount: 5000,
      }),
    ]) // here will return the transaction created above - we can test if the data is how expect
  })
})
