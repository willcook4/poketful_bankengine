import React from "react";
import { Link } from "@reach/router";
import { Messaging } from "../components/messagingModal";
import { ListBox } from "../components/ListBox";
import { StyledButton as Button } from "../components/button";
import { Wrapper } from "../components/wrapper";
import { Modal, Icon, Alert } from "antd";
import styled from "styled-components";
import { theme } from "../theme";
import { StyledH1 as H1 } from "../components/text";

const Return = styled("div")`
  color: ${theme.color.primary};
  margin: 10px;
  font-family: "Poppins", sans-serif;
`;
export class YourPlan extends React.Component {
  state = {
    paid: false,
    modalVisible: false,
    modalText: `Confirm setting up your weekly payment of $${parseFloat(window.localStorage.getItem(
      "billTotal"
    )).toFixed(2)} towards expenses?`,
    modalConfirmLoading: false,
    error: false
  };

  showModal = () => {
    // if moneyLeft is negative don't allow the confirmation step
    if (parseFloat(window.localStorage.getItem("moneyLeft")).toFixed(2) < 0) {
      this.setState({ error: 'You will need to chat with your YSP. Click the chat bubble to chat with your YSP' });
      return
    }
    // else carry on to confirmation
    this.setState({
      modalVisible: true,
      modalText: `Confirm setting up your weekly payment of $${parseFloat(window.localStorage.getItem( "billTotal" )).toFixed(2)} towards expenses?`
    });
  };

  handleModalConfirm = () => {
    this.setState({
      modalConfirmLoading: true
    });
    setTimeout(() => {
      this.setState({
        modalVisible: false,
        modalConfirmLoading: false,
        paid: true
      });
    }, 2000);
  };

  handleModalCancel = () => {
    this.setState({
      modalVisible: false
    });
  };

  render() {
    const { paid, modalVisible, modalConfirmLoading, modalText, error } = this.state;
    return (
      <Wrapper>
        <Modal
          title="Payment Confirmation"
          visible={modalVisible}
          onOk={this.handleModalConfirm}
          confirmLoading={modalConfirmLoading}
          onCancel={this.handleModalCancel}
          footer={[
            <Button
              type="ghost"
              onClick={this.handleModalCancel}
              key='cancel'>
              Cancel
            </Button>,
            <Button
              key="confirm"
              type="primary"
              loading={modalConfirmLoading}
              onClick={this.handleModalConfirm}
            >
              Confirm
            </Button>
          ]}
        >
          {modalText}
        </Modal>
        <div className="page">
          <Link to="/your-budget">
            <Return>
              <Icon type="left" />
              Edit Your Budget
            </Return>
          </Link>
          <H1>Your Plan</H1>
          {error ? (
          <Alert
            message={"Something went wrong"}
            description={error}
            type="warning"
            showIcon
          />) : null}
          <ListBox
            title="Review your weekly payment plan"
            data={[
              {
                type: "Benefit Payment",
                amt: window.localStorage.getItem("benefit"),
                icon: "fas fa-coins fa-fw"
              },
              {
                type: "Total Bills",
                amt: window.localStorage.getItem("billTotal"),
                icon: "fas fa-coins fa-fw"
              }
            ]}
          />
          <Button
            disabled={paid}
            type="primary"
            shape="round"
            btnsize="medium"
            onClick={this.showModal}
          >
            Set It Up
          </Button>
          {paid && <p id="successMessage">Your payment is all set up <span role='img' aria-label='super happy'>😉👍🏿</span></p>}
        </div>
        <Messaging />
      </Wrapper>
    );
  }
}
