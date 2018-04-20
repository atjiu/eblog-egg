'use strict'

const Controller = require('egg').Controller;

class UserController extends Controller {

  async toLogin() {
    await this.ctx.render('login.nunjucks');
  }

  async login() {
    const ctx = this.ctx;
    const config = this.app.config;
    const body = ctx.request.body;

    let user;
    // 从数据库里查用户
    // user = await ctx.model.Post.findOne({username: body.username});
    // if(!user) return ctx.body = {code: 201, desc: '用户名或密码错误', detail: null};

    // 这里从配置文件里取用户信息
    if(body.username !== config.user.username || body.password !== config.user.password) {
      return ctx.body = {code: 201, desc: '用户名或密码错误', detail: null};
    }

    ctx.session.user = config.user;
    ctx.body = {code: 200, desc: null, detail: null};
  }

  async logout() {
    const ctx = this.ctx;
    const config = this.app.config;
    ctx.session = null;
    ctx.redirect(ctx.get('referer') || '/');
  }

}

module.exports = UserController;
