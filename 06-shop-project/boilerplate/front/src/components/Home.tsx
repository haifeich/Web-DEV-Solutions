import * as React from "react";
import { useState, useEffect } from "react";
import { getResult, FetchResult, Products } from "../model/Products";
import Sidebar from "./Sidebar";

export default function Home() {
  const [products, setProducts] = useState<FetchResult>({ status: "loading" });
  const url = "/shop/products/";
  useEffect(() => {
    getResult(url).then(setProducts);
  }, []);

  return (
    <>
      <Sidebar />
      <Products {...products} />
    </>
  );
}
