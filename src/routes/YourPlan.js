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
    
    Link {
      margin: 10px auto;
    }
    Button {
      width: 50%;
      height: 50px;
      font-size: 20px;
      margin: 10px auto;
    }
    
  `;

  return (
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
        <Button type="primary" shape='round'>
          <Link to='/your-payment'>Set It Up</Link>
        </Button>
      </div>

    </Wrapper>

  )
}