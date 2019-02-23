'use strict'

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import connect from 'react-redux/es/connect/connect'

import moment from 'moment'

import { getMovies, getNames, clearSingleMovie } from 'reducers/movies/action-creators'
import { convertToRoman } from 'src/utils/functions'
import { Link, withRouter } from 'react-router-dom'

import List from './components/list'

class Single extends Component {

  constructor (props) {
    super(props)
    this.handleAnimation = this.handleAnimation.bind(this)
    this.handlePause = this.handlePause.bind(this)

    this.state = {
      loading: true,
      characters: null,
      starships: null,
      planets: null,
      species: null,
      pause: false
    }
  }

  componentWillUnmount () {
    document.body.classList.remove('single-page')
    this.props.clearSingleMovie()
  }

  async componentDidMount () {
    document.body.classList.add('single-page')

    const {episodeId} = this.props.match.params
    try {
      this.props.getMovies(episodeId).then(() => {
        const {movie} = this.props.movie

        if (this.props.movie.notFound) {
          this.props.history.push('/not-found')
        }
        let characteres = this.props.getNames(movie.characters).then(characteres => {
          this.setState({characters: characteres})
        })
        let starships = this.props.getNames(movie.starships).then(starships => {
          this.setState({starships: starships})
        })
        let planets = this.props.getNames(movie.planets).then(planets => {
          this.setState({planets: planets})
        })
        let species = this.props.getNames(movie.species).then(species => {
          this.setState({species: species})
        })
        Promise.all([characteres, starships, planets, species]).then(() => {
          this.setState({loading: false})
        })
      })
    } catch (err) {
      console.log('err: ', err)
    }
  }

  handleAnimation () {
    let el = document.querySelector('.crawl')
    el.classList.remove('animate')
    setTimeout(() => {
      el.classList.add('animate')
    }, 100)
  }

  handlePause () {
    this.setState({pause: !this.state.pause})
  }

  renderMovieData () {
    const {movie} = this.props.movie

    /**
     * If movie variable is empty, returns false to avoid errors
     */
    if (!movie || this.state.loading) return false

    return (
      <div>
        <div className='actions'>
          <Link to='/' className='back'>
            <i className='fa fa-arrow-left' /> Voltar
          </Link>
          <div className='help'>
            <i className='fa fa-info-circle' />
            <div className='message'>
              Clique no texto para parar/iniciar a animação
            </div>
          </div>
          <a href={null} onClick={this.handleAnimation} className='handle-animation'>
            Reiniciar
          </a>
        </div>
        <div onClick={this.handlePause}  className='single-movie'>
          <div className={`crawl animate ${this.state.pause ? 'pause' : ''}`}>

            <div className='title'>
              <h1>Episódio {convertToRoman(movie.episode_id)} {movie.title}</h1>
            </div>
            <div className='opening'>
              {movie.opening_crawl}
            </div>

            <div className='date'>
              <span>Data de lançamento</span>
              <strong>{moment(movie.release_date).format('DD/MM/YYYY')}</strong>
            </div>
            <div className='director'>
              <span>Diretor</span>
              <strong>{movie.director}</strong>
            </div>
            <div className='producers'>
              <span>Produtores</span>
              <strong>{movie.producer}</strong>
            </div>
            <div className='lists'>
              <div className='starships'>
                <strong>Naves</strong>
                <List data={this.state.starships} />
              </div>
              <div className='planets'>
                <strong>Planetas</strong>
                <List data={this.state.planets} />
              </div>
              <div className='characteres'>
                <strong>Personagens</strong>
                <List data={this.state.characters} />
              </div>
              <div className='species'>
                <strong>Raças</strong>
                <List data={this.state.species} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render () {
    return (
      <section id='movie-single-page' className='movie-single-page'>
        <div className='container'>
          <div className='movie-data'>
            {this.renderMovieData()}
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  movie: state.movies.single
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getMovies,
  getNames,
  clearSingleMovie
}, dispatch)

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Single))
