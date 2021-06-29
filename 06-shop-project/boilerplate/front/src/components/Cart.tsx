import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductInfo } from "../main";
import { getResult, FetchResult } from "../model/Products";
export interface Cartprops {
  cartInfos: ProductInfo[];
  onChange: (x: ProductInfo[]) => void;
}
function replace<T>(array: T[], value: T, index: number) {
  return [...array.slice(0, index), value, ...array.slice(index + 1)];
}
function remove<T>(array: T[], index: number) {
  if (array.length === 1) return [];
  return [...array.slice(0, index), ...array.slice(index + 1)];
}
export default function Cart(props: Cartprops) {
  const [cartInfos, setCartInfos] = useState(props.cartInfos);
  const [products, setProducts] = useState<FetchResult>({ status: "loading" });

  useEffect(() => {
    if (cartInfos.length !== 0) {
      const url = new URL("/shop/products/", "http://127.0.0.1:8000/");
      url.searchParams.append(
        "id__in",
        cartInfos.map((item) => item.id).join()
      );
      getResult(url.toString()).then((data) => {
        setProducts(data);
      });
    }
  }, []);
  if (cartInfos.length === 0) return <p>Cart is empty</p>;
  if (products.status === "loading") return <p>loading</p>;
  if (products.status === "error")
    return <p>{`Error ${products.statusCode}`}</p>;
  return (
    <>
      <ul>
        {products.data.results.map((product) => {
          const { id, title, image, price } = product;
          const match = cartInfos.find((item) => item.id == id);
          if (match !== undefined) {
            return (
              <li key={id}>
                <Link to={`/products/${id}`}>
                  <h2>{title}</h2>
                  <img src={image} alt={title} />
                </Link>
                <p>{`CHF ${price * parseInt(match.quantity) || price}`}</p>
                <input
                  type="number"
                  value={match.quantity}
                  min="1"
                  onChange={(e) => {
                    const newcartInfos = replace(
                      cartInfos,
                      {
                        id: id,
                        quantity: e.target.value,
                      },
                      cartInfos.findIndex((item) => item.id == id)
                    );
                    setCartInfos(newcartInfos);

                    props.onChange(newcartInfos);
                  }}
                />
                <button
                  onClick={() => {
                    const newcartInfos = remove(
                      cartInfos,
                      cartInfos.findIndex((item) => item.id == id)
                    );
                    setCartInfos(newcartInfos);
                    props.onChange(newcartInfos);
                  }}
                >
                  Remove
                </button>
              </li>
            );
          }
        })}
      </ul>
    </>
  );
}
