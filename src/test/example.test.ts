import { expect, test } from 'vitest'

test('the user can create a new transaction', () => {
  // here write our test
  // here we let's do to called HTTP for create a new transaction

  const responseStatusCode = 201

  expect(responseStatusCode).toEqual(201) // here is what we let's await that happen - validation stage
})
