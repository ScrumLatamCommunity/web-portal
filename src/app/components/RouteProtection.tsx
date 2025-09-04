'use client'

import { ReactNode, useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/navigation'
import { LoadingScreen } from '../super-admin-dashboard/components/LoadingScreen'

interface RouteProtectionProps {
  children: ReactNode
  allowedRoles: string[]
  redirectTo?: string
  loginRedirectTo?: string
}

export default function RouteProtection({
  children,
  allowedRoles,
  redirectTo = '/',
  loginRedirectTo = '/login'
}: RouteProtectionProps) {
  const { user, isLoading: authLoading } = useAuth()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (authLoading) {
      return
    }

    if (!user) {
      router.push(loginRedirectTo)
      return
    }

    if (!allowedRoles.includes(user.role)) {
      router.push(redirectTo)
      return
    }

    setIsLoading(false)
  }, [user, authLoading, router, allowedRoles, redirectTo, loginRedirectTo])

  if (authLoading || isLoading) {
    return <LoadingScreen />
  }

  if (!user) {
    return null
  }

  return <>{children}</>
}
