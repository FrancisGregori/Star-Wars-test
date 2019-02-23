import React, { Component } from 'react'

class Header extends Component {
  render () {
    return (
      <footer id='main-footer'>
        <section id='social' className='social'>
          <div className='social-links'>
            <p>Follow Star Wars:</p>
            <ul>
              <li>
                <a className='fab fa-facebook-f' href='https://www.facebook.com/StarWars' target='_blank'
                   title='facebook'></a>
              </li>
              <li>
                <a className='fab fa-tumblr' href='https://starwars.tumblr.com/' target='_blank'
                   title='tumblr'></a>
              </li>
              <li>
                <a className='fab fa-twitch' href='https://twitter.com/starwars' target='_blank'

                   title='twitter'></a>
              </li>
              <li>
                <a className='fab fa-instagram' href='https://www.instagram.com/starwars/' target='_blank'
                   title='instagram'></a>
              </li>
              <li>
                <a className='fab fa-google-plus-g' href='https://plus.google.com/+StarWars/posts'
                   target='_blank'
                   title='google plus'></a>
              </li>
              <li>
                <a className='fab fa-youtube' href='https://www.youtube.com/user/starwars' target='_blank'
                   title='youtube'></a>
              </li>
            </ul>
          </div>
        </section>
        <section id='copyright' className='copyright'>
          <p>TM &amp; © Lucasfilm Ltd. All Rights Reserved</p>
        </section>
      </footer>
    )
  }
}

export default Header