'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { useAuth } from '@/hooks/useAuth'

interface User {
  id: string
  username: string
  role: string
}

interface Credentials {
  email: string
  password: string
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  login: (credentials: Credentials) => Promise<void>
  logout: () => void
  isLoading: boolean
  error: string | null
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null)
  const auth = useAuth()

  useEffect(() => {
    // Recuperar usuario del localStorage al cargar la aplicación
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const value = {
    user,
    isAuthenticated: auth.isAuthenticated(),
    login: async (credentials: Credentials) => {
      const response = await auth.login(credentials)
      setUser(response.user)
    },
    logout: () => {
      auth.logout()
      setUser(null)
    },
    isLoading: auth.isLoading,
    error: auth.error,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuthContext = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider')
  }
  return context
}
