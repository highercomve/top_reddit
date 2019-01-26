import styled from 'styled-components'

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576
}

export const Container = styled.section`
  display: flex;
`

export const Row = styled.section`
  flex: 0 1 auto;
  padding: ${props => props.padding ? `${props.padding}em` : '0'};
  &.desktop {
    @media (min-width: ${sizes['desktop'] / 16}em) {
      flex: ${props => props.size ? `0 0 ${(100 / 12) * props.size}%` : '0 1 auto'};
    }
  }
  &.phone {
    @media (min-width: ${sizes['phone'] / 16}em) {
      flex: ${props => props.size ? `0 0 ${(100 / 12) * props.size}%` : '0 1 auto'};
    }
  }
  &.tablet {
    @media (min-width: ${sizes['tablet'] / 16}em) {
      flex: ${props => props.size ? `0 0 ${(100 / 12) * props.size}%` : '0 1 auto'};
    }
  }
`
