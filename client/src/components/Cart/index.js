import React from "react";
    import CartItem from "../CartItem";
    import { cartobject } from "../constants";
    import "./index.css";

function Cart() {
  return (
    
    
        <div>
          <h1 className="c-heading-align">My Cart</h1>
          <div className="c-btn-align">
            <button className="c-btn-style">Remove All</button>
          </div>
    
          <ul className="cart-list">
            {cartobject.map((eachCartItem) => (
              <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
            ))}
          </ul>
        </div>
      );
   
    

}

export default Cart