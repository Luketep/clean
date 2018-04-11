const assert = require('assert');
const server = require('./index');

describe('index', () => {
  it('should return true', () => {
    assert(server());
  });
});