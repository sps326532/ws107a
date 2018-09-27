const app = require('./app');
const server = app.listen();
const request = require('supertest').agent(server);

describe('case test', function() {
  after(function() {
    server.close();
  });

  it('/hello should say "你好"', function(done) {
    request
    .get('/hello')
    .expect(200)
    .expect('你好', done)
  });
  it('/name should say "陳佳妮"', function(done) {
    request
    .get('/name')
    .expect(200)
    .expect('陳佳妮', done)
  });
  it('/id should say "110610543"', function(done) {
    request
    .get('/id')
    .expect(200)
    .expect('110610543', done)
  });
  it('/xxx/yyy should status = 404', function(done) {
    request
    .get('/xxx/yyy')
    .expect(404, done)
  });
});