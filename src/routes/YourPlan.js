import React from 'react'
import { Link } from '@reach/router'
import { ListBox } from "../components/ListBox";
import { StyledButton as Button } from '../components/button';
import {Wrapper} from '../components/wrapper';

export const YourPlan = () => {

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
        <Button type="primary" shape='round' size="medium">
          <Link to='/your-payment'>Set It Up</Link>
        </Button>
      </div>

    </Wrapper>

  )
}