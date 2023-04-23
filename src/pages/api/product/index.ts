import type { NextApiRequest, NextApiResponse } from "next";
import { Product, getProducts } from "@/service/products";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  if (req.method === "GET") {
    const products = await getProducts();
    return res.status(200).json(products);
  }
  res.status(200);
}
