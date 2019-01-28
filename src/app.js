import React, { useEffect } from 'react'
import { NewsProvider, useNews } from './contexts/news.context'
import { Container, Row } from './components/Styled'
import NewsLists from './components/NewsLists'
import ArticleDetail from './components/ArticleDetail'
import { getTopNews } from './services/reddit.service'
import Loading from './components/Loading'
import Actions from './components/Actions'

export default function App () {
  const { state, dispatch } = useNews()

  useEffect(() => {
    dispatch({ type: 'loading', payload: 'app' })
    getTopNews(state.limit, state.after, state.before)
      .then(news => {
        dispatch({ type: 'update', payload: news.data })
        dispatch({ type: 'loading', payload: null })
      })
  }, [])

  if (state.loading === 'app') {
    return (
      <NewsProvider>
        <Loading />
      </NewsProvider>
    )
  }

  return (
    <Container>
      <Row size='4' direction='column' className='tablet'>
        <Actions />
        <NewsLists />
      </Row>
      <Row size='8' direction='column' className='tablet'>
        <ArticleDetail />
      </Row>
    </Container>
  )
}
