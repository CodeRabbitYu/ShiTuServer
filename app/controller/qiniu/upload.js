'use strict';

const Controller = require('egg').Controller;

class UploadController extends Controller {
  async image() {
    const { ctx } = this;
    const url = await ctx.service.qiniu.upload.uploadImage();
    ctx.body = {
      data: {
        url
      },
      status: 'success'
    };
  }
}

module.exports = UploadController;
