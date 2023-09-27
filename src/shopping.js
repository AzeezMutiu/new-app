import React from "react";
import { Link } from "react-router-dom";
import "./shopping.css";
function Shopping(props) {
  return (
    <div>
      <nav>
        <div class="SPanwine">
          <h1>PanWines</h1>
        </div>
        <ul class="Pull">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/products"}>Products</Link>
          </li>
          <li>
            <Link to={"/shopping"}>Shopping Cart</Link>
          </li>
          {props.cart}
        </ul>
        <div class="Sbutton">{props.icon}</div>
      </nav>
      <div class="Swrapping">
        <h1>Your Shopping Cart is Empty</h1>
        <p>Explore our product page to add item(s) to your cart</p>
        <button class="Sbutt">Explore Products</button>
      </div>
    </div>
  );
}

export default Shopping;
