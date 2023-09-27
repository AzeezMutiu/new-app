import { createBrowserRouter } from "react-router-dom";
import App from "../App";
//import Contact from "../view";
//import Home from "../home";
import "../products.css";
import Shopping from "../shopping";
import Products from "../products";
import Nav from "../nav";
import View from "../view";
import ErrorPage from "../error";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <Nav
            cart={<img src="./cart.png" alt={"cart"} />}
            vecto={<img src="./vecto.png" alt="" />}
            view={<img src="./more.png" alt="" />}
          />
        ),
      },
      //   {
      //     path: "/contacts",
      //     element: <Contact />,
      //   },
      {
        path: "/products",
        element: (
          <Products
            cart={<img src="./cart.png" alt={"cart"} />}
            icon={<img src="./icon.png" alt={"icon"} />}
          />
        ),
      },
      {
        path: "/shopping",
        element: (
          <Shopping
            cart={<img src="./cart.png" alt={"cart"} />}
            icon={<img src="./icon.png" alt={"icon"} />}
          />
        ),
      },
      { path: "/nav", element: <Nav /> },
      { path: "/view", element: <View /> },
    ],
  },
]);
