import React from 'react'
import { Row, Button, Thumbnail, NewsRow, Title, SAuthor, DayFromNow, CommentsNumber } from './Styled'


export default function NewsItem (props) {
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
        <Row direction='row'>
          <Button height='30px' margin='10px 0' flex='0 1 auto' onClick={props.dismiss(props.data.id)}>
            Dismiss
          </Button>
        </Row>
      </Row>
    </NewsRow>
  )
}
