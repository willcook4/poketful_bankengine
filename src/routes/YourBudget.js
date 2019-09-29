import React from 'react'
import styled from "styled-components"

import getWeeklyBills from "../getWeeklyBills"
import { ListBox } from "../components/ListBox"
import { Messaging } from '../components/messagingModal'

const Wrapper = styled("div")`
  .page {
    background-color: #e9edf2;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export class YourBudget extends React.Component {
  state = {
    checked: true
  };

  toggleChecked = () => {
    this.setState({ checked: !this.state.checked });
  };

  render() {
    return (
      <Wrapper>
        <div className="page">
          {/* <NavBar /> */}
          <ListBox
            title="Your Benefit"
            data={[
              {
                type: "Benefit Payment",
                amt: "250",
                icon: "fas fa-coins fa-fw"
              }
            ]}
          />
          <ListBox
            title="Your Bills"
            data={getWeeklyBills()}
            needCheckbox
            isBillBox
          />
        </div>
        <Messaging />
      </Wrapper>
    );
  }
}
