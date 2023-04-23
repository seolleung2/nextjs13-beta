import Counter from "@/components/Counter";
import os from "os";

export default function Home() {
  console.log("Hello! - Server Component");
  console.log(os.hostname());
  return (
    <>
      <h1>메인 페이지</h1>
      <Counter />
    </>
  );
}
