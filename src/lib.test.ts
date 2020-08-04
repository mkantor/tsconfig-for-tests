import assert from 'node:assert'
import test from 'node:test'
import { greeting } from './lib.js'

test('greeting is correct', () => {
  assert.strictEqual(greeting, 'Hello, world!')
})
