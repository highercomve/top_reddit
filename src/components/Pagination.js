import React from 'react'
import { Row, Button } from './Styled'
import { useNews } from '../contexts/news.context'
import styled from 'styled-components'
import { getTopNews } from '../services/reddit.service'

const ActionRow = styled(Row)`
  box-shadow: 0 0 4px #dddddd;
  flex: 0 0 auto;
`

export default function Pagination () {
  const { state, dispatch } = useNews()
  const prev = () => {
    dispatch({ type: 'loading', payload: 'app' })
    getTopNews(state.limit, undefined, state.before)
      .then(news => {
        console.log(news)
        dispatch({ type: 'update', payload: news.data })
        dispatch({ type: 'loading', payload: null })
      })
  }
  const next = () => {
    dispatch({ type: 'loading', payload: 'app' })
    getTopNews(state.limit, state.after, undefined)
      .then(news => {
        dispatch({ type: 'update', payload: news.data })
        dispatch({ type: 'loading', payload: null })
      })
  }
  return (
    <ActionRow direction='row'>
      <Button height='40px' disabled={!state.before || !!state.loading} onClick={prev}>
        Previous
      </Button>
      <Button height='40px' disabled={!state.after || !!state.loading} onClick={next}>
        Next
      </Button>
    </ActionRow>
  )
}
