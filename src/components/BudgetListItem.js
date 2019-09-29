import React from "react";
import { List, Checkbox } from "antd";

export class BudgetListItem extends React.Component {
  state = {
    checked: false
  };

  toggleChecked = () => {
    this.setState({ checked: !this.state.checked });
  };

  render() {
    return (
      <List.Item>
        <i className={this.props.iconName}></i>
        <List.Item.Meta
          onClick={this.toggleChecked}
          title={this.props.title}
          description={this.props.description}
        />
        <div className="amount">{this.props.amt} $</div>
        {this.props.needCheckbox ? (
          <Checkbox checked={this.state.checked} />
        ) : (
          <div style={{ width: "16px" }} />
        )}
      </List.Item>
    );
  }
}
