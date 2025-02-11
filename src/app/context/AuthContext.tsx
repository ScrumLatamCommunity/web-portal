'use client'
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect
} from 'react'
import { jwtDecode } from 'jwt-decode'

interface User {
  sub: string
  email: string
  name: string
  exp?: number
  onboarding: boolean
  role: string
}

interface AuthContextType {
  user: User | null
  token: string | null
  setAuthToken: (token: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    const savedToken = localStorage.getItem('auth_token')
    if (savedToken) {
      setAuthToken(savedToken)
    }
  }, [])

  const setAuthToken = (newToken: string) => {
    try {
      const decoded = jwtDecode<User>(newToken)

      const currentTime = Math.floor(Date.now() / 1000)
      if (decoded.exp && decoded.exp < currentTime) {
        throw new Error('Token expirado')
      }

      localStorage.setItem('auth_token', newToken)
      setToken(newToken)
      setUser(decoded)
    } catch (error) {
      console.error('Error al procesar token:', error)
      logout()
    }
  }

  const logout = () => {
    localStorage.removeItem('auth_token')
    setToken(null)
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        setAuthToken,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth debe usarse dentro de AuthProvider')
  }
  return context
}
