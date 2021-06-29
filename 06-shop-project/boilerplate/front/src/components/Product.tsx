import * as React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Product, SingleProduct } from "../model/Products";
import { ProductInfo } from "../main";

interface ProductProps {
  onChange: (x: ProductInfo) => void;
}
export default function Product(props: ProductProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [quantity, setQuantity] = useState(0);
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
  return (
    <>
      <SingleProduct {...product} />
      <button
        onClick={() => {
          const newQuantity = quantity + 1;
          setQuantity(newQuantity);
          props.onChange({ id: product.id, quantity: newQuantity.toString() });
        }}
      >
        Order
      </button>
    </>
  );
}
