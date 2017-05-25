import React, { Component } from "react";

class PurchaseForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  shouldComponentUpdate() {
    return false;
  }

  onChange = e => {
    let selected = this.props.results.find(stock => {
      return stock.ticker === e.target.value;
    });
    if (selected) {
      this.props.selectStock(selected);
    } else {
      this.props.selectStock({});
    }
  };

  onQuantChange = e => {
    let value;
    if (e.target.value) {
      value = e.target.value;
    } else {
      value = 0;
    }
    this.props.selectQuantity(Number(value));
  };

  onSubmit = e => {
    e.preventDefault();
    const data = {};
    data.stock = this.props.selectedStock;
    data.quantity = this.props.quantity;
    if (e.target.type.value === "buy") {
      this.props.buyStock(data);
    } else if (this.checkForSale(data)) {
      this.props.sellStock(data);
    }
  };

  calcTotalCost = () => {
    let price = this.props.selectedStock.currentPrice;
    if (price) {
      return (price * this.props.quantity).toFixed(2);
    }
    return 0;
  };

  checkForSale = data => {
    let sale = false;
    console.log("data", data.stock.ticker);
    console.log("props", this.props.stocks[0].ticker);
    console.log("data", data.quantity);
    console.log("props", this.props.stocks[0].quantity);
    this.props.stocks.forEach(stock => {
      if (
        stock.ticker === data.stock.ticker &&
        stock.quantity >= data.quantity
      ) {
        sale = true;
      }
    });
    console.log(sale);
    return sale;
  };

  render() {
    return (
      <div className="col-sm-8">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Ticker</label>
            <input onChange={this.onChange} type="text" name="ticker" />
          </div>

          <div className="form-group">
            <label>Buy/Sell</label>
            <select name="type">
              <option value="buy">Buy</option>
              <option value="sell">Sell</option>
            </select>
          </div>

          <div className="form-group">
            <label>Quantity</label>
            <input
              onChange={this.onQuantChange}
              type="number"
              name="quantity"
            />
          </div>

          <div className="form-group">
            <p>Price: {this.props.selectedStock.currentPrice}</p>
          </div>
          <div className="form-group">
            <p>
              Total:
              {" "}
              {this.calcTotalCost()}
            </p>
          </div>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default PurchaseForm;
