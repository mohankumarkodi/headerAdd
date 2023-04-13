/* eslint react/prop-types: 0 */
import React from "react";
import "./index.css";
import { MdOutlineDeleteForever } from "react-icons/md";

function CartItem(props) {
  const { cartItemDetails } = props;
  const {  quantity, title, price, imageUrl } = cartItemDetails;
  console.log(cartItemDetails);

  return (
    <li className="align-container-big">
      <div className="cart-item">
        <img className="cart-product-image" src={imageUrl} alt={title} />
        <div className="cart-item-details-container">
          <p className="cart-product-title">{title}</p>
          <p className="cart-quantity">{quantity}</p>
        </div>
        <p className="cart-total-price">Rs {price * quantity}/-</p>
        <button className="c-delete-button">
          <MdOutlineDeleteForever />
        </button>
      </div>
    </li>
  );
}
export default CartItem;