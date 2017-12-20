const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['react-html-attrs'],
        }
      },
      { test: /\.css$/,
        loader: ExtractTextPlugin.extract("css-loader")
      },
      {
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      },  
      { test: /\.(jpe?g|png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000' 
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css")
  ]
};