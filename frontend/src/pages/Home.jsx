import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the Home Page</h1>
      <div>
        <Link to="/products">Products</Link>
        <Link to="/checkout">Checkout</Link>
        <Link to="/add-item">Add Item</Link>
      </div>
    </div>
  );
}

export default Home;