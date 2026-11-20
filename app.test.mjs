import assert from 'node:assert/strict';
import { endpoints } from './app.mjs';
assert.deepEqual(endpoints(5, 3), [0, 3, 1, 4, 2]);
assert.deepEqual(endpoints(4, 2), [0, 2, 0, 2]);
assert.equal(endpoints(180, 37)[17], 89);
