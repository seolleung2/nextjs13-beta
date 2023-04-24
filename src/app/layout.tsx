import Link from "next/link";
import { Metadata } from "next";
import "./globals.css";
import style from "./layout.module.css";
import { Open_Sans } from "@next/font/google";
import { Nanum_Gothic } from "@next/font/google";

const sans = Open_Sans({ subsets: ["latin"] });
const gothic = Nanum_Gothic({
  weight: "700",
  subsets: ["latin"],
});

// * 모든 페이지에 공통으로 적용하기 위한 메타데이터 (공통 layout.tsx)
export const metadata: Metadata = {
  title: "멋진 제품 사이트",
  description: "멋진 제품을 판매하는 곳입니다.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.className}>
      <body>
        <header className={style.header}>
          <h1 className={gothic.className}>Demo Note</h1>
          <nav className={style.nav}>
            <Link href="/products">Products</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
