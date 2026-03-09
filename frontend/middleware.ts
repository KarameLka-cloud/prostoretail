import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/admin") {
    return NextResponse.redirect(new URL("/admin/home", request.url));
  }

  return NextResponse.next();
}
