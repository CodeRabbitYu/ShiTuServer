'use strict';

const Service = require('egg').Service;
const uuid = require('uuid');
const qiniu = require('qiniu');

class TokenService extends Service {
  async getQiNiuToken() {
    const accessKey = this.app.config.qiniu.AK;
    const secretKey = this.app.config.qiniu.SK;
    const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);

    let key = uuid.v4();
    key += '.jpeg';

    const options = {
      scope: this.app.config.qiniu.imagePutPolicy + ':' + key
    };

    const putPolicy = new qiniu.rs.PutPolicy(options);

    const uploadToken = putPolicy.uploadToken(mac);

    return {
      key: key,
      token: uploadToken
    };
  }
}

module.exports = TokenService;
