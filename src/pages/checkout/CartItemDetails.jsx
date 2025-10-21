import { useState } from "react";
import { formatMoney } from "../../utils/money";
import axios from "axios";

export function CartItemDetails({ cartItem, deleteCartItem, loadCart }) {
  const [updateCart, setUpdateCart] = useState(false);

  const [quantity, setQuantity] = useState(cartItem.quantity);

  function ChangeInput(e) {
    const text = e.target.value;
    setQuantity(text);
  }

  const updateQuantity = async () => {
    if (updateCart) {
      await axios.put(`/api/cart-items/${cartItem.productId}`, {
        quantity: Number(quantity),
      });
      await loadCart();
      setUpdateCart(false);
    } else {
      setUpdateCart(true);
    }
  };

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
              <input
                onChange={ChangeInput}
                value={quantity}
                className="ChangeCart"
                type="text"
              />
            ) : (
              <span className="quantity-label">{cartItem.quantity}</span>
            )}
          </span>
          <span
            onClick={updateQuantity}
            className="update-quantity-link link-primary"
          >
            {updateCart ? "Save" : "Update"}
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
