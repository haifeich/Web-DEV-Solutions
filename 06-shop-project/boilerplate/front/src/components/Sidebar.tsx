import * as React from "react";
import { Link } from "react-router-dom";
// const categories = [
//   { id: 1, category: "women's clothing" },
//   { id: 2, category: "men's clothing" },
//   { id: 3, category: "jewelery" },
//   { id: 4, category: "electronics" },
// ];
export default function Sidebar() {
  return (
    <aside>
      <Link to="/" replace>
        All
      </Link>
      <Link to="/products/category/women's clothing">Women's Clothing</Link>
      <Link to="/products/category/men's clothing">Men's Clothing</Link>
      <Link to="/products/category/jewelery">Jewelery</Link>
      <Link to="/products/category/electronics">Electronics</Link>
    </aside>
  );
}
