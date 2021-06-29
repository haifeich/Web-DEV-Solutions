import * as React from "react";
import { Link } from "react-router-dom";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export type FetchResult =
  | {
      status: "OK";
      data: {
        next: string | null;
        previous: string | null;
        results: Product[];
      };
    }
  | {
      status: "loading";
    }
  | {
      status: "error";
      statusCode: number;
    };

export const getResult = async (url: string): Promise<FetchResult> => {
  const response = await fetch(url);
  if (response.status !== 200)
    return {
      status: "error",
      statusCode: response.status,
    };
  const data = await response.json();
  return { status: "OK", data };
};

export function SingleProduct({
  id,
  title,
  price,
  description,
  image,
}: Product) {
  return (
    <main>
      <li>
        <h2>{title}</h2>
        <img src={image} alt={title} />
        <p>{description}</p>
        <p>{price}</p>
      </li>
    </main>
  );
}
export function Products(products: FetchResult) {
  if (products.status === "loading") return <p>loading</p>;
  if (products.status === "error")
    return <p>{`Error ${products.statusCode}`}</p>;
  else {
    return (
      <ul>
        {products.data.results.map((product) => {
          const { id, title, image, price } = product;
          return (
            <li key={id}>
              <Link to={`/products/${id}`}>
                <h2>{title}</h2>
                <img src={image} alt={title} />
              </Link>
              <p>{`CHF ${price}`}</p>
            </li>
          );
        })}
      </ul>
    );
  }
}
