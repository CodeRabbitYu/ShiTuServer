/**
 * Created by Rabbit on 2019/05/06.
 */

'use strict';

const Controller = require('egg').Controller;

const uuidv1 = require('uuid/v1');

const NewsType = {
  BaiSi: 0,
  GanHuo: 1
};

class ConfigController extends Controller {
  async loadConfigData() {
    const { ctx } = this;
    const uuid = uuidv1();

    ctx.body = {
      success: true,
      data: {
        uuid: uuid,
        newsType: NewsType.BaiSi
      }
    };
  }
}

module.exports = ConfigController;
