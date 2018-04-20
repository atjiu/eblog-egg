'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {

  async index() {
    const posts = await this.ctx.model.Post.find({}).sort({'date': '-1'}).limit(10);
    await this.ctx.render('index.nunjucks', {posts: posts});
  }

}

module.exports = HomeController;
