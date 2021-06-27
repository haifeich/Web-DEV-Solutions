import * as React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Product, SingleProduct } from "../model/Products";

export default function Product() {
  const [product, setProduct] = useState<Product | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const ID = useParams<{ id: string }>().id;
  const url = `/shop/products/${ID}/`;
  useEffect(() => {
    fetch(url).then((response) => {
      if (response.status !== 200) {
        response
          .json()
          .then((data) =>
            setErrorMessage(`Error: Code ${response.status}. ${data.detail}`)
          );
      } else {
        response.json().then(setProduct);
      }
    });
  }, []);
  if (errorMessage) return <p>{errorMessage}</p>;
  if (product === null) return <p>Loading</p>;
  return <SingleProduct {...product} />;
}
