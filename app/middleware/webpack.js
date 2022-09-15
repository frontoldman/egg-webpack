'use strict';

const devMiddleware = require('koa-webpack-dev-middleware');
const hotMiddleware = require('koa-webpack-hot-middleware');
const webpack = require('webpack');

module.exports = option => {
  const { configPath } = option;
  const devConfig = require(configPath);
  const compile = webpack(devConfig);

  const devWebpack = devMiddleware(compile, {
    clientLogLevel: 'none',
    stats: {
      colors: true, // 控制台输出带颜色
    },
    publicPath: devConfig.output.publicPath,
    hot: true,
    open: true,
    historyApiFallback: false,
  });

  const hotWebpack = hotMiddleware(compile);

  return async function(ctx, next) {
    await devWebpack(ctx, next);
    await hotWebpack(next);
  };
};
