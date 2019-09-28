import React from 'react'
import { Link } from '@reach/router'
import { ListBox } from "../components/ListBox";
import styled from 'styled-components';

export const YourPlan = () => {
  const Wrapper = styled("div")`
  background-color: #e9edf2;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
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
    //       {/* <Link to='/your-plan'>To Your Plan</Link> */}
    //       <span>Your plan</span>
    //     </li>
    //     <li style={{display: 'block'}}>
    //       <Link to='/your-payment'>To Payment</Link>
    //     </li>
    //     <li style={{display: 'block'}}>
    //       <Link to='/authentication'>To Auth</Link>
    //     </li>
    //   </ul>
    // </nav>
    <Wrapper>
      <ListBox
        title="Your Weekly Payment"
        data={[
          {
            type: "Benefit Payment",
            amt: "250",
            icon: "fas fa-coins fa-fw"
          }
        ]}
      />
      <ListBox
        title="Your Weekly Expense"
      />
    </Wrapper>

  )
}