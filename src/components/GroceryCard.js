import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import ProductDetail from "./elements/ProductDetail";
import PurchaseButton from "./PurchaseButton";

class GroceryCard extends PureComponent {
  render() {
    const { onPurchaseClick } = this.props;
    const { image, name, category, description, amount, purchased } = this.props.groceryItem;
    return (
      <div className="col-md-4">
        <div className="col-md-12 grocery-card well">
          <img src={image} className="img-responsive" alt="Product" />
          <ProductDetail type="Name" data={name} />
          {category ? <ProductDetail type="Category" data={category} /> : null}
          <ProductDetail type="Description" data={description} />
          {amount ? <ProductDetail type="Amount" data={amount} /> : null}
          <PurchaseButton
            purchased={purchased}
            onPurchaseClick={onPurchaseClick}
          />
        </div>
      </div>
    );
  }
}

GroceryCard.propTypes = {
  groceryItem: PropTypes.object
};

export default GroceryCard;
