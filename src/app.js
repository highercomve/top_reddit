import React, { useEffect } from 'react'
import { NewsProvider, useNews } from './contexts/news.context'
import { Container, Row } from './components/Styled'
import NewsLists from './components/NewsLists'
import { getTopNews } from './services/reddit.service'
import loadingImg from './loading.gif'

function Loading () {
  return (
    <div>
      <img src={loadingImg} />
    </div>
  )
}

export default function App () {
  const { state, dispatch } = useNews()

  useEffect(() => {
    getTopNews(state.limit, state.after, state.before)
      .then(news => {
        dispatch({ type: 'update', payload: news.data })
        dispatch({ type: 'loading', payload: false })
      })
  }, [])

  if (state.loading) {
    return (
      <NewsProvider>
        <Loading />
      </NewsProvider>
    )
  }

  return (
    <Container>
      <Row col='4'>
        <NewsLists />
      </Row>
    </Container>
  )
}
