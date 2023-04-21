import Link from "next/link";
import React from "react";

const PRODUCTS_URL = "/products";

const PRODUCTS = ["shirt", "pants", "skirt", "shoes"];

const ProductsPage = () => {
  return (
    <>
      <h1>제품 소개 페이지 🎁</h1>
      <ul>
        {PRODUCTS.map((product, index) => (
          <li key={index}>
            <Link href={`${PRODUCTS_URL}/${product}`}>{product}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductsPage;
