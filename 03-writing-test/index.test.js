import { test, expect } from 'node:test';
import { strict as assert } from 'node:assert';
import { sum } from './index.js';

test('sum function adds two numbers', () => {
  assert.strictEqual(sum(1, 2), 3);
  assert.strictEqual(sum(-1, 1), 0);
  assert.strictEqual(sum(0, 0), 0);
  assert.strictEqual(sum(2.5, 2.5), 5);
});