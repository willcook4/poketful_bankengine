import React from "react";
import {
  Button,
  Modal,
  Form,
  Input,
  Radio,
  InputNumber,
  DatePicker,
  Select
} from "antd";

const { Option } = Select;

export const NewBillModalForm = Form.create({ name: "add_bill_form" })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const formItemLayout = {
        sm: {
          labelCol: { span: 2 },
          wrapperCol: { span: 4 }
        }
      };
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Create a new collection"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form {...formItemLayout}>
            <Form.Item label="Plain Text">
              <Input placeholder="Bill title" />
            </Form.Item>
            <Form.Item>
              <Input placeholder="Bill type" />
            </Form.Item>
            <Form.Item>
              <InputNumber
                defaultValue={1000}
                formatter={value =>
                  `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={value => value.replace(/\$\s?|(,*)/g, "")}
              />
            </Form.Item>
            <Form.Item>
              <DatePicker placeholder="Due Date" />
            </Form.Item>
            <Form.Item>
              <Select defaultValue="weekly" style={{ width: 120 }}>
                <Option value="weekly">Weekly</Option>
                <Option value="fortnightly">Fortnightly</Option>
                <Option value="monthly">Monthly</Option>
              </Select>
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);
