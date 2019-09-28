import React from 'react'
import styled from 'styled-components'
import { theme } from '../theme'

// import { media } from '../styles/utils' TODO

let Wrapper = styled('div')`
  position: fixed;
  right: 21px;
  bottom: 21px;
  width: 60px;
  height: 60px;
  background-color: ${theme.color.primary};
  border-radius: 100%;
  :hover {
    cursor: pointer;
    box-shadow: 0px 0px 20px 0px ${theme.color.secondary};
  }
  svg g circle {
    fill: ${theme.color.primary};
  }
`

export const ChatBubble = ({action}) => {
  return (
    <Wrapper onClick={(e) => action(e)}>
      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 62 62">
        <g transform="translate(13 14)">
          <path fill="#FFF" d="M18,0 C8.05903448,0 0,7.19625455 0,16.0727273 C0,19.3441455 1.09737931,22.3849818 2.97682759,24.9238545 C2.7297931,27.8571273 2.01972414,31.9884364 0,34 C0,34 6.17151724,33.1376364 10.3512414,30.6234909 C10.3555862,30.6253455 10.3605517,30.6272 10.3648966,30.6290545 C12.0804828,29.5157091 13.7985517,28.3689818 14.1542069,28.0784364 C14.3404138,27.8181818 14.6997931,27.7396727 14.9797241,27.9072 C15.1634483,28.0172364 15.2795172,28.2181455 15.2832414,28.4314182 C15.2894483,28.8159273 15.2801379,28.9160727 11.8166897,31.1644 C13.7457931,31.7949455 15.8263448,32.1454545 18,32.1454545 C27.9409655,32.1454545 36,24.9492 36,16.0727273 C36,7.19625455 27.9409655,0 18,0 Z"/>
          <circle cx="9" cy="17" r="2" />
          <circle cx="18" cy="17" r="2" />
          <circle cx="27" cy="17" r="2" />
        </g>
      </svg>
    </Wrapper>
  )
}
