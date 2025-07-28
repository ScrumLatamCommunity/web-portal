'use client'

import { useAuth } from '@/app/context/AuthContext'
import { ReactNode } from 'react'

interface AuthWrapperProps {
  children: ReactNode
  showWhenAuth?: boolean
}

export function AuthWrapper({
  children,
  showWhenAuth = true
}: AuthWrapperProps) {
  const { user, isLoading } = useAuth()

  // Mostrar loading mientras se verifica la autenticación
  if (isLoading) {
    return null
  }

  // Si showWhenAuth es true, mostrar solo cuando hay usuario autenticado
  if (showWhenAuth && !user) {
    return null
  }

  // Si showWhenAuth es false, mostrar solo cuando NO hay usuario autenticado
  if (!showWhenAuth && user) {
    return null
  }

  return <>{children}</>
}
