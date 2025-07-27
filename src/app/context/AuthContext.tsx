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
  selectedSponsorId: string | null
  setSelectedSponsorId: (id: string | null) => void
  setAuthToken: (token: string) => void
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [selectedSponsorId, setSelectedSponsorIdState] = useState<
    string | null
  >(null)

  useEffect(() => {
    const initializeAuth = () => {
      try {
        const savedToken = localStorage.getItem('auth_token')
        const savedSponsorId = localStorage.getItem('selectedSponsorId')

        if (savedToken) {
          // Decodificar y validar el token inmediatamente
          const decoded = jwtDecode<User>(savedToken)
          const currentTime = Math.floor(Date.now() / 1000)

          if (decoded.exp && decoded.exp < currentTime) {
            // Token expirado, limpiar
            localStorage.removeItem('auth_token')
            setToken(null)
            setUser(null)
          } else {
            // Token válido, establecer inmediatamente
            setToken(savedToken)
            setUser(decoded)
          }
        }

        if (savedSponsorId) {
          setSelectedSponsorIdState(savedSponsorId)
        }
      } catch (error) {
        console.error('Error al inicializar autenticación:', error)
        // Si hay error al decodificar, limpiar token inválido
        localStorage.removeItem('auth_token')
        setToken(null)
        setUser(null)
      } finally {
        setIsLoading(false)
      }
    }

    initializeAuth()
  }, [])

  const setSelectedSponsorId = (id: string | null) => {
    if (id) {
      localStorage.setItem('selectedSponsorId', id)
    } else {
      localStorage.removeItem('selectedSponsorId')
    }
    setSelectedSponsorIdState(id)
  }

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
    localStorage.removeItem('selectedSponsorId')
    setToken(null)
    setUser(null)
    setSelectedSponsorIdState(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        selectedSponsorId,
        setAuthToken,
        logout,
        setSelectedSponsorId,
        isLoading
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
