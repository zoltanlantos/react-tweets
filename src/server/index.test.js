const request = require('supertest');

xdescribe('express server', () => {
  let server;

  beforeEach(() => {
    server = require('../server'); // eslint-disable-line global-require
  });

  afterEach(() => {
    server.close();
  });

  it('responds to /', (done) => {
    request(server)
      .get('/')
      .expect(200, done);
  });

  it('responds to /status', (done) => {
    request(server)
      .get('/status')
      .expect(200, done);
  });

  it('404 everything else', (done) => {
    request(server)
      .get('/foo/bar')
      .expect(404, done);
  });
});
