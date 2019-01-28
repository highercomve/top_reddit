import React, { useEffect, useRef } from 'react'
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
  const listElement = useRef(null);
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

  useEffect(() => {
    // Move scroll to the top
    listElement.current.scrollTo(0, 0)
    listElement.current.scrollTop = 0
  })
  return (
    <ScrolledContent ref={listElement}>
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
