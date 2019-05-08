'use strict';

const { app, assert } = require('egg-mock/bootstrap');
const uuid = require('uuid');
const qiniu = require('qiniu');
const mock = require('egg-mock');

describe('test/app/service/qiniu/token.test.js', () => {
  let app;
  before(() => {
    // 创建当前应用的 app 实例
    app = mock.app();
    // 等待 app 启动成功，才能执行测试用例
    return app.ready();
  });

  it('测试uuid', () => {
    const key = uuid.v4();
    return key.length === 36;
  });

  it('获取七牛上传的token', () => {
    const accessKey = app.config.qiniu.AK;
    const secretKey = app.config.qiniu.SK;
    const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);

    const key = uuid.v4();

    const options = {
      scope: app.config.qiniu.imagePutPolicy + ':' + key
    };

    const putPolicy = new qiniu.rs.PutPolicy(options);

    const uploadToken = putPolicy.uploadToken(mac);

    // console.log('token', uploadToken);
    return uploadToken;
  });
});
