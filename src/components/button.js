import { Button } from 'antd'
import styled from 'styled-components'
import { theme } from '../theme'

export const StyledButton = styled(Button)`
  color: whitesmoke;
  font-weight: 600;

  ${ props => props.type && props.type === 'primary' ? `
    background-color: ${theme.color.primary};
    border-color: ${theme.color.primary};

    :hover {
      background-color: ${theme.color.secondary};
      border-color: ${theme.color.secondary};
      color: whitesmoke;
    }
  ` : null
  }
  
  ${ props => props.type && props.type === 'secondary' ? `
    background-color: ${theme.color.secondary};
    border-color: ${theme.color.secondary};

    :hover {
      background-color: ${theme.color.primary};
      border-color: ${theme.color.primary};
      color: whitesmoke;
    }
  ` : null
  }

  ${ props => props.align && props.align === 'right' ? `
    display: flex;
    margin-left: auto;
  ` : null
  }

  ${props => props.size && props.size === 'medium' ? `
      width: 50%;
      height: 50px;
      font-size: 20px;
      margin: 10px auto;
  `: props.size === "small" ? `width: 40%`: null}
`