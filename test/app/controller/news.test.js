'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/news.test.js', () => {
  it('测试news接口', () => {
    return app
      .httpRequest()
      .get('/news')
      .expect(200);
  });
});
