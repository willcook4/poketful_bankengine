import styled from 'styled-components'
// import { theme } from '../theme' TODO

export const StyledH1 = styled('h1')`
  ${ props => props.type && props.type === 'bold' ? `
    font-weight: bold;
  ` : null
  }
`
