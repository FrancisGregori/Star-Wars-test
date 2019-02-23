'use strict'

import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import multi from 'redux-multi'
import rootReducer from 'reducers'

export default ({initialState} = {}) => {
  const enhancer = compose(applyMiddleware(thunk, multi, promise), logger())
  const store = createStore(rootReducer, initialState, enhancer)

  if (module.hot) {
    module.hot.accept('reducers', () => {
      const nextReducer = require('reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}

const logger = () => window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (x) => x
