import React, { Component } from "react";
import Dropdown from "../components/dropdown";

class MainPanelComponent extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }
  onChange = e => {
    let page = e.target.value;
    if (page !== "select") {
      this.props.history.push(page);
    }
  };

  render() {
    return (
      <div>
        <Dropdown onChange={this.onChange} />
      </div>
    );
  }
}

export default MainPanelComponent;
