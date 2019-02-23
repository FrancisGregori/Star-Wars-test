'use strict'

import axios from 'axios'
import consts from '../../config/consts'
import { SUCCESS, SINGLE_MOVIE_SUCCESS } from './actions'

/**
 * Function to get the name of characters, planets and starships
 * @param items
 * @returns {Promise<any[] | never>}
 */
export async function getNames (items) {
  return dispatch => (
    Promise.all(
      items.map(async item => {
        return axios.get(item).then(item => {
          return item.data.name
        }).catch(err => {
          return false
        })
      })
    ).then(result => {
      return result
    }).catch(err => {
      console.log(err)
      return null
    })
  )
}

export async function getMovies (episodeId = '') {
  const request = await axios.get(`${consts.API_URL}/films/${episodeId}`).then(async result => {
    return result
  }).catch(err => {
    return false
  })

  /**
   * If the episodeId is not empty we will fill the state of the single movie
   */
  if (episodeId) {
    return dispatch => {
      dispatch({
        type: SINGLE_MOVIE_SUCCESS,
        payload: request.data
      })
    }
  } else {
    /**
     * Order the movies by episode_id(desc)
     */
    let results = request.data.results.sort((a, b) => {
      return b.episode_id - a.episode_id
    })

    return dispatch => {
      dispatch({
        type: SUCCESS,
        payload: results
      })
    }
  }
}

export function clearSingleMovie () {
  return dispatch => {
    dispatch({
      type: SINGLE_MOVIE_SUCCESS,
      payload: {movie: null, notFound: false}
    })
  }
}