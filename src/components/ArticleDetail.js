import React, { useEffect } from 'react'
import { useNews } from '../contexts/news.context'
import { Row, Center, SAuthor, DayFromNow, CommentsNumber } from './Styled'
import DOMPurify from 'dompurify'
import styled from 'styled-components'

const Title = styled.h1`
  margin-top: 0;
  font-size: 24px;
  color: rgba(50, 50, 50, 1);
  padding-right: 40px;
`

const Close = styled.a`
  position: absolute;
  top: 1em;
  right: 1.5em;
  font-size: 20px;
  cursor: pointer;
  color: #6bbeff;
`

const ScrolledContent = styled(Row)`
  overflow-y: scroll;
  max-height: 100vh;
`

const PostedInfo = styled(Row)`
  color: rgb(150, 150, 150);
`

function ShowContent (props) {
  switch (props.type) {
    case 'html':
      return (<div dangerouslySetInnerHTML={{ __html: props.content }} />)
    case 'gifv':
      return (<div><iframe src={props.content} /></div>)
    case 'image':
      return (<div><img src={props.content} /></div>)
    default:
      return (<div>No content</div>)
  }
}

export default function ArticleDetail () {
  const { state, dispatch } = useNews()
  const article = state.news[state.selected]
  const close = () => dispatch({ type: 'close' })

  useEffect(() => {
    if (state.news[state.selected]) {
      document.title = state.news[state.selected].data.title
    } else {
      document.title = 'Top Reddit Reader'
    }
  })

  if (!article) {
    return (
      <Center>
        <h1>Select an article</h1>
      </Center>
    )
  }
  const contentType = article.selftext_html
    ? 'html'
    : /.*\.(jpg|png|gif)/.test(article.data.url)
      ? 'image'
      : 'gif'

  const content = article.selftext_html ? DOMPurify.sanitize(article.data.selftext_html) : article.data.url
  return (
    <ScrolledContent direction='column' padding='1em'>
      <Close onClick={close}>
        &#10006;
      </Close>
      <PostedInfo direction='row' wrap='wrap' justify='flex-start'>
        <SAuthor small name={article.data.author} />
        <DayFromNow small date={article.data.created_utc} />
        <CommentsNumber small count={article.data.num_comments} />
      </PostedInfo>
      <Title>
        <a href={`https://www.reddit.com${article.data.permalink}`} target='_blank'>{article.data.title}</a>
      </Title>
      <ShowContent type={contentType} content={content} isVideo={article.data.is_video} />
    </ScrolledContent>
  )
}
