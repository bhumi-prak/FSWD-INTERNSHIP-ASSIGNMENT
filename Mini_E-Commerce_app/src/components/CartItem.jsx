import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartItem({ item }) {

  const { removeFromCart } = useContext(CartContext);

  return (
    <div className="cartItem">

      <h4>{item.name}</h4>
      <p>₹{item.price}</p>

      <button onClick={() => removeFromCart(item.id)}>
        Remove
      </button>

    </div>
  );
}

export default CartItem;