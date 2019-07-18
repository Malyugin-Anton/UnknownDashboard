const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', path.join(__dirname, 'src', 'index.js')],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.map'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true
  },
  mode: 'development',
  devtool: '#source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          'presets': ['env', 'stage-0', 'react']
        }
      },
      {
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => [require('autoprefixer')]
          }
        }, 'sass-loader']
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }]
      },
      {
        test: /\.(eot|svg|ttf|woff2?|otf)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html')
    })
  ]
}
