import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function Nav(props) {
  return (
    <>
      <nav>
        <div class="Panwine">
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
        <div class="button">
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </nav>

      <section>
        <div class="wrapper">
          {/* {props.backg} */}
          <img src="./backg.png" alt="my back" />

          <div class="wrapp">
            <h1>Tastefulness & Elegance</h1>
            <h1>of a Best Wine</h1>
            <p>
              Browse our collection to find that delectable taste you desire
            </p>
            <button class="butt">Explore Products</button>
          </div>
        </div>
      </section>
      <div class="input">
        <input type="text" id="search" placeholder="Search Name" />
        {props.vecto}
        <input type="text" id="search" placeholder="Search Categories" />
      </div>
      <h1 class="Products">Products</h1>

      <div class="Prod">
        <div class="Produ">
          <div class="Product">
            <img src="./docl1&4.png" alt="" />
            <p class="Dolceto">Dolceto</p>
            <p class="Dolceto">#12,400</p>
            <button class="label">Add To Cart</button>
          </div>
          <div class="Product">
            <img src="./pinot2.png" alt="" />
            <p class="Dolceto">Pinot Noir: Aymura</p>
            <p class="Dolceto">#12,400</p>
            <button class="label">Add To Cart</button>
          </div>
          <div class="Product">
            <img src="./amar3.png" alt="" />
            <p class="Dolceto">Amarone</p>
            <p class="Dolceto">#12,400</p>
            <button class="label">Add To Cart</button>
          </div>
          <div class="Product">
            <img src="./docl1&4.png" alt="" />
            <p class="Dolceto">Canaletto</p>
            <p class="Dolceto">#12,400</p>
            <button class="label">Add To Cart</button>
          </div>
        </div>

        <div class="Produ">
          <div class="Product">
            <img src="./merlot5&8.png" alt="" />
            <p class="Dolceto">Merlot Clearsprings</p>
            <p class="Dolceto">#12,400</p>
            <button class="label">Add To Cart</button>
          </div>
          <div class="Product">
            <img src="./sau6.png" alt="" />
            <p class="Dolceto">Sauvignon Blanc</p>
            <p class="Dolceto">#12,400</p>
            <button class="label">Add To Cart</button>
          </div>
          <div class="Product">
            <img src="./sau7.png" alt="" />
            <p class="Dolceto">Vina Ardanza</p>
            <p class="Dolceto">#12,400</p>
            <button class="label">Add To Cart</button>
          </div>
          <div class="Product">
            <img src="./merlot5&8.png" alt="" />
            <p class="Dolceto">Clearsprings</p>
            <p class="Dolceto">#12,400</p>
            <button class="label">Add To Cart</button>
          </div>
        </div>

        <div class="Produ">
          <div class="Product">
            <img src="./yering9&12.png" alt="" />
            <p class="Dolceto">Yering</p>
            <p class="Dolceto">#12,400</p>
            <button class="label">Add To Cart</button>
          </div>
          <div class="Product">
            <img src="./veuv10.png" alt="" />
            <p class="Dolceto">Veuve Cliquot</p>
            <p class="Dolceto">#12,400</p>
            <button class="label">Add To Cart</button>
          </div>
          <div class="Product">
            <img src="./nable11.png" alt="" />
            <p class="Dolceto">Nebla</p>
            <p class="Dolceto">#12,400</p>
            <button class="label">Add To Cart</button>
          </div>
          <div class="Product">
            <img src="./yering9&12.png" alt="" />
            <p class="Dolceto">Yering</p>
            <p class="Dolceto">#12,400</p>
            <button class="label">Add To Cart</button>
          </div>
        </div>
      </div>
      <h2>
        <a href="#">
          <Link id="h2" to={"/view"}>
            View More
          </Link>
        </a>
        {props.view}
      </h2>

      <nav class="naval">
        <div class="Panwin">
          <h1 class="Panwines">PanWines</h1>
          <div class="Panwiness">
            <p class="Panwiness">Get the Tastefulness & </p>
            <p class="Panwiness">Elegance of a Best Wine</p>
          </div>
        </div>
        <ul class="second">
          <li>
            <Link id="hh" to={"/"}>
              HomePage
            </Link>
            <p class="second1">Home</p>
            <p class="second1">Authentication</p>
            <p class="second1">Product</p>
            <p class="second1">Shopping</p>
          </li>
          <li>
            <a class="sec" href="#">
              Contact Us
            </a>
            <p class="second1">Panwine@gmail.com</p>
            <p class="second1">panwine.com</p>
            <p class="second1">+23480808080</p>
          </li>
        </ul>
        <button class="butto">Explore Products</button>
      </nav>
    </>
  );
}

export default Nav;
