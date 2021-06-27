import * as React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getResult, FetchResult } from "../model/Products";

export default function Category() {
  const [products, setProducts] = useState<FetchResult>({
    status: "loading",
  });
  const category = useParams<{ category: string }>().category;

  const url = new URL("/shop/products/", "http://127.0.0.1:8000/");
  url.searchParams.append("category", category);
  url.searchParams.append("id", "");

  useEffect(() => {
    getResult(url.toString()).then(setProducts);
  }, [category]);

  function Products() {
    if (products.status === "loading") return <p>loading</p>;
    if (products.status === "error")
      return <p>{`Error ${products.statusCode}`}</p>;
    else {
      return (
        <ul>
          {products.data.results.map((product) => {
            const { id, title, price, descrpriton, image } = product;
            return (
              <li key={id}>
                <Link to={`/products/${id}`}>
                  <h2>{title}</h2>
                  <img src={image} alt={title} />
                  <p>{descrpriton}</p>
                  <p>{price}</p>
                </Link>
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
        <Link to="/" replace>
          All
        </Link>
        <Link to="/products/category/women's clothing">Women's Clothing</Link>
        <Link to="/products/category/men's clothing">Men's Clothing</Link>
        <Link to="/products/category/jewelery">Jewelery</Link>
        <Link to="/products/category/electronics">Electronics</Link>
      </ul>
      <Products />
    </>
  );
}
