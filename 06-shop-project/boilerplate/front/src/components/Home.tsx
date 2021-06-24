import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getResult, FectchResult } from "../model/Products";
export default function Home() {
  const [products, setProducts] = useState<FectchResult>({ status: "loading" });
  const url = "https://fakestoreapi.com/products?limit=10";
  useEffect(() => {
    getResult(url).then(setProducts);
  }, []);

  function Products() {
    if (products.status === "loading") return <p>loading</p>;
    if (products.status === "error")
      return <p>{`Error ${products.statusCode}: ${products.message}`}</p>;
    else {
      return (
        <ul>
          {products.data.map((product) => {
            const { id, title, price, descrpriton, image } = product;
            return (
              <li key={id}>
                <h2>{title}</h2>
                <img src={image} alt={title} />
                <p>{descrpriton}</p>
                <p>{price}</p>
              </li>
            );
          })}
        </ul>
      );
    }
  }

  return (
    <>
      <ul>
        <Link to="/products">All</Link>
        <Link to="/products/category/women">Women's Clothing</Link>
        <Link to="/products/category/men">Men's Clothing</Link>
        <Link to="/products/category/jewelery">Jewelery</Link>
        <Link to="/products/category/elctronics">Electronics</Link>
      </ul>
      <Products />
    </>
  );
}
