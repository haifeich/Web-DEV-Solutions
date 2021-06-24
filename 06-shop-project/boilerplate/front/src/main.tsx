import * as React from "react";
import { HashRouter, Link, Switch, Route } from "react-router-dom";
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

export default function App() {
  return (
    <HashRouter>
      <Nav />
      <Switch>
        <Route path="/" exact children={<Home />} />
        <Route path="/products/:name" children={<Product />} />
        <Route path="/cart" children={<Cart />} />
        <Route path="/form" children={<Form />} />
        <Route path="/products/category/:name" children={<Category />} />
      </Switch>
    </HashRouter>
  );
}

ReactDOM.render(<App />, appDiv);
