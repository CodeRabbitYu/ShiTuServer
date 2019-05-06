/**
 * Created by Rabbit on 2019/03/18.
 */
'use strict';

const Service = require('egg').Service;

const BaiSiType = {
	'All': 1,
	'Video': 41,
	'Picture': 10,
	'Joke': 29
};

class IndexService extends Service {
  async fetchBaiSiData() {
    const { type, maxtime } = this.ctx.query;
    const url = `http://api.budejie.com/api/api_open.php?a=list&c=data&type=${type}&maxtime=${maxtime}`
    const budejieData = await this.ctx.curl(url, { dataType: 'json' });
    // ctx.body = data;
    return budejieData;
  }
}

module.exports = IndexService;
