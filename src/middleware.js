import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  

  const hasManualCookie = request.cookies.has('isLoggedIn');
  const allCookies = request.cookies.getAll();
  const hasNextAuthCookie = allCookies.some(cookie => 
    cookie.name.includes('next-auth.session-token')
  );
  const isAuthenticated = hasManualCookie || hasNextAuthCookie;

 
  if (pathname === '/login' && isAuthenticated) {
     return NextResponse.redirect(new URL('/items', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/login'],
};