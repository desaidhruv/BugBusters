import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  if (req.nextUrl.pathname === "/userscard") {
    const session = await getToken({
      req,
      secret: process.env.SECRET,
      //   secureCookie: process.env.NODE_ENV === "development",
    });
    // You could also check for any property on the session object,
    // like role === "admin" or name === "John Doe", etc.
    if (!session) return NextResponse.redirect("/auth/signin");
    // If user is authenticated, continue.
  }
}
