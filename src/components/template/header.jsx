import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render () {
    return (
      <header id='main-header'>

        <div className='container-fluid'>

          <div className='logo'>
            <Link to='/'>
              <img src={require('src/assets/images/logo.png')} alt='Star Wars Logo' />
            </Link>
          </div>

        </div>

      </header>
    )
  }
}

export default Header