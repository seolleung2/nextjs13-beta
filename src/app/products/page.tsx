import Link from "next/link";
import React from "react";
import { getProducts } from "@/service/products";
import styles from "./pages.module.css";

const PRODUCTS_URL = "/products";

// export const revalidate = 3;

const ProductsPage = async () => {
  const products = await getProducts();

  const res = await fetch("https://meowfacts.herokuapp.com/", {
    next: {
      revalidate: 3,
    },
    // cache: 'force-cache', // default cache, 지정해 주지 않으면 영원히 캐시가 되므로 SSG 처럼 동작
    // cache: 'no-store', // SSR 처럼 동작
  });
  const { data } = await res.json();

  const factText = data[0];

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
      <article className={styles.article}>{factText}</article>
    </>
  );
};

export default ProductsPage;
