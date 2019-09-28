import React from 'react'
import { Link } from '@reach/router'
import { Messaging } from '../components/messagingModal'

export const YourBudget = () => {
  return (
    <React.Fragment>
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
      
      <Messaging />
    </React.Fragment>
  )
}