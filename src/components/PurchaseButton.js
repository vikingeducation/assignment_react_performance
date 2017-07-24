import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Button from "./elements/Button";

class PurchaseButton extends PureComponent {
  render() {
    const { purchased, onPurchaseClick } = this.props;
    if (purchased) {
      return <p className="text-muted">Purchased!</p>;
    }
  
    return (
      <Button onClick={onPurchaseClick} color="success">
        Purchase
      </Button>
    );
  }
}

PurchaseButton.propTypes = {
  purchased: PropTypes.bool.isRequired,
  onPurchaseClick: PropTypes.func.isRequired
};

export default PurchaseButton;
