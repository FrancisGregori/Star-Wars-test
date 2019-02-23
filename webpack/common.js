'use strict'

const {join} = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const paths = {
  root: join(__dirname, '..'),
  src: join(__dirname, '..', 'src'),
  public: join(__dirname, '..', 'public'),
  modules: join(__dirname, '..', 'node_modules')
}

module.exports = {
  paths,
  entry: {
    main: join(paths.src, 'index')
  },
  output: {
    path: paths.public,
    filename: '[name]-[chunkhash].js',
    publicPath: '/'
  },
  htmlPluginConfig: {
    title: 'Star Wars - The Movies\n',
    favicon: 'src/assets/images/favicon.ico',
    template: join(paths.src, 'common', 'html', 'template.html')
  },
  standardPreLoader: {
    enforce: 'pre',
    test: /.js[x]?$/,
    include: paths.src,
    exclude: join(paths.src, 'assets'),
    use: {
      loader: 'standard-loader',
      options: {
        parser: 'babel-eslint'
      }
    }
  },
  jsLoader: {
    test: /.js[x]?$/,
    include: paths.src,
    exclude: join(paths.src, 'assets'),
    use: ['react-hot-loader/webpack', {
      loader: 'babel-loader',
      options: {
        presets: [['env', {modules: false}], 'stage-0', 'react'],
        plugins: [
          ['transform-runtime', {
            helpers: false,
            polyfill: false,
            regenerator: true
          }]
        ]
      }
    }]
  },
  scssLoader: {
    test: /\.scss?$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[path][name]__[local]--[hash:base64:6]'
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            parser: 'postcss-scss'
          }
        }
      ]
    })
  },
  cssLoader: {
    test: /\.css$/,
    include: [paths.src, paths.modules],
    use: ['style-loader', 'css-loader']
  },
  fileLoader: {
    test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|txt)(\?.*)?$/,
    include:
    paths.src,
    use: {
      loader: 'file-loader',
      options: {
        name: 'media/[name].[hash:8].[ext]'
      }
    }
  },
  urlLoader: {
    test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
    include:
    paths.src,
    use: {
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: 'media/[name].[hash:8].[ext]'
      }
    }
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      src: paths.src,
      modules: paths.modules,
      components: join(paths.src, 'components'),
      utils: join(paths.src, 'utils'),
      reducers: join(paths.src, 'redux-flow', 'reducers')
    }
  }
}
