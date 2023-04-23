import os from "os";
// import React, { useState } from "react";

export default function Home() {
  // ! "useState" is not allowed in Server Components.
  // const [name, setName] = useState<string>("");
  console.log("Hello!");
  console.log(os.hostname());
  return <h1>메인 페이지</h1>;
}
