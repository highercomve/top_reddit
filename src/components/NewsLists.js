import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { useNews } from '../contexts/news.context'
import NewsItem from './NewsItem'
import styled from 'styled-components'

const ScrolledContent = styled.section`
  overflow-y: scroll;
  max-height: calc(100vh - 80px);
`

export default function NewsLists () {
  const { state, dispatch } = useNews()
  const open = (id) => (e) => {
    e.preventDefault()
    dispatch({ type: 'open', payload: id })
  }
  const dismiss = (id) => (e) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch({ type: 'dismiss', payload: id })
  }
  const news = Object.keys(state.news).filter((key) => state.news[key])
  return (
    <ScrolledContent>
      <ReactCSSTransitionGroup
        transitionName='remove'
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300} >
        {news.map(key => {
          return (
            <NewsItem key={key} open={open} dismiss={dismiss} {...state.news[key]} />
          )
        })}
      </ReactCSSTransitionGroup>
    </ScrolledContent>
  )
}
