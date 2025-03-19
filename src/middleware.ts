import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const MAINTENANCE_MODE = true

const publicRoutes = ['/', '/login', '/register', '/recover', '/reset-password']

const openRoutes = ['/api/health', '/api/docs']

const exemptRoutes = ['/maintenance']

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (openRoutes.includes(pathname)) {
    return NextResponse.next()
  }

  if (
    MAINTENANCE_MODE &&
    !exemptRoutes.some((route) => pathname.startsWith(route))
  ) {
    const maintenanceUrl = new URL('/maintenance', request.url)
    return NextResponse.redirect(maintenanceUrl)
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
