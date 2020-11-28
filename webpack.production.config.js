const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');


module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: ''
  },
  mode: 'production',
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
          MiniCssExtractPlugin.loader, 'css-loader?url=false' 
        ] 
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader', 'resolve-url-loader', 'sass-loader'
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
    new MiniCssExtractPlugin({
      filename: 'styles.[contenthash].css'
    }),
    new CssMinimizerPlugin(),
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
    new ImageMinimizerPlugin({
      minimizerOptions: {
        plugins: [
          ['mozjpeg', { quality: 30 }],
          ['pngquant', {quality: [0.5, 0.5]}],
        ],
      },
    })
  ]
}


// devServer: {
//   before: function(app, server) {
//     server._watch('./src/**/*.html')
//   },
//   contentBase: path.join(__dirname, 'src'),
//   hot: true,
//   port: 3000,
//   open: true
// },


/*new ImageMinimizerPlugin({
  test: /\.(png)$/i,
  deleteOriginalAssets: false,
  filename: '[name].webp',
  minimizerOptions: {
    plugins: ['imagemin-webp'],
  },
}),*/