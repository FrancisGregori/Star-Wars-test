'use strict'

let PORT = Number(process.env.PORT || 3000)

if (process.env.NODE_ENV === 'production') {
  const express = require('express')
  const path = require('path')
  const app = express()

  app.use(express.static(path.join(__dirname, 'public')))

  app.get('/!*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
  })
  app.listen(PORT)
} else {
  const webpack = require('webpack')
  const WebpackDevServer = require('webpack-dev-server')
  const config = require('./webpack/dev.config')

  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    overlay: true,
    stats: { colors: true }
  }).listen(PORT, (err) => {
    if (err) {
      return console.log(err)
    }
    console.log('Listening on http://localhost:3000')
  })
}
