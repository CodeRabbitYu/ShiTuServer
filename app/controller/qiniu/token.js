'use strict';

const Controller = require('egg').Controller;

class QiniuTokenController extends Controller {
  async loadToken() {
    const { ctx } = this;
    const token = await ctx.service.qiniu.token.getQiNiuToken();
    ctx.body = {
      data: token,
      status: 'success'
    };
  }
}

module.exports = QiniuTokenController;
