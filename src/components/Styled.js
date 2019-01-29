import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576
}

export const Container = styled.section`
  display: flex;
`

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`

export const Row = styled.section`
  display: flex;
  box-sizing: border-box;
  justify-content: ${props => props.justify ? props.justify : 'flex-start'};
  overflow-y: ${props => props.overflow ? props.overflow : 'auto'}
  padding: ${props => props.padding ? props.padding : '0'};
  margin: ${props => props.margin ? props.margin : '0'};
  flex-direction: ${props => props.direction ? props.direction : 'row'};
  flex-wrap: ${props => props.wrap ? props.wrap : 'nowrap'};
  flex: ${props => props.size ? `1 0 ${(100 / 12) * props.size}%` : '0 1 auto'};
  &.desktop {
    @media (min-width: ${sizes['desktop'] / 16}em) {
      flex: ${props => props.desktop ? `1 0 ${(100 / 12) * props.desktop}%` : '0 1 auto'};
    }
  }
  &.tablet {
    @media (min-width: ${sizes['tablet'] / 16}em) {
      flex: ${props => props.tablet ? `1 0 ${(100 / 12) * props.tablet}%` : '0 1 auto'};
    }
  }
  & img {
    max-width: 100%;
  }
`

export const Button = styled.button`
  display: flex;
  height: ${props => props.height ? props.height : 'auto'};
  width: ${props => props.width ? props.width : 'auto'};
  background: ${props => props.bg ? props.bg : '#6bbeff'};
  opacity: ${props => props.disabled ? '0.5' : '1'}
  color: ${props => props.color ? props.color : 'white'};
  margin: ${props => props.margin ? props.margin : '0'};
  border: 1px solid #219eff;
  flex: ${props => props.flex ? props.flex : '1 1 auto'};
  justify-content: center;
  align-items: center;
  align-content: center;
  cursor: pointer;
`
export const Title = styled.h1`
  padding: 0;
  margin: 0 0 1em 0;
  font-size: 16px;
`

export const SAuthor = styled(Author)`
  flex: ${props => props.small ? '0 1 auto' : '1 0 auto'};
  padding: ${props => props.small ? '0 1em 0 0' : '0'};
  font-size: 0.9em;
  & .author-label {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.8em;
  }
`

export const FromNow = styled.span`
  flex: ${props => props.small ? '0 1 auto' : '1 0 auto;'};
  padding: ${props => props.small ? '0 1em 0 0' : '0'};
  text-align: left;
  font-size: 0.9em;
`

export const CommentsN = styled.span`
  flex: ${props => props.small ? '0 1 auto' : '1 0 auto;'};
  padding: ${props => props.small ? '0 1em 0 0' : '0'};
  text-align: left;
  font-size: 0.9em;
`

export const Thumbnail = styled.div`
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

export const NewsRow = styled(Row)`
  background: ${props => props.unread ? '#f2fff3' : 'white'};
  margin: 0 0 0.1em 0;
  box-shadow: 0 0 4px #dddddd;
  padding: 0.8em;
  cursor: pointer;
`

export function DayFromNow (props) {
  return (
    <FromNow small={props.small}>
      {dayjs(Number(props.date) * 1000).fromNow()} ago
    </FromNow>
  )
}

export function CommentsNumber (props) {
  return (
    <CommentsN small={props.small}>{props.count} comments</CommentsN>
  )
}

export function Author (props) {
  return (
    <span className={`${props.className} author`}>
      <span className='author-label'>Posted by</span> {props.name}
    </span>
  )
}
