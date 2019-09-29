import React from 'react'
import { Link } from '@reach/router'
import { Messaging } from '../components/messagingModal'
import { ListBox } from "../components/ListBox";
import { StyledButton as Button } from '../components/button';
import { Wrapper } from '../components/wrapper';
import { Modal, Icon, Button as ADButton } from 'antd';

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
          <Button type="secondary" size="small">
            <Link to="/your-budget">
              <Icon type="left" />
              Edit Your Budget
            </Link>
          </Button>
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
          <Button disabled={paid} type="primary" shape='round' size="medium" onClick={this.showModal}>
            Set It Up
        </Button>
        {paid && (<p id="successMessage">Your payment is all set up 😉👍🏿</p>)}
        </div>

      </Wrapper>

    )
  }
}