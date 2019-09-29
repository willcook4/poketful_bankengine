import React from 'react'
import { Messaging } from '../components/messagingModal'
import { Link } from '@reach/router'
import { StyledButton as Button } from '../components/button'
import { ListBox } from "../components/ListBox"
import { Wrapper } from "../components/wrapper"

export const YourPayment = () => {
  return (
    <Wrapper>
      <div className="page">
        <ListBox
          title="Make Payment"
          data={[{
              type: "Total Expense",
              amt: "150",
              icon: "fas fa-coins fa-fw"
            }
          ]}
        />
        <Button type="primary" shape='round' size="medium">
          <Link to='/your-payment'>Make Payment</Link>
        </Button>
      </div>
      <Messaging />
    </Wrapper>
  )
}