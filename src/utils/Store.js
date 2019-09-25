import { applyMiddleware, combineReducers, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import promiseMiddleware from 'redux-promise'

import weatherReducer from '../reducers/weather'

export const configureStore = () => {
  let middleware = [promiseMiddleware]

  if (process.env.NODE_ENV === 'development') {
    middleware.unshift(createLogger({
      collapsed: true,
      predicate: (getState, action) => !action.type.startsWith('@') && !(action.payload instanceof Promise)
    }))
  }

  const rootReducer = combineReducers({
    weatherReducer: weatherReducer
  })

  const store = createStore(rootReducer, {}, applyMiddleware(...middleware))

  return store
}
