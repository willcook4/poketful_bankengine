import React from "react";
import styled from "styled-components";

import { List } from "antd";
import { BudgetListItem } from "./BudgetListItem";
import { NewBillModalForm } from "./NewBillModalForm";
import { theme } from "../theme";

const Wrapper = styled("div")`
  .box {
    margin: 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    border-radius: 15px;
    padding: 10px;
    font-family: "Poppins", sans-serif;
    background-color: rgba(255, 255, 255, 0.8);
  }

  .title {
    font-size: 25px;
    color: black;
    font-weight: 700;
  }

  h4 {
    font-size: 15px;
    color: black;
    margin: 0px;
    font-weight: 500;
  }

  .ant-list-item-meta-description {
    font-weight: 400;
    font-family: sans-serif;
    font-size: 12px;
  }

  .amount {
    font-size: 18px;
    font-weight: 700;
    color: black;
    margin-right: 15px;
    width: 72px;
  }

  .ant-list-item i {
    margin-right: 15px;
    margin-left: 10px;
    font-size: 20px;
  }

  .addBtn {
    text-align: center;
    height: 30px;
  }

  .ant-input {
    margin-top: 15px;
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    background: ${theme.color.primary};
    border-color: ${theme.color.primary};
  }

  .modalOkBtn {
    background: ${theme.color.primary};
    border-color: ${theme.color.primary};
  }

  .totalAmt {
    margin-left: 24px;
  }
`;

export class ListBox extends React.Component {
  state = {
    addNewBill: false,
    data: this.props.data,
    visible: false,
    total: this.props.needCheckbox
      ? 0
      : this.props.data.reduce((a, b) => a + parseFloat(b.amt), 0)
  };

  toggleAddNewBill = () => {
    this.setState({ addNewBill: !this.state.addNewBill });
  };

  addBillAmt = amt => {
    const newTotal = this.state.total + amt;
    this.setState({ total: newTotal }, () => {
      this.props.trackBills(this.state.total);
    });
  };

  handleSubmit = values => {
    var newBill = {
      type: values.title,
      amt: values.amt,
      description: "Per Week",
      icon: "fas fa-file-invoice-dollar fa-fw"
    };
    var newState = [...this.state.data, newBill];

    this.props.updateBillData(newState);
  };

  render() {
    return (
      <Wrapper>
        <div className="box">
          <div className="title">{this.props.title}</div>
          <List
            itemLayout="horizontal"
            dataSource={this.props.data}
            renderItem={item => (
              <BudgetListItem
                iconName={item.icon}
                title={item.type}
                description={item.description}
                amt={item.amt}
                needCheckbox={this.props.needCheckbox}
                addBillAmt={this.addBillAmt}
              />
            )}
          />

          {this.props.isBillBox ? (
            <div>
              <List>
                <BudgetListItem
                  iconName=""
                  title="Total Bills"
                  description="Per week"
                  amt={this.state.total}
                  className="totalAmt"
                />
              </List>
              <NewBillModalForm handleSubmit={this.handleSubmit} />
            </div>
          ) : null}
        </div>
      </Wrapper>
    );
  }
}
