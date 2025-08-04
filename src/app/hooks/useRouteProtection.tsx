'use client'

import { useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/navigation'

interface UseRouteProtectionProps {
  allowedRoles: string[]
  redirectTo?: string
  loginRedirectTo?: string
}

export function useRouteProtection({
  allowedRoles,
  redirectTo = '/',
  loginRedirectTo = '/login'
}: UseRouteProtectionProps) {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    // Esperar a que termine la carga de autenticación
    if (isLoading) {
      return
    }

    // Si no hay usuario logueado, redirigir al login
    if (!user) {
      router.push(loginRedirectTo)
      return
    }

    // Si el usuario no tiene el rol permitido, redirigir
    if (!allowedRoles.includes(user.role)) {
      router.push(redirectTo)
      return
    }
  }, [user, isLoading, router, allowedRoles, redirectTo, loginRedirectTo])

  return {
    user,
    isLoading,
    isAuthorized: user && allowedRoles.includes(user.role)
  }
}
