'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import toast from 'react-hot-toast'

export async function login(formData: FormData) {
  const email = formData.get('email')
  const password = formData.get('password')

  if (!email || !password) {
    throw new Error('Usuario y contraseña son requeridos')
  }

  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL

    const response = await fetch(`${apiUrl}auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'Credenciales inválidas')
    }

    ;(await cookies()).set('auth_token', data.access_token, {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60,
      path: '/',
    })

    toast.success('Sesión iniciada correctamente')
    redirect('/')
  } catch (error) {
    toast.error('Error al iniciar sesión')
    console.error('Login error:', error)
    throw error instanceof Error ? error : new Error('Error al iniciar sesión')
  }
}

export async function logout() {
  const cookieStore = await cookies()
  cookieStore.delete('auth_token')
  redirect('/login')
}

export async function getCurrentUser() {
  const cookieStore = await cookies()
  const token = cookieStore.get('auth_token')

  if (!token) {
    return null
  }

  try {
    const response = await fetch(`${process.env.API_URL}/auth/me`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    })

    if (!response.ok) {
      return null
    }

    return response.json()
  } catch {
    return null
  }
}
