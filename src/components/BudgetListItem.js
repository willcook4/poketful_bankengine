import React from "react";
import { List, Checkbox } from "antd";

export class BudgetListItem extends React.Component {
  state = {
    checked: false
  };

  toggleChecked = () => {
    this.setState({ checked: !this.state.checked });
  };

  handleCheckbox = () => {
    if (!this.state.checked) {
      this.props.addBillAmt(parseFloat(this.props.amt));
      this.toggleChecked();
    } else {
      this.props.addBillAmt(parseFloat(this.props.amt) * -1);
      this.toggleChecked();
    }
  };

  render() {
    return (
      <List.Item className={this.props.className}>
        <i className={this.props.iconName}></i>
        <List.Item.Meta
          onClick={this.props.needCheckbox ? this.handleCheckbox : null}
          title={this.props.title}
          description={this.props.description}
        />
        <div className="amount" style={{width: 'auto'}}>$ {parseFloat(this.props.amt).toFixed(2)}</div>
        {this.props.needCheckbox ? (
          <Checkbox checked={this.state.checked} />
        ) : (
          <div style={{ width: "16px" }} />
        )}
      </List.Item>
    );
  }
}
