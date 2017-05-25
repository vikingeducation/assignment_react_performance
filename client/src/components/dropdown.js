import React from "react";

class dropdown extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  shouldComponentUpdate(nextProps) {
    return false;
  }

  render() {
    return (
      <select onChange={this.props.onChange}>
        <option value="select">Select Page</option>
        <option value="/portfolio">Portfolio</option>
        <option value="/trade">Trade</option>
        <option value="/transactions">Transactions</option>

      </select>
    );
  }
}

export default dropdown;
