import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const isAuth = request.cookies.get("auth");

    const protectedRoutes = ["/profile", "/dashboard"];

    const isProtected = protectedRoutes.some((route) => 
        request.nextUrl.pathname.startsWith(route)
    );
    
    if (isProtected && !isAuth)
        return NextResponse.redirect(new URL("/login", request.url));

    return NextResponse.next();
}

export const config = {
    matcher: ["/profile/:path", "/dashboard/:path*"]
}