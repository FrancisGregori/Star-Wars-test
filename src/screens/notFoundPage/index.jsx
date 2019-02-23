'use strict'

import React from 'react'

export default props => (
  <section id='not-found-page' className='not-found-page'>
    <div className='container'>
      <div className='row'>
        <div className='internal-title'>
          <h1>Página não encontrada!</h1>
        </div>
        <div className='image'>
          <img src={require('src/assets/images/404.png')} alt='' />
        </div>
      </div>
    </div>
  </section>
);
