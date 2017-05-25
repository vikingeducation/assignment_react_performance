import React from "react";
import PurchaseFormContainer from "./PurchaseFormContainer";
import StatusTableContainer from "./StatusTableContainer";
import MainPanelContainer from "./MainPanelContainer";

class TradeContainer extends React.Component {
  // constructor() {
  //   super();
  // }
  shouldComponentUpdate() {
    return false;
  }

  // componentWillReceiveProps(newProps) {
  //   let newResults = newProps.results;
  //
  //   if (newProps.searchTerm !== "") {
  //     newResults = newResults.filter(stock => {
  //       return stock.ticker.includes(newProps.searchTerm);
  //     });
  //     this.props.updateResults(newResults);
  //   }
  // }

  render() {
    return (
      <div className="col-sm-6">
        <MainPanelContainer />
        <div className="row">
          <PurchaseFormContainer />
          <StatusTableContainer />
        </div>

      </div>
    );
  }
}

export default TradeContainer;
