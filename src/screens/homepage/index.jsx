'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import moment from 'moment'

import { getMovies } from 'reducers/movies/action-creators'
import { convertToRoman } from 'src/utils/functions'

class Homepage extends Component {

  componentDidMount () {
    this.props.getMovies()
  }

  renderMovies () {
    const {movies} = this.props
    if (Array.isArray(movies) && movies.length > 0) {
      return movies.map(movie => (
        <li key={movie.episode_id} className='movie'>
          <div className='box'>
            <div className='header'>
              <h2>
                <Link
                  to={`/single-movie/${movie.episode_id}`}>Episódio {convertToRoman(movie.episode_id)} {movie.title}</Link>
              </h2>
              {movie.release_date ? (
                <div className='date'>
                  <span>Data de lançamento: {moment(movie.release_date).format('DD/MM/YYYY')}</span>
                </div>) : null
              }
            </div>
            <div className='excerpt'>
              {movie.opening_crawl}
            </div>
            <div className='action'>
              <Link to={`/single-movie/${movie.episode_id}`} className='read-more'>Saiba mais</Link>
            </div>
          </div>
        </li>
      ))
    }
  }

  render () {
    return (
      <section id='movies-list'>
        <div className='container'>
          <ul className='movies-list'>
            {this.renderMovies()}
          </ul>
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  movies: state.movies.list
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getMovies
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage)