import React from "react";
import "./products.css";
import { Link } from "react-router-dom";
function Products(props) {
  return (
    <div>
      <nav>
        <div class="PPanwine">
          <h1>PanWines</h1>
        </div>
        <ul class="ull">
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
        <div class="Pbutton">{props.icon}</div>
      </nav>
      <div class="PProducc">
        <h1 class="PProducts">Results Found </h1>
        <h1 class="PProducts"> Sort By </h1>
        <input class="Pinput" type="text" placeholder="" />
      </div>

      <div class="Prod">
        <div class="Produ">
          <div class="Product">
            <img src="./yering9&12.png" alt="" />
            <p class="Dolceto">Canaletto</p>
            <p class="Dolceto">#12,400</p>
            <button class="label">Add To Cart</button>
          </div>
          <div class="Product">
            <img src="./veuv10.png" alt="" />
            <p class="Dolceto">Pinot Noir: Aymura</p>
            <p class="Dolceto">#12,400</p>
            <button class="label">Add To Cart</button>
          </div>
        </div>
        <div class="Produ">
          <div class="Product">
            <img src="./amar3.png" alt="" />
            <p class="Dolceto">Amarone</p>
            <p class="Dolceto">#12,400</p>
            <button class="label">Add To Cart</button>
          </div>
          <div class="Product">
            <img src="./pinot2.png" alt="" />
            <p class="Dolceto">Pinot Noir: Aymura</p>
            <p class="Dolceto">#12,400</p>
            <button class="label">Add To Cart</button>
          </div>
        </div>
        <div class="Produ">
          <div class="Product">
            <img src="./docl1&4.png" alt="" />
            <p class="Dolceto">Canaletto</p>
            <p class="Dolceto">#12,400</p>
            <button class="label">Add To Cart</button>
          </div>
          <div class="Product">
            <img src="./amar3.png" alt="" />
            <p class="Dolceto">Amarone</p>
            <p class="Dolceto">#12,400</p>
            <button class="label">Add To Cart</button>
          </div>
        </div>
      </div>
      <Link id="hh" to={"/"}>
        Go Back Home
      </Link>
    </div>
  );
}

export default Products;
