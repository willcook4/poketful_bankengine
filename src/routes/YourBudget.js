import React from "react";
import styled from "styled-components";
import getWeeklyBills from "../getWeeklyBills";

import { List } from "antd";
import { NavBar } from "../components/NavBar";
import { BudgetListItem } from "../components/BudgetListItem";
import { ListBox } from "../components/ListBox";
import { StyledButton as Button } from "../components/button";

const Wrapper = styled("div")`
  .page {
    background-color: #e9edf2;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .submitBtn {
    margin: 25px;
  }
`;

export class YourBudget extends React.Component {
  state = {
    benefit: 250,
    billTotal: 0,
    moneyLeft: 250,
    data: getWeeklyBills()
  };

  goNextScreen = () => {
    window.localStorage.setItem("benefit", this.state.benefit);
    window.localStorage.setItem("billTotal", this.state.billTotal);
    window.localStorage.setItem("moneyLeft", this.state.moneyLeft);

    //implement the navigation to next screen
  };

  trackBills = total => {
    this.setState({
      billTotal: total,
      moneyLeft: this.state.benefit - total
    });
  };

  updateBillData = newData => {
    this.setState({ data: newData });
  };

  render() {
    return (
      <Wrapper>
        <div className="page">
          {/* <NavBar /> */}
          <ListBox
            title="Your Weekly Benefit"
            data={[
              {
                type: "Youth Payment",
                amt: this.state.benefit,
                icon: "fas fa-coins fa-fw"
              }
            ]}
          />
          <ListBox
            title="Your Bills"
            data={this.state.data}
            needCheckbox
            isBillBox
            trackBills={this.trackBills}
            updateBillData={this.updateBillData}
          />
          <ListBox
            title=""
            data={[
              {
                type: "Your spending money",
                amt: this.state.moneyLeft,
                icon: "fas fa-hand-holding-usd fa-fw",
                description: ""
              }
            ]}
          />
          <div className="submitBtn">
            <Button
              type="primary"
              shape="round"
              size="large"
              block
              onclick={this.goNextScreen}
            >
              All good!
            </Button>
          </div>
        </div>
      </Wrapper>
    );
  }
}
