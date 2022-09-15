'use strict';

const mock = require('egg-mock');

describe('test/webpack.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/webpack-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, webpack')
      .expect(200);
  });
});
