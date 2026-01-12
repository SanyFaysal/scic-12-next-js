import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function proxy(request) {
    const isLoggedin = request.cookies.get("auth")?.value == "true";

    if (!isLoggedin) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next();
}

// Alternatively, you can use a default export:
// export default function proxy(request) { ... }

export const config = {
    matcher: '/dashboard/:path*',
}