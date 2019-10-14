import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

import { ListBox } from "../components/ListBox";
import { StyledButton as Button } from "../components/button";
import getWeeklyBills from "../getWeeklyBills";
import { Messaging } from "../components/messagingModal";

const Wrapper = styled("div")`
  font-family: "Poppins", sans-serif;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: center;

  .page {
    background-color: #e9edf2;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    max-width: 430px;
    max-height: 830px;
    min-height: 650px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }

  .submitBtn {
    margin: 0 20%;
    height: 60px;
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
                amt: this.state.moneyLeft.toFixed(2),
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
              onClick={this.goNextScreen}
            >
              <Link to="/your-plan">All good!</Link>
            </Button>
          </div>
        </div>
        <Messaging />
      </Wrapper>
    );
  }
}
