import React from 'react'
import { Row, Button } from './Styled'
import { useNews } from '../contexts/news.context'
import styled from 'styled-components'

const ActionRow = styled(Row)`
  box-shadow: 0 0 4px #dddddd;
  flex: 0 0 auto;
`

export default function Actions () {
  const { dispatch } = useNews()
  const dismiss = () => dispatch({ type: 'dismiss-all' })
  return (
    <ActionRow direction='row'>
      <Button height='40px' onClick={dismiss}>
        Dismiss all
      </Button>
    </ActionRow>
  )
}
