'use strict'

import React, { Component } from 'react'

import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'
import 'src/common/template/dependencies'

import Header from 'src/components/template/header'
import Footer from 'src/components/template/footer'

class App extends Component {

  render () {

    return (
      <Router>
        <div className='app'>
          <Header />
          <main className='content-wrapper' id='content-main'>
            <Routes />
          </main>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
