import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";

function Cart() {

  const { cart } = useContext(CartContext);

  return (
    <div className="container">

      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item) => (
          <CartItem key={item.id} item={item}/>
        ))
      )}

    </div>
  );
}

export default Cart;