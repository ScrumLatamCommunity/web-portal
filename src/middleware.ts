import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const publicRoutes = ['/', '/login', '/register', '/recover', '/reset-password']

const openRoutes = ['/api/health', '/api/docs']

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (openRoutes.includes(pathname)) {
    return NextResponse.next()
  }

  const token = request.cookies.get('auth_token')
  const isPublicRoute = publicRoutes.some((route) => pathname.startsWith(route))

  if (!token && !isPublicRoute) {
    const url = new URL('/', request.url)
    url.searchParams.set('from', pathname)
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)']
}
