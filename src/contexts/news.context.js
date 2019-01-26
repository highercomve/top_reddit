import React, { useContext, createContext, useReducer, useEffect } from 'react'
import { reducerFactory } from './reducer-factory'
/**
 * @typedef {Object} state
 * @property {Array} news - array of news
 * @property {object} newsConfiguration - object with map of news and configuration
 * @property {number} limit
 * @property {string} after
 * @property {string} before
*/

/**
 * @typedef {Object} action
 * @property {string} type - string with the type of action
 * @property {any} payload - value for the action
*/

/**
 * @typedef {Function} dispatch
 * @returns void
 */

/**
  * @typedef {Object} store
  * @property {state} state
  * @property {React.Dispatch<action>} dispatch
*/

/**
 * @type {state}
 */
const initialState = {
  loading: true,
  news: {},
  limit: 25,
  after: undefined,
  before: undefined,
  newsConfiguration: {}
}
const LOCAL_NAME = 'newsStore'
const storedState = window.localStorage.getItem(LOCAL_NAME) || {}

/**
 * Reducer function
 * @param {state} state
 * @param {action} action
 * @returns {state} state
 */
const reducer = reducerFactory(Object.assign(initialState, storedState))

const News = createContext({ state: initialState, dispatch: () => {} })

function NewsProvider (props) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch }

  useEffect(() => {
    window.localStorage.setItem(LOCAL_NAME, state)
  })

  return (
    <News.Provider value={value}>{props.children}</News.Provider>
  )
}

function useNews () {
  return useContext(News)
}

const NewsConsumer = News.Consumer

export { reducer, useNews, News, NewsProvider, NewsConsumer }
