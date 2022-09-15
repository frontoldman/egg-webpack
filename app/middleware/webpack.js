'use strict';

const hotMiddleware = require('koa-webpack-hot-middleware');

const webpack = require('webpack');

module.exports = option => {
  const { configPath } = option;
  const devConfig = require(configPath);
  const compile = webpack(devConfig);
  return hotMiddleware(compile);
};
