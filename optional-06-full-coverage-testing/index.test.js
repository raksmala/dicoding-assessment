import { test, expect } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('sum with positive numbers', () => {
  assert.strictEqual(sum(2, 3), 5);
  assert.strictEqual(sum(10, 15), 25);
});

test('sum with zero', () => {
  assert.strictEqual(sum(0, 0), 0);
  assert.strictEqual(sum(0, 5), 5);
  assert.strictEqual(sum(5, 0), 5);
});

test('sum with negative numbers', () => {
  assert.strictEqual(sum(-1, 1), 0);
  assert.strictEqual(sum(1, -1), 0);
  assert.strictEqual(sum(-5, -10), 0);
});

test('sum with non-numeric inputs', () => {
  assert.strictEqual(sum('a', 5), 0);
  assert.strictEqual(sum(5, 'b'), 0);
  assert.strictEqual(sum(null, 5), 0);
  assert.strictEqual(sum(5, null), 0);
  assert.strictEqual(sum(undefined, 5), 0);
  assert.strictEqual(sum(5, undefined), 0);
  assert.strictEqual(sum({}, 5), 0);
  assert.strictEqual(sum(5, {}), 0);
});

test('sum with large numbers', () => {
  assert.strictEqual(sum(1e10, 1e10), 2e10);
  assert.strictEqual(sum(Number.MAX_SAFE_INTEGER, 1), Number.MAX_SAFE_INTEGER + 1);
});