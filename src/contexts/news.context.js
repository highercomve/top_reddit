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
  loading: null,
  news: {},
  selected: null,
  limit: 25,
  after: undefined,
  before: undefined,
  newsConfiguration: {}
}
const LOCAL_NAME = 'newsStore'
let storedState = {}
try {
  storedState = JSON.parse(window.localStorage.getItem(LOCAL_NAME) || `{}`)
} catch (e) {}

/**
 * Reducer function
 * @param {state} state
 * @param {action} action
 * @returns {state} state
 */
const reducer = reducerFactory(Object.assign(initialState, storedState))

const News = createContext({ state: initialState, dispatch: () => {} })

const saveToStore = (next) => (action) => {
  const state = next(action)
  try {
    window.localStorage.setItem(LOCAL_NAME, JSON.stringify(state))
  } catch (e) {}
  return state
}

function NewsProvider (props) {
  const [state, updateState] = useReducer(reducer, initialState)
  const dispatch = (action) => {
    return saveToStore(updateState)(action)
  }
  const value = { state, dispatch }

  return (
    <News.Provider value={value}>{props.children}</News.Provider>
  )
}

function useNews () {
  return useContext(News)
}

const NewsConsumer = News.Consumer

export { reducer, useNews, News, NewsProvider, NewsConsumer }
