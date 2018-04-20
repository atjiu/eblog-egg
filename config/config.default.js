'use strict';

const path = require('path');

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1523157104514_3473';
  config.disqus = '';

  //后台用户的用户名密码
  config.user = {
    username: 'admin',
    password: '123123',
    token: 'test_token'
  };

  exports.session = {
    key: 'ESESSIONID',
    maxAge: 30 * 24 * 3600 * 1000, // 30 天
    httpOnly: true,
    encrypt: true,
  };

  // add your config here
  config.middleware = [];

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.nunjucks': 'nunjucks'
    },
    root: [
      path.join(appInfo.baseDir, 'app/view')
    ].join(',')
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1/example',
      options: {},
    }
  };

  return config;
};
