import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getProducts } from "@/service/products";
import MeowArticle from "@/components/MeowArticle";
// import clothesImage from "public/images/clothes.jpg";
import clothesImage from "../../../public/images/clothes.jpg";

const PRODUCTS_URL = "/products";

const ProductsPage = async () => {
  const products = await getProducts();

  return (
    <>
      <h1>제품 소개 페이지 🎁</h1>
      <Image src={clothesImage} alt="Clothes" priority />
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
