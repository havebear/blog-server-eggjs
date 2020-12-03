/*
 * @Author: 616749285@qq.com
 * @Date: 2020-11-26 20:47:48
 * @LastEditors: 616749285@qq.com
 * @LastEditTime: 2020-11-26 20:47:49
 * @Description:  用户
 */

"use strict";

const Controller = require("egg").Controller;

class UserController extends Controller {
  // 登录
  async login () {
    const { ctx } = this;
    ctx.body = 'login';
  }
}

module.exports = UserController;
