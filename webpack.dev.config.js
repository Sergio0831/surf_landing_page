const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: ''
  },
  mode: 'development',
  devServer: {
      contentBase: path.join(__dirname, './dits'),
      index: 'index.html',
      port: 9000,
      open: true,
      hot: true
    },
  module: {
    rules: [
      {
        test: /\.(svg|png|jpeg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img',
              publicPath: 'img',
              emitFile: true,
            }
          },
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.hbs$/i,
        loader: 'handlebars-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', 'css-loader?url=false' 
        ] 
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/env' ],
            plugins: [ '@babel/plugin-proposal-class-properties' ]
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts'
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.hbs'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/img',
          to: path.resolve(__dirname, 'dist/img')
        },
      ],
    }),
  ]
}

