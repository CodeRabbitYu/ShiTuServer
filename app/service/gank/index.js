/**
 * Created by Rabbit on 2019/03/11.
 */
'use strict';

const Service = require('egg').Service;

const GankType = 'iOS' | 'android' | '福利';

class GankService extends Service {
  async fetchGankData() {
    const { type = '福利', page = 1, count = 20 } = this.ctx.query;
    const _type = encodeURI(type);
    const url = `http://gank.io/api/data/${_type}/${count}/${page}`;
    // const url = `http://gank.io/api/data/iOS/20/1`;
    const gankData = await this.ctx.curl(url, { dataType: 'json' });
    return gankData;
  }
}

module.exports = GankService;
