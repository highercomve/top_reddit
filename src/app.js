import React, { useEffect } from 'react'
import { useNews } from './contexts/news.context'
import { Container, Row, Center } from './components/Styled'
import NewsLists from './components/NewsLists'
import ArticleDetail from './components/ArticleDetail'
import { getTopNews } from './services/reddit.service'
import Loading from './components/Loading'
import Actions from './components/Actions'
import Pagination from './components/Pagination'
import styled from 'styled-components'

const ShowableRow = styled(Row)`
  transition: all 400ms ease;
`

export default function App () {
  const { state, dispatch } = useNews()

  useEffect(() => {
    dispatch({ type: 'loading', payload: 'app' })
    dispatch({ type: 'close' })
    getTopNews(state.limit, state.after, state.before)
      .then(news => {
        dispatch({ type: 'update', payload: news.data })
        dispatch({ type: 'loading', payload: null })
      })
  }, [])

  return (
    <Container>
      <ShowableRow size={(state.selected || state.loading === 'app') ? '0' : '12'} tablet='4' desktop='4' direction='column' className='tablet desktop'>
        <Actions />
        <NewsLists />
        <Pagination />
      </ShowableRow>
      <ShowableRow size={(state.selected || state.loading === 'app') ? '12' : '0'} tablet='8' desktop='8' direction='column' className='tablet desktop'>
        {state.loading === 'app' ? (<Center><Loading /></Center>) : (<ArticleDetail />)}
      </ShowableRow>
    </Container>
  )
}
