import React from "react";
import { 
  Modal,
  Form,
  Input,
  InputNumber,
  DatePicker,
  Select,
  Icon
} from "antd";

import { StyledButton as Button } from "../components/button";
const { Option } = Select;

class CollectionCreateForm extends React.Component {
  constructor(props) {
    super(props)
    // state
    
    // Refs
    this.nameRef = React.createRef();
    this.amountRef = React.createRef();
    this.dueDateRef = React.createRef();
    this.freqRef = React.createRef();
  }

  render() {
    const { visible, onCancel, onCreate } = this.props;
    
    return (
      <Modal
        visible={visible}
        title="Add a new Bill"
        okText="Create"
        onCancel={onCancel}
        onOk={onCreate}
        footer={[
          <Button
            key="back"
            type="ghost"
            onClick={() => {
              // clear the form
              console.log('Cancelled, clearing the form...')
              this.nameRef.current.state.value = null
              this.amountRef.current.inputNumberRef.state.value = 0
              this.dueDateRef.current.picker.state.value = null
              this.freqRef.current.rcSelect.state.value = []
              
              onCancel()}}
          >
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            onClick={() => {
              if (!this.nameRef.current.state.value) {
                console.log('You must provide a name')
                return // don't submit if there is an error
              }
              if (!this.amountRef.current.inputNumberRef.currentValue) {
                console.log('no amount value')
                return // don't submit if there is an error
              }
              if (!this.dueDateRef.current.picker.state.value) {
                console.log('no date value')
                return // don't submit if there is an error
              }
              if (!this.freqRef.current.rcSelect.state.value[0]) {
                console.log('no frequency value')
                return // don't submit if there is an error
              }

              let amount = this.amountRef.current.inputNumberRef.currentValue
              let cleanedAmount = amount.replace(/[^\d.]+/g, "") // remove any non numbers or decimals
              cleanedAmount = cleanedAmount.match(/[^.]*.\d+/g)[0] // get the numbers and the first occurance of a decimal place(if any)
              while( cleanedAmount.charAt(0) === '0' ) cleanedAmount = cleanedAmount.substr(1); // remove any prefix zeros

              let frequency = this.freqRef.current.rcSelect.state.value[0]
              // Turn the amount into a weekly amount
              switch(frequency) {
                case('fortnightly'):
                  cleanedAmount = cleanedAmount/2
                  break;
                case('monthly'):
                  cleanedAmount = cleanedAmount/4
                  break;
                default:
                  break;
              }

              onCreate({
                title: this.nameRef.current.state.value,
                amt: cleanedAmount,
                dueDate: this.dueDateRef.current.picker.state.value, // a Moment
                frequency: frequency
              })

              // clear the form
              console.log('Submitted, clearing the form...')
              this.nameRef.current.state.value = null
              this.amountRef.current.inputNumberRef.state.value = 0
              this.dueDateRef.current.picker.state.value = null
              this.freqRef.current.rcSelect.state.value = []
            }}>
            Add Bill
          </Button>
        ]}
      >
        <Form layout="vertical">
          <Form.Item
            label="Name"
            style={{
              paddingBottom: '0',
              marginBottom: '12px'}}
          >
            <span>
              <Icon type="info" />
              <Input
                placeholder="Name"
                size='large'
                style={{
                  width: '90%'
                }}
                ref={this.nameRef}
              />
            </span>
          </Form.Item>

          <Form.Item label="Amount"
            style={{
              paddingBottom: '0',
              marginBottom: '12px'}}
          >
            <span
              style={{
                fontSize: '16px',
                marginRight: '5px'
              }}
            >$</span>

            <InputNumber
              min={0.00}
              precision={2}
              step={0.01}
              size="large"
              ref={this.amountRef}
            />
          </Form.Item>

          <Form.Item
            label={"Due Date"}
            style={{
              paddingBottom: '0',
              marginBottom: '12px'}}>
            <span>
              <Icon
                type="calendar"
                style={{
                  marginRight: "5px",
                  height: "1.2em"
                }}
              /></span>
            <DatePicker
              placeholder="Date"
              size="large"
              suffixIcon=""
              ref={this.dueDateRef}
            />
          </Form.Item>

          <Form.Item
            label="Frequency"
            style={{
              paddingBottom: '0',
              marginBottom: '12px'}}>
            <span>
              <Icon
                type="book"
                style={{
                  marginRight: "5px",
                  height: "1.2em"
                }}
              />
              <Select
                size="large"
                placeholder="Frequency"
                style={{
                  width: '90%'
                }}
                ref={this.freqRef}
            >
              <Option value="weekly">Weekly</Option>
              <Option value="fortnightly">Fortnightly</Option>
              <Option value="monthly">Monthly</Option>
            </Select>
            </span>
          </Form.Item>
        </Form>
      </Modal>
    );
  }
  }

export class NewBillModalForm extends React.Component {
  state = {
    visible: false
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
    // todo clear the form
  };

  handleCreate = (formValues) => {
    this.props.handleSubmit(formValues);
    this.setState({ visible: false });
  };

  render() {
    return (
      <div>
        <Button
          type="ghost"
          shape="round"
          icon="plus"
          size="small"
          block
          className="addBtn"
          onClick={this.showModal}
        >
          Add new bill
        </Button>
        <CollectionCreateForm
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}
