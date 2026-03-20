import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";

import "./styles/styles.css";

function App() {
  return (

    <CartProvider>

      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

      </BrowserRouter>

    </CartProvider>

  );
}

export default App;