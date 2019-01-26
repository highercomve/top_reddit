import React, { createContext, useReducer } from 'react'

let News = createContext()

let initialState = {
  news: {},
  newsConfiguration: {}
}

let reducer = (state, action) => {
  switch (action.type) {
    case 'reset':
      return initialState
    default:
      return initialState
  }
}

function NewsProvider (props) {
  let [state, dispatch] = useReducer(reducer, initialState)
  let value = { state, dispatch }

  return (
    <News.Provider value={value}>{props.children}</News.Provider>
  )
}

let NewsConsumer = News.Consumer

export { News, NewsProvider, NewsConsumer }
