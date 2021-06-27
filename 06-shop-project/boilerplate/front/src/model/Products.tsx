export interface Product {
  id: number;
  title: string;
  price: number;
  descrpriton: string;
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
