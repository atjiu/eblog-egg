'use strict';

module.exports = () => {

  /*
   * 需要登录
   */
  return async (ctx, next) => {
    if (!ctx.session.user) {
      return ctx.render('login.nunjucks');
    }
    await next();
  };
};
