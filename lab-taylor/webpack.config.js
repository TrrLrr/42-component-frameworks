'use strict';

const HTMLPlugin = require('html-webpack-plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: `${__dirname}/src/index.js`,
  output: {
    filename: 'bundle-[hash].js',
    path: `${__dirname}/build`,
  },
  plugins: [
    new HTMLPlugin({ template: `${__dirname}/src/index.html` }),
    new ExtractPlugin('bundle-[hash].css')
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: ExtractPlugin.extract(['css-loader'], ['sass-loader'])
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
    }
  }
};
