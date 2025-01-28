'use client'

import { useState } from 'react'
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
}

export function useLoginForm() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { setAuthToken } = useAuth()

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
        setAuthToken(data.access_token)
        router.push('/')
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
