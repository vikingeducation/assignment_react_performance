import React from "react";

class Table extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  shouldComponentUpdate(nextProps) {
    if (this.props.money !== nextProps.money) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <div className="col-sm-4">
        <p>Available funds: ${this.props.money}</p>
      </div>
    );
  }
}

export default Table;
