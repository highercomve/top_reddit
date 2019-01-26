import styled from 'styled-components'

export const Container = styled.section`
  max-width: 1200px;
  display: flex;
`

export const Row = styled.section`
  flex: ${props => props.col ? `0 0 ${(100 / 12) * props.col}` : '0 1 auto' }
  padding: 0 2em;
`