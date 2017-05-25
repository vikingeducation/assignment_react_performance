import { connect } from "react-redux";
import PurchaseForm from "../components/PurchaseForm";
import {
  setSearchTerm,
  selectStock,
  selectQuantity,
  sellStock,
  buyStock
} from "../actions";

const mapStateToProps = state => {
  return {
    results: state.results,
    selectedStock: state.selectedStock,
    quantity: state.quantity,
    stocks: state.stocks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSearchTerm: term => {
      dispatch(setSearchTerm(term));
    },
    selectStock: stock => {
      dispatch(selectStock(stock));
    },
    sellStock: data => {
      dispatch(sellStock(data));
    },
    buyStock: data => {
      dispatch(buyStock(data));
    },
    selectQuantity: num => {
      dispatch(selectQuantity(num));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseForm);
