'use strict';

const HTMLplugin = require('html-webpack-plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: `${__dirname}/app/entry`,
  output: {
    filename: 'bundle-[hash].js',
    path: `${__dirname}/build`,
  },
  plugins: [
    new HTMLplugin({ template: `${__dirname}/app/index.html` }),
    new ExtractPlugin('bundle-[hash].css')
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node-modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: ExtractPlugin.extract(['css-loader'],['style-loader'])
      }
    ]
  }
}