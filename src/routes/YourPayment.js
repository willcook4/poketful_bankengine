import React from 'react'
import { Link } from '@reach/router';
import { StyledButton as Button } from '../components/button';
import { ListBox } from "../components/ListBox";
import {Wrapper} from "../components/wrapper";

export const YourPayment = () => {

  return (
    // <nav>
    //   <ul>
    //     <li style={{display: 'block'}}>
    //       <Link to='/welcome'>To Welcome</Link>
    //     </li>
    //     <li style={{display: 'block'}}>
    //       <Link to='/your-budget'>To Your Budget</Link>
    //     </li>
    //     <li style={{display: 'block'}}>
    //       <Link to='/your-plan'>To Your Plan</Link>
    //     </li>
    //     <li style={{display: 'block'}}>
    //       {/* <Link to='/your-payment'>To Payment</Link> */}
    //       <span>Your Payment</span>
    //     </li>
    //     <li style={{display: 'block'}}>
    //       <Link to='/authentication'>To Auth</Link>
    //     </li>
    //   </ul>
    // </nav>
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

    </Wrapper>
  )
}