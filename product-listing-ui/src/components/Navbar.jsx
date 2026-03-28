import React from "react";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <h2>My Shop</h2>
      <h3>Cart: {cartCount}</h3>
    </nav>
  );
}

export default Navbar;