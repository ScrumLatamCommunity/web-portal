'use client'

import { useAuth } from '@/app/context/AuthContext'
import { useEffect, useState } from 'react'

interface AuthWrapperProps {
  children: React.ReactNode
  showWhenAuth?: boolean
}

export function AuthWrapper({
  children,
  showWhenAuth = true,
}: AuthWrapperProps) {
  const { user } = useAuth()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkAuth = () => {
      const hasToken = user !== null
      setIsAuthenticated(hasToken)
      setIsLoading(false)
    }

    checkAuth()
    window.addEventListener('storage', checkAuth)

    return () => {
      window.removeEventListener('storage', checkAuth)
    }
  }, [])

  if (isLoading) {
    return null
  }

  if (showWhenAuth && !isAuthenticated) {
    return null
  }

  if (!showWhenAuth && isAuthenticated) {
    return null
  }

  return <>{children}</>
}
