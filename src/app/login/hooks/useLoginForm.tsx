'use client'

import { useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/app/context/AuthContext'

interface LoginFormData {
  email: string
  password: string
}

interface LoginResponse {
  access_token: string
  message: string
  user: {
    onboarding: boolean
  }
}

export function useLoginForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const router = useRouter()
  const { setAuthToken, user } = useAuth()

  // Efecto para manejar la redirección cuando el usuario esté disponible
  useEffect(() => {
    if (shouldRedirect && user) {
      // Redirección condicional basada en el onboarding
      if (user.onboarding === false) {
        try {
          window.location.href = '/onboarding/travel'
        } catch (error) {
          console.error('Error en redirección:', error)
        }
      } else {
        try {
          router.push('/')
        } catch (error) {
          console.error('Error en redirección al home:', error)
        }
      }
      setShouldRedirect(false)
    }
  }, [user, shouldRedirect, router])

  const handleLogin = async (formData: LoginFormData) => {
    setIsLoading(true)
    const API_URL = process.env.NEXT_PUBLIC_API_URL

    try {
      const response = await fetch(`${API_URL}auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data: LoginResponse = await response.json()

      if (response.ok) {
        // Solo usar setAuthToken del AuthContext, no duplicar el guardado
        setAuthToken(data.access_token)
        toast.success('Inicio de sesión exitoso')

        // Marcar que debemos hacer redirección cuando el usuario esté disponible
        setShouldRedirect(true)
      } else {
        toast.error(data.message || 'Error al iniciar sesión')
      }
    } catch (error) {
      toast.error('Error al conectar con el servidor')
    } finally {
      setIsLoading(false)
    }
  }

  return {
    handleLogin,
    isLoading
  }
}
