import React from 'react'
import { Link } from '@reach/router'
import { ListBox } from "../components/ListBox";
import styled from 'styled-components';
import { StyledButton as Button } from '../components/button';

export const YourPlan = () => {
  const Wrapper = styled("div")`
  .page {
    background-color: #e9edf2;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
  }
  
  Button {
    margin:  10px auto;
    width: 50%;
    height: 50px;
    font-size: 20px;
  }
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
      <div className="page">
      <ListBox
        title="Plan Review"
        data={[
          {
            type: "Benefit Payment",
            amt: "250",
            icon: "fas fa-coins fa-fw"
          }, {
            type: "Total Expense",
            amt: "150",
            icon: "fas fa-coins fa-fw"
          }
        ]}
      />
      <Button type="primary" shape='round'>Set It Up</Button>
      </div>
      
    </Wrapper>

  )
}