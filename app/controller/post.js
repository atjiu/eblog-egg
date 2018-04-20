'use strict'

const Controller = require('egg').Controller;

class PostController extends Controller {

  async post() {
    const params = this.ctx.params;
    const id = params.id;
    const post = await this.ctx.model.Post.findOne({_id: id});
    await this.ctx.render('post.nunjucks', {post: post});
  }

  async publish_post() {
    const id = this.ctx.request.query.id;
    let post = {};
    if(id) {
      post = await this.ctx.model.Post.findOne({_id: id});
    }
    await this.ctx.render('publish_post.nunjucks', {post: post});
  }

  async save_post() {
    const body = this.ctx.request.body;
    let id = body.id;
    if(id) {
      await this.ctx.model.Post.update({_id: id}, {
        title: body.title,
        content: body.content,
        categories: body.categories,
        tags: body.tags
      });
    } else {
      let _post = new this.ctx.model.Post({
        author: 'tomoya',
        date: Date.now(),
        title: body.title,
        content: body.content,
        categories: body.categories,
        tags: body.tags,
      });
      const post = await _post.save();
      id = post._id;
    }
    this.ctx.redirect('/post/' + id);
  }

}

module.exports = PostController;