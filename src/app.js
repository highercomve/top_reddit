import React from 'react'
import { NewsProvider } from './contexts/news.context'
import { Container, Row } from './components/Styled'

export default function App (props) {
  return (
    <NewsProvider>
      <Container>
        <Row>
          Hola
        </Row>
      </Container>
    </NewsProvider>
  )
}
