'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'

interface LoginCredentials {
  email: string
  password: string
}

interface AuthResponse {
  token: string
  user: {
    id: string
    username: string
    role: string
  }
}

export const useAuth = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const login = async ({ email, password }: LoginCredentials) => {
    try {
      setIsLoading(true)
      setError(null)

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        },
      )

      if (!response.ok) {
        throw new Error('Credenciales inválidas')
      }

      const data: AuthResponse = await response.json()

      Cookies.set('auth_token', data.token, {
        expires: 7,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
      })

      localStorage.setItem(
        'user',
        JSON.stringify({
          id: data.user.id,
          username: data.user.username,
          role: data.user.role,
        }),
      )

      router.push('/dashboard')
      return data
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al iniciar sesión')
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    Cookies.remove('auth_token')
    localStorage.removeItem('user')
    router.push('/login')
  }

  const isAuthenticated = (): boolean => {
    const token = Cookies.get('auth_token')
    return !!token
  }

  return {
    login,
    logout,
    isAuthenticated,
    isLoading,
    error,
  }
}
