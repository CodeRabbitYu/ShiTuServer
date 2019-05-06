/**
 * Created by Rabbit on 2019/03/18.
 */
'use strict';

const Controller = require('egg').Controller;

class GankController extends Controller {
  async loadGankData() {
    const { ctx } = this;
    const gankData = await ctx.service.gank.index.fetchGankData();
    ctx.body = {
      ...gankData
    };
  }
}

module.exports = GankController;
