import 'babel-polyfill'
import fs from 'fs'
import webpack from 'webpack'

export default {
  debug: true,
  devtool: 'cheap-source-map',
  target: 'electron',
  entry: './main.js',
  output: {
    path: '.',
    filename: 'main.build.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      }
    ]
  },
  externals: fs.readdirSync('node_modules')
  .filter(dir => '.bin' !== dir)
}
