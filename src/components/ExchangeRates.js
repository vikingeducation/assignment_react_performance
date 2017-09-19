import React from "react";
import Table from "./elements/Table";

class ExchangeRates extends React.PureComponent {
  render() {
    const { rates, headers } = this.props;
    return (
      <div>
        <Table headers={headers} rows={rates} />
      </div>
    );
  }
}

export default ExchangeRates;
