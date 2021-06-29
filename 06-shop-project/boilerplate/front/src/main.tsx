import * as React from "react";
import { useState, useEffect } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import * as ReactDOM from "react-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Form from "./components/Form";
import Category from "./components/Category";

const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
  throw new Error("No div with id 'app' found");
}
export interface ProductInfo {
  id: number;
  quantity: string;
}

function replace<T>(array: T[], value: T, index: number) {
  return [...array.slice(0, index), value, ...array.slice(index + 1)];
}

export default function App() {
  const storedOrder: string | null = localStorage.getItem("order");
  const initialOrder = storedOrder ? JSON.parse(storedOrder) : [];
  const [cartInfos, setCartInfos] = useState<ProductInfo[]>(initialOrder);
  useEffect(() => {
    localStorage.setItem("order", JSON.stringify(cartInfos));
  }, [cartInfos]);

  return (
    <HashRouter>
      <Nav
        quantity={cartInfos
          .map((item) => {
            return parseInt(item.quantity);
          })
          .filter((item) => !isNaN(item))
          .reduce((a, b) => a + b, 0)}
      />
      <Switch>
        <Route path="/" exact children={<Home />} />
        <Route path="/products/category/:category" children={<Category />} />
        <Route
          path="/products/:id"
          children={
            <Product
              onChange={(x) => {
                cartInfos.find((item) => item.id == x.id)
                  ? setCartInfos(
                      replace(
                        cartInfos,
                        {
                          id: x.id,
                          quantity: (
                            parseInt(
                              cartInfos[
                                cartInfos.findIndex((item) => item.id == x.id)
                              ].quantity
                            ) + 1
                          ).toString(),
                        },
                        cartInfos.findIndex((item) => item.id == x.id)
                      )
                    )
                  : setCartInfos([...cartInfos, x]);
              }}
            />
          }
        />
        <Route
          path="/cart"
          children={<Cart cartInfos={cartInfos} onChange={setCartInfos} />}
        />
        <Route path="/form" children={<Form />} />
      </Switch>
    </HashRouter>
  );
}

ReactDOM.render(<App />, appDiv);
