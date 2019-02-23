import createReducer from '../create-reducer'
import { SUCCESS, SINGLE_MOVIE_SUCCESS } from './actions'

const initialState = {list: [], single: {movie: null, notFound: false}}

const movies = createReducer(initialState, {
  [SUCCESS]: (state, action) => {
    return {...state, list: action.payload}
  },
  [SINGLE_MOVIE_SUCCESS]: (state, action) => {
    return {...state, single: {movie: action.payload, notFound: (!action.payload)}}
  }
})

export default movies
