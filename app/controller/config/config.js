'use strict';

const uuidv1 = require('uuid/v1');

const Controller = require('egg').Controller;

const NewsType = {
  'BaiSi': 0,
  'GanHuo': 1,
}

class ConfigController extends Controller {
  async index() {
    const { ctx } = this;
    const uuid = uuidv1();

    ctx.body = {
      success: true,
      data: { 
        uuid: uuid,
        newsType: NewsType.BaiSi
      }
    }
  }
}

module.exports = ConfigController;
