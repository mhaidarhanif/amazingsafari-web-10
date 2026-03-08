import createClient from "openapi-fetch";

import type { paths } from "@/schema";

const client = createClient<paths>({ baseUrl: import.meta.env.VITE_API_URL });

export async function getProducts() {
  const { data: products, error } = await client.GET("/products");

  console.log({ products, error });
}
