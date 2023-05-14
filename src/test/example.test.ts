import { test, beforeAll, afterAll } from 'vitest'
import { app } from '../app' // we let's have access the application without having to climb it
import request from 'supertest'

beforeAll(async () => {
  // this function execute before all tests
  await app.ready() // we let's await that this app stay ready - let's await register all plugins because they are async
})

afterAll(async () => {
  // this function execute after all tests
  await app.close() // we let's await that this app stay close
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
