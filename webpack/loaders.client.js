const path = require('path')
const { paths } = require('../scripts/utils')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  rules: [
    {
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    {
      test: /\.css$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader
        },
        {
          loader: 'css-loader'
        },
        {
          loader: 'postcss-loader',
          options: {
            plugins: [require('autoprefixer')]
          }
        }
      ]
    },
    {
      test: /\.(png|jpe?g|gif|ico)$/,
      exclude: [path.join(paths.src, '/assets/images/icons/')],
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 150000,
            outputPath: 'assets/images',
            name: '[name].[ext]'
          }
        }
      ]
    },
    {
      test: /\.(png|jpe?g|gif|ico)$/,
      include: [path.join(paths.src, '/assets/images/icons/')],
      use: [
        {
          loader: 'file-loader',
          options: {
            outputPath: 'assets/images/icons',
            name: '[name].[ext]'
          }
        }
      ]
    },
    {
      test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            outputPath: 'assets/fonts',
            mimetype: 'application/font-woff',
            name: '[name].[ext]'
          }
        }
      ]
    },
    {
      test: /\.svg$/,
      use: [
        '@svgr/webpack',
        {
          loader: 'url-loader',
          options: {
            limit: 150000,
            outputPath: 'assets/images',
            name: '[name].[ext]'
          }
        }
      ]
    }
  ]
}
