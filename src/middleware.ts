import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  console.log("미들웨어가 실행되고 있음! 체크중!@@");

  if (request.nextUrl.pathname.startsWith("/products/1004")) {
    console.log("미들웨어 - 경로를 리다이랙팅함!");

    return NextResponse.redirect(new URL("/products", request.url));
  }
}

// * 모든 경로가 아닌 특정 경로 에 대해서만 미들웨어를 실행시킨다는 옵션
export const config = {
  matcher: ["/products/:path*"],
};
