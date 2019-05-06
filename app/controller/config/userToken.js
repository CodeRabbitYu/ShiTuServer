'use strict';

const uuidv1 = require('uuid/v1');

const Controller = require('egg').Controller;

class UserTokenController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = {
      success: true,
      data: uuidv1()
    }
  }
}

module.exports = UserTokenController;