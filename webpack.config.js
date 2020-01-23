
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const publicPath = '/';
// const windowsGlobalNodeModules = process.env.HOME + '\\AppData\\Roaming\\npm\\node_modules'
const windowsGlobalNodeModules = '\\node_modules'
console.info('Resolving global modules from :' + windowsGlobalNodeModules)

module.exports = {
  mode: 'development',
  optimization: {
    minimizer: [
      // we specify a custom UglifyJsPlugin here to get source maps in production
      new UglifyJsPlugin({
        cache: false,
        parallel: true,
        uglifyOptions: {
          compress: {
            dead_code: false,
            drop_debugger: false
          }
        },
        sourceMap: true
      })
    ]
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
    ignored: /(node_modules|public|\.git)/
  },
  entry: './private/index.tsx',
  output: {
    filename: 'master.js',
    path: path.resolve(__dirname, 'public/TEST_20_ES_files'),
    publicPath: publicPath,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: [windowsGlobalNodeModules]
  },
  resolveLoader: {
    modules: [windowsGlobalNodeModules]
  },
  // Source maps support ('inline-source-map' also works)
  // devtool: 'source-map',
  module: {
    // Add the loader for .ts files.
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // only enable hot module reloading in development
              // hmr: process.env.NODE_ENV === 'development',
              // if hmr does not work, this is a forceful method.
              reloadAll: true,
            },
          },
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
            options: {
              outputStyle: 'compressed'
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: 'style.css',
      chunkFilename: 'chunk.css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
  ]
}