'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async findUser() {
    console.log('await 之前');
    const result = await this.ctx.model.User.find({
      _id: '5c930c65c9c108678c9f16d0'
    });
    console.log('22222', result);
    return result;
  }

  async addUser() {
    const user = new this.ctx.model.User({
      username: 'aaa',
      password: 'bbbb'
    });
    console.log('iser', user);
    user.save();
  }
}

module.exports = UserService;
