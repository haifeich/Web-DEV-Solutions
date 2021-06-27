import * as React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getResult, FetchResult, Products } from "../model/Products";
import Sidebar from "./Sidebar";

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

  return (
    <>
      <Sidebar />
      <Products {...products} />
    </>
  );
}
