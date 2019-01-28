import styled from 'styled-components'

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
  overflow-y: ${props => props.overflow ? props.overflow : 'auto'}
  padding: ${props => props.padding ? props.padding : '0'};
  margin: ${props => props.margin ? props.margin : '0'};
  flex-direction: ${props => props.direction ? props.direction : 'row'};
  flex-wrap: ${props => props.wrap ? props.wrap : 'nowrap'};
  flex: ${props => props.size ? `1 0 ${(100 / 12) * props.size}%` : '0 1 auto'};
  &.desktop {
    @media (min-width: ${sizes['desktop'] / 16}em) {
      flex: ${props => props.size ? `1 0 ${(100 / 12) * props.size}%` : '0 1 auto'};
    }
  }
  &.tablet {
    @media (min-width: ${sizes['tablet'] / 16}em) {
      flex: ${props => props.size ? `1 0 ${(100 / 12) * props.size}%` : '0 1 auto'};
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
  background-color: ${props => props.bg ? props.bg : '#6bbeff'};
  color: ${props => props.color ? props.color : 'white'};
  border: 1px solid #219eff;
  flex: 1 0 auto;
  justify-content: center;
  align-items: center;
  align-content: center;
  cursor: pointer;
`
