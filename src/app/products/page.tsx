import Link from "next/link";
import React from "react";
import { getProducts } from "@/service/products";

const PRODUCTS_URL = "/products";

const ProductsPage = () => {
  // * 정적 변수를 사용하는 것 대신, 서버 파일(데이터베이스) 에 있는 제품의 리스트를 읽어와서 그걸 보여줌
  const products = getProducts();

  return (
    <>
      <h1>제품 소개 페이지 🎁</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`${PRODUCTS_URL}/${product}`}>{product}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductsPage;
