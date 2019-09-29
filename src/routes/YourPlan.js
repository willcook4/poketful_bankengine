import React from 'react'
import { Link } from '@reach/router'
import { Messaging } from '../components/messagingModal'
import { ListBox } from "../components/ListBox";
import { StyledButton as Button } from '../components/button';
import { Wrapper } from '../components/wrapper';
import { Modal, Icon } from 'antd';
import styled from 'styled-components';
import { theme } from '../theme'
import {StyledH1 as H1} from '../components/text';

const Return = styled('div')`
  color: ${theme.color.primary};
  margin: 10px;
  font-family: "Poppins", sans-serif;
`
export class YourPlan extends React.Component {
  state = {
    paid: false,
    modalVisible: false,
    modalText: "Confirm setting up $150 weekly payment towards expenses",
    modalConfirmLoading: false
  }

  showModal = () => {
    this.setState({ modalVisible: true })
  }

  handleModalConfirm = () => {
    this.setState({
      modalConfirmLoading: true,
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
      modalVisible: false,
    });
  };

  render() {
    const { paid, modalVisible, modalConfirmLoading, modalText } = this.state;
    return (
      <Wrapper>
        <Modal
          title="Payment Confirmation"
          visible={modalVisible}
          onOk={this.handleModalConfirm}
          confirmLoading={modalConfirmLoading}
          onCancel={this.handleModalCancel}
          footer={[
            <Button type="ghost" onClick={this.handleModalCancel}>Cancel</Button>,
            <Button key="submit" type="primary" loading={modalConfirmLoading} onClick={this.handleModalConfirm}>Confirm</Button>
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
          <ListBox
            title="Review your weekly payment plan"
            data={[
              {
                type: "Benefit Payment",
                amt: "250",
                icon: "fas fa-coins fa-fw"
              }, {
                type: "Total Bills",
                amt: "150",
                icon: "fas fa-coins fa-fw"
              }
            ]}
          />
          <Button disabled={paid} type="primary" shape='round' size="medium" onClick={this.showModal}>
            Set It Up
        </Button>
          {paid && (<p id="successMessage">Your payment is all set up 😉👍🏿</p>)}
        </div>
        <Messaging/>
      </Wrapper>

    )
  }
}