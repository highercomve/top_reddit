import React from 'react'
import { Row } from './Styled'
import { useNews } from '../contexts/news.context'
import styled from 'styled-components'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

const Title = styled.h1`
  padding: 0;
  margin: 0 0 1em 0;
  font-size: 16px;
`

const SAuthor = styled(Author)`
  & .author-label {
    text-transform: capitalize;
  }
`

const FromNow = styled.span`
  flex: 0 0 50%;
  text-align: left;
`

const CommentsN = styled.span`
  flex: 0 0 50%;
  text-align: right;
`

const Thumbnail = styled.div`
  display: ${props => props.hasImage ? 'block' : 'none'};
  flex: 0 0 ${props => props.size ? props.size : 'auto'};
  max-height: ${props => props.size};
  max-width: ${props => props.size};
  overflow: hidden;
  & img {
    max-width: 100%;
    max-height: 100%;
  }
`

const NewsRow = styled(Row)`
  background: ${props => props.unread ? '#f2fff3' : 'white'};
  margin: 0 0 0.1em 0;
  box-shadow: 0 0 4px #dddddd;
  padding: 0.8em;
  cursor: pointer;
`

function DayFromNow (props) {
  return (
    <FromNow>
      {dayjs().toNow(props.date)}
    </FromNow>
  )
}

function CommentsNumber (props) {
  return (
    <CommentsN>comments {props.count}</CommentsN>
  )
}

function Author (props) {
  return (
    <span className='author'>
      <span className='author-label'>author:</span> {props.name}
    </span>
  )
}

function NewsItem (props) {
  const hasImage = /^http.*$/.test(props.data.thumbnail)
  return (
    <NewsRow unread={!props.read} onClick={props.open(props.data.id) }>
      <Thumbnail size='25%' hasImage={hasImage} >
        <img src={props.data.thumbnail} />
      </Thumbnail>
      <Row direction='column' padding='0 0 0 1em' size='9' className='phone'>
        <Title>{props.data.title}</Title>
        <SAuthor name={props.data.author} />
        <Row>
          <DayFromNow date={props.data.created} />
          <CommentsNumber count={props.data.num_comments} />
        </Row>
      </Row>
    </NewsRow>
  )
}

const ScrollContent = styled.div`
  max-height: 95vh;
  overflow-y: scroll;
`

export default function NewsLists () {
  const { state, dispatch } = useNews()
  const open = (id) => () => dispatch({ type: 'open', payload: id })
  const dismiss = (id) => () => dispatch({ type: 'open', payload: id })
  return (
    <ScrollContent>
      {Object.keys(state.news).map(key => (
        <NewsItem key={key} open={open} dismiss={dismiss} {...state.news[key]} />
      ))}
    </ScrollContent>
  )
}
