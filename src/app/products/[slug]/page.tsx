import React from "react";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

// * 동적인 메타데이터 생성
export const generateMetadata = ({ params }: Props) => {
  return {
    title: `제품의 이름: ${params.slug}`,
  };
};

const PantsPage = ({ params }: Props) => {
  if (params.slug === "nothing") notFound();

  return <h1>{params.slug} 설명 페이지</h1>;
};

export default PantsPage;

// * routing 의 종륲 : static, dynamic
// 다이나믹 라우트 페이지 중에서 특정 경로의 페이지는 미리 만들어 두고 싶을 때 그 경로를 Next.js 에게 알려주도록 하는 함수

export const generateStaticParams = () => {
  const products = ["pants", "skirts"];

  return products.map((product) => ({
    slug: product,
  }));
};
