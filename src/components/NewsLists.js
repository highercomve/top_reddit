import React from 'react'
import { Row } from './Styled'
import { useNews } from '../contexts/news.context'

function NewsItem (news) {
  return (
    <h1>{news.data.title}</h1>
  )
}

export default function NewsLists () {
  const { state } = useNews()
  return (
    <Row>
      { Object.keys(state.news).map((key) => NewsItem(state.news[key])) }
    </Row>
  )
}
