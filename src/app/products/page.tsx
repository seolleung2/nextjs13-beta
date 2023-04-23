import Link from "next/link";
import React from "react";
import { getProducts } from "@/service/products";
import MeowArticle from "@/components/MeowArticle";

const PRODUCTS_URL = "/products";

const ProductsPage = async () => {
  const products = await getProducts();

  return (
    <>
      <h1>제품 소개 페이지 🎁</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`${PRODUCTS_URL}/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </>
  );
};

export default ProductsPage;
