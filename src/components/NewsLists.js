import React from 'react'
import { Row } from './Styled'
import { useNews } from '../contexts/news.context'

function NewsItem (news) {
  return (
    <Row>
      <h1>{news.data.title}</h1>
    </Row>
  )
}

export default function NewsLists () {
  const { state } = useNews()
  return Object.keys(state.news).map((key) => NewsItem(state.news[key]))
}
