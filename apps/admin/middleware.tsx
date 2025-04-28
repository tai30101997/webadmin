
import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/profile"];

export default function middleware(req: NextRequest) {
  const adminUser = req.cookies.get("adminUser");
  const isAuthenticated = adminUser ? true : false;

  if (!isAuthenticated && protectedRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/login', req.url))
  }
}