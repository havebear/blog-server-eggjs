/*
 * @Author: BGG
 * @Date: 2020-11-26 20:47:48
 * @LastEditors: BGG
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
