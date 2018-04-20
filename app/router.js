'use strict';
const moment = require('moment');
require('../node_modules/moment/locale/zh-cn');
/**
 * @param {Egg.Application} app - egg application
 */

module.exports = app => {

  app.locals.moment = moment;
  app.locals.config = app.config;

  const { router, controller, middleware } = app;
  const { home, post, user } = controller;

  const userRequired = middleware.userRequired();

  router.get('/', home.index);
  router.get('/post/:id', post.post);
  router.get('/publish_post', userRequired, post.publish_post);
  router.post('/save_post', userRequired, post.save_post);
  router.get('/login', user.toLogin);
  router.post('/login', user.login)

  app.router.get('/logout', user.logout);

};
