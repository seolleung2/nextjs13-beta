import Image from "next/image";
import Counter from "@/components/Counter";
import os from "os";

export default function Home() {
  console.log("Hello! - Server Component");
  console.log(os.hostname());
  return (
    <>
      <h1>메인 페이지 버전 2</h1>
      <Counter />
      <div>
        <Image
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
          width={400}
          height={400}
          priority
          alt="main image"
        />
      </div>
    </>
  );
}
