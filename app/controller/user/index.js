const Controller = require('egg').Controller;
const util = require('util');

class IndexController extends Controller {
  async deleteUser() {
    const { ctx } = this;

    // console.log('ctx', ctx.app);
    // console.log('model', ctx.model);
    // console.log('xxxxxxxxxx', this.ctx.model.User.find({}));

    ctx.model.User.save([
      {
        userName: '123',
        password: '333'
      }
    ]);

    ctx.body = 'success';
  }

  async findUser() {
    const res = await this.service.user.user.findUser();
    console.log(res);
    this.ctx.body = res;
  }

  async addUser() {
    const { ctx } = this;
    await this.service.user.user.addUser();
    this.ctx.body = `hi, egg`;
  }
}

module.exports = IndexController;
