import React from "react";
import styled from "styled-components";

import {
  List,
  Button,
  Modal,
  Input,
  InputNumber,
  DatePicker,
  Select,
  Form
} from "antd";
import { BudgetListItem } from "./BudgetListItem";
import { NewBillModalForm } from "./NewBillModalForm";

const { Option } = Select;

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
`;

export class ListBox extends React.Component {
  state = {
    addNewBill: false
  };

  toggleAddNewBill = () => {
    this.setState({ addNewBill: !this.state.addNewBill });
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
                description="Next Payment Due in 5 days"
                amt={item.amt}
                needCheckbox={this.props.needCheckbox}
              />
            )}
          />
          {this.props.isBillBox ? (
            <div>
              <Button
                type="primary"
                shape="round"
                icon="plus"
                size="small"
                block
                className="addBtn"
                onClick={this.toggleAddNewBill}
              >
                Add new bill
              </Button>

              <Modal
                title="Add New Bill"
                visible={this.state.addNewBill}
                onOk={this.toggleAddNewBill}
                onCancel={this.toggleAddNewBill}
                centered
              >
                <Input placeholder="Bill title" />
                <Input placeholder="Bill type" />
                <InputNumber
                  defaultValue={1000}
                  formatter={value =>
                    `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }
                  parser={value => value.replace(/\$\s?|(,*)/g, "")}
                />
                <DatePicker placeholder="Due Date" />
                <Select defaultValue="weekly" style={{ width: 120 }}>
                  <Option value="weekly">Weekly</Option>
                  <Option value="fortnightly">Fortnightly</Option>
                  <Option value="monthly">Monthly</Option>
                </Select>
              </Modal>
            </div>
          ) : null}
        </div>
      </Wrapper>
    );
  }
}
