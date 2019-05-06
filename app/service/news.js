/**
 * Created by Rabbit on 2019/05/06.
 */

'use strict';

const Service = require('egg').Service;

const BaiSiType = {
  All: 1,
  Video: 41,
  Picture: 10,
  Joke: 29
};

const GankType = 'iOS' | 'android' | '福利';

class NewsService extends Service {
  async fetchNewsData() {
    return this.fetchBaiSiData();
  }

  async fetchBaiSiData() {
    const { type, maxtime } = this.ctx.query;
    const url = `http://api.budejie.com/api/api_open.php?a=list&c=data&type=${type}&maxtime=${maxtime}`;
    const budejieData = await this.ctx.curl(url, { dataType: 'json' });
    // ctx.body = data;
    return budejieData;
  }

  async fetchGankData() {
    const { type = '福利', page = 1, count = 20 } = this.ctx.query;
    const _type = encodeURI(type);
    const url = `http://gank.io/api/data/${_type}/${count}/${page}`;
    // const url = `http://gank.io/api/data/iOS/20/1`;
    const gankData = await this.ctx.curl(url, { dataType: 'json' });
    return gankData;
  }
}

module.exports = NewsService;
