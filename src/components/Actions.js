import React from 'react'
import { Row, Button } from './Styled'
import { useNews } from '../contexts/news.context'
import styled from 'styled-components'

const ActionRow = styled(Row)`
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 0 0 4px #dddddd;
`

export default function Actions () {
  const { dispatch } = useNews()
  const dismiss = () => dispatch({ type: 'dismiss-all' })
  return (
    <ActionRow direction='row'>
      <Button height='5vh' onClick={dismiss}>
        Dismiss all
      </Button>
    </ActionRow>
  )
}
