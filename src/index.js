import React from 'react'
import ReactDOM from 'react-dom'
import App from './app.js'
import { NewsProvider } from './contexts/news.context'

ReactDOM.render(
  <NewsProvider>
    <App />
  </NewsProvider>,
  document.getElementById('top-reddit')
)
