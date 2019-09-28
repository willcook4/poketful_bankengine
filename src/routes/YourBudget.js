import React from 'react'
import { Link } from '@reach/router'
import styled from 'styled-components'

const Wrapper = styled('div')`
  
`

export const YourBudget = () => {
  return (
    <div>
      <nav>
        <ul>
          <li style={{display: 'block'}}>
            <Link to='/welcome'>To Welcome</Link>
          </li>
          <li style={{display: 'block'}}>
            {/* <Link to='/your-budget'>To Your Budget</Link> */}
            <span>Your Budget</span>
          </li>
          <li style={{display: 'block'}}>
            <Link to='/your-plan'>To Your Plan</Link>
          </li>
          <li style={{display: 'block'}}>
            <Link to='/your-payment'>To Payment</Link>
          </li>
          <li style={{display: 'block'}}>
            <Link to='/authentication'>To Auth</Link>
          </li>
        </ul>
      </nav>
      <Wrapper>
        {/*  */}
      </Wrapper>
    </div>
  )
}