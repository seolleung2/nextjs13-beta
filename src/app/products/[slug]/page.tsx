import React from "react";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";
import { getProduct, getProducts } from "@/service/products";
import GoProductsPageButton from "@/components/GoProductsPageButton";

type Props = {
  params: {
    slug: string;
  };
};

// * 동적인 메타데이터 생성
export const generateMetadata = async ({ params: { slug } }: Props) => {
  const product = await getProduct(slug);

  if (!product) return;

  return {
    title: `제품의 이름: ${product.name}`,
  };
};

export const revalidate = 3;

const ProductPage = async ({ params: { slug } }: Props) => {
  // * 서버 파일에 있는 데이터 중 해당 제품의 정보를 찾아서 그걸 보여줌
  const product = await getProduct(slug);

  // if (!product) notFound();
  if (!product) redirect("/products");

  return (
    <>
      <h1>{product.name} 설명 페이지</h1>
      <Image
        src={product.image}
        alt="Product Image"
        width={400}
        height={400}
        priority
      />
      <GoProductsPageButton />
    </>
  );
};

export default ProductPage;

// * routing 의 종륲 : static, dynamic
// 다이나믹 라우트 페이지 중에서 특정 경로의 페이지는 미리 만들어 두고 싶을 때 그 경로를 Next.js 에게 알려주도록 하는 함수

export const generateStaticParams = async () => {
  // * 모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줄거임 (SSG)
  const products = await getProducts();

  return products.map((product) => ({
    slug: product.id,
  }));
};
