'use strict';

const { app, assert } = require('egg-mock/bootstrap');
const qiniu = require('qiniu');
const mock = require('egg-mock');

describe('test/app/controller/qiniu/upload.test.js', () => {
  let app;
  before(() => {
    // 创建当前应用的 app 实例
    app = mock.app();
    // 等待 app 启动成功，才能执行测试用例
    return app.ready();
  });

  // it('获得识别的网址', async () => {
  //   await app
  //     .httpRequest()
  //     .get('/')
  //     .expect(302);
  // });
});
