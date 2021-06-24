interface Product {
  id: number;
  title: string;
  price: number;
  descrpriton: string;
  category: string;
  image: string;
}
export type FectchResult =
  | {
      status: "OK";
      data: Product[];
    }
  | {
      status: "loading";
    }
  | {
      status: "error";
      statusCode: number;
      message: string;
    };
export const getResult = async (url: string): Promise<FectchResult> => {
  const response = await fetch(url);
  const data = await response.json();
  if (response.status !== 200)
    return {
      status: "error",
      statusCode: response.status,
      message: data.message,
    };
  return { status: "OK", data };
};
