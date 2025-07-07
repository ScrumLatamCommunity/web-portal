import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL

// Función helper para obtener el token de forma segura
const getAuthToken = (): string | null => {
  if (typeof window === 'undefined') {
    return null
  }
  try {
    return localStorage.getItem('auth_token')
  } catch (error) {
    console.error('Error al acceder a localStorage:', error)
    return null
  }
}

/**
 * Configura una instancia de Axios para el lado del cliente
 * Incluye interceptores para manejo automático de tokens y errores
 */
export function setupAxios({ options }: { options?: AxiosRequestConfig }) {
  const axiosInstance = axios.create({
    baseURL: API_URL || 'http://localhost:3000',
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers
    },
    timeout: 10000, // 10 segundos de timeout
    ...options
  })

  // Interceptor de solicitud
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = getAuthToken()
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    (error) => {
      console.error('Error en interceptor de solicitud:', error)
      return Promise.reject(error)
    }
  )

  // Interceptor de respuesta
  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response
    },
    (error: AxiosError) => {
      // Manejar errores de autenticación
      if (error.response?.status === 401) {
        console.warn('Token expirado o inválido')
        if (typeof window !== 'undefined') {
          localStorage.removeItem('auth_token')
          // Solo redirigir si no estamos ya en la página de login
          if (!window.location.pathname.includes('/login')) {
            window.location.href = '/login'
          }
        }
      }

      // Manejar errores de red
      if (!error.response) {
        console.error('Error de red:', error.message)
      }

      // Log del error para debugging
      console.error('Error de Axios:', {
        status: error.response?.status,
        statusText: error.response?.statusText,
        data: error.response?.data,
        message: error.message
      })

      return Promise.reject(error)
    }
  )

  return axiosInstance
}

/**
 * Función helper para crear una instancia de Axios específicamente para el cliente
 * Útil cuando necesitas asegurarte de que solo se ejecute en el navegador
 */
export function createClientAxiosInstance(options?: AxiosRequestConfig) {
  if (typeof window === 'undefined') {
    throw new Error(
      'createClientAxiosInstance solo puede usarse en el lado del cliente'
    )
  }

  return setupAxios({ options })
}
