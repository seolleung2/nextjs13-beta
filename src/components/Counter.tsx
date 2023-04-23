"use client";
import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState<number>(0);
  console.log("Hello! - Client Component");
  return (
    <>
      <p>{counter}</p>
      <button onClick={() => setCounter((num) => num + 1)}>
        숫자 증가 시키기
      </button>
    </>
  );
}
