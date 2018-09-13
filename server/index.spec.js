const request = require('supertest');

describe('index', () => {
  let server;

  beforeEach(() => {
    server = require('./index');
  });

  afterEach(() => {
    server.close();
  });

  it('responds to /', (done) => {
    request(server).get('/').expect(200, done);
  });

  it('responds with 404 for non-existing roles', (done) => {
    request(server).get('/i/dont/exist').expect(404, done);
  });
});
