import { useState } from "react";
import { formatMoney } from "../../utils/money";

export function CartItemDetails({ cartItem, deleteCartItem }) {
  const [updateCart, setUpdateCart] = useState(false);

  function toggleUpdateCart() {
    setUpdateCart(!updateCart);
    console.log(updateCart);
  }

  return (
    <>
      <img className="product-image" src={cartItem.product.image} />

      <div className="cart-item-details">
        <div className="product-name">{cartItem.product.name}</div>
        <div className="product-price">
          {formatMoney(cartItem.product.priceCents)}
        </div>
        <div className="product-quantity">
          <span>
            Quantity:{" "}
            {updateCart ? (
              <input className="ChangeCart" type="text" />
            ) : (
              <span className="quantity-label">{cartItem.quantity}</span>
            )}
          </span>
          <span
            onClick={toggleUpdateCart}
            className="update-quantity-link link-primary"
          >
            Update
          </span>
          <span
            className="delete-quantity-link link-primary"
            onClick={deleteCartItem}
          >
            Delete
          </span>
        </div>
      </div>
    </>
  );
}
