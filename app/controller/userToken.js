/**
 * Created by Rabbit on 2019/05/06.
 */

'use strict';

const Controller = require('egg').Controller;

const uuidv1 = require('uuid/v1');

class UserTokenController extends Controller {
  async loadUserToken() {
    const { ctx } = this;
    ctx.body = {
      success: true,
      data: uuidv1()
    };
  }
}

module.exports = UserTokenController;
