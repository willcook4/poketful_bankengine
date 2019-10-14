import React from "react";

import { Modal, Form, Input, InputNumber, DatePicker, Select } from "antd";

import { StyledButton as Button } from "../components/button";

const { Option } = Select;

const CollectionCreateForm = Form.create({ name: "form_in_modal" })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Create a new collection"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
          footer={[
            <Button key="back" type="ghost" onClick={onCancel}>
              Cancel
            </Button>,
            <Button key="submit" type="primary" onClick={onCreate}>
              Add Bill
            </Button>
          ]}
        >
          <Form layout="vertical">
            <Form.Item label="Bill Name">
              {getFieldDecorator("title")(<Input placeholder="Name" />)}
            </Form.Item>
            <Form.Item label="Amount">
              {getFieldDecorator("amt")(
                <InputNumber
                  formatter={(value) => {
                    var rgx = /^[0-9]*\.?[0-9]*$/; // zero or more numeric characters, followed by zero or one period(s), followed by zero or more numeric characters.
                    return `$ ${value.match(rgx)}`
                  }}
                  parser={value => value.replace(/\$\s?|(,*)/g, "")}
                  precision={2}
                  initialValue={0.00}
                />
              )}
            </Form.Item>
            <Form.Item label="Due Date">
              {getFieldDecorator("date")(<DatePicker placeholder="Date" />)}
            </Form.Item>
            <Form.Item label="Frequency">
              {getFieldDecorator("freq")(
                <Select style={{ width: 120 }}>
                  <Option value="weekly">Weekly</Option>
                  <Option value="fortnightly">Fortnightly</Option>
                  <Option value="monthly">Monthly</Option>
                </Select>
              )}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);

export class NewBillModalForm extends React.Component {
  state = {
    visible: false
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = () => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log("Received values of form: ", values);
      this.props.handleSubmit(values);
      form.resetFields();
      this.setState({ visible: false });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
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
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}
