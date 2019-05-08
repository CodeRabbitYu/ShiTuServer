'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async loadNewsData() {
    const { ctx } = this;
    const newsData = await ctx.service.news.fetchNewsData();
    ctx.body = {
      data: newsData,
      status: 'success'
    };
  }
}

module.exports = NewsController;
