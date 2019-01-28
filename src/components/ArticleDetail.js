import React from 'react'
import { useNews } from '../contexts/news.context'
import { Row, Center } from './Styled'
import DOMPurify from 'dompurify'
import styled from 'styled-components'

const Title = styled.h1`
  margin-top: 0;
  font-size: 24px;
  color: rgba(50, 50, 50, 1);
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
  const { state } = useNews()
  const article = state.news[state.selected]

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
    <Row direction='column' padding='1em'>
      <Title>{article.data.title}</Title>
      <ShowContent type={contentType} content={content} isVideo={article.data.is_video} />
    </Row>
  )
}
