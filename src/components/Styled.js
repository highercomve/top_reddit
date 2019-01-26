import styled from 'styled-components'

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576
}

export const Container = styled.section`
  max-width: 1200px;
  display: flex;
`

export const Row = styled.section`
  flex: 0 1 auto;
  padding: 0 2em;
  &.desktop {
    @media (max-width: ${sizes['desktop'] / 16}em) {
      flex: ${props => props.size ? `0 0 ${(100 / 12) * props.size}%` : '0 1 auto'};
    }
  }
  &.phone {
    @media (max-width: ${sizes['phone'] / 16}em) {
      flex: ${props => props.size ? `0 0 ${(100 / 12) * props.size}%` : '0 1 auto'};
    }
  }
  &.tablet {
    @media (max-width: ${sizes['tablet'] / 16}em) {
      flex: ${props => props.size ? `0 0 ${(100 / 12) * props.size}%` : '0 1 auto'};
    }
  }
`
