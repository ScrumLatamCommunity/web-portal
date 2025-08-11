'use client'
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect
} from 'react'
import { jwtDecode } from 'jwt-decode'

// Base user interface
interface BaseUser {
  sub: string
  email: string
  firstName: string
  lastName: string
  username: string
  country: string[]
  membership: string
  role: string
  profilePictureUrl: string
  onboarding: boolean
  exp?: number
  iat?: number
}

// Sponsor-specific data interface
interface SponsorData {
  companyName: string
  specialization: string[]
  description: any[] // SponsorDescriptionDto[]
  web: string
  phone: string
  socials: string[]
  logo: string
  bannerWeb: string
  bannerMobile: string
  status: string
}

// Extended user interface for sponsors
interface SponsorUser extends BaseUser {
  role: 'SPONSOR'
  sponsorData: SponsorData
}

// Regular user interface
interface RegularUser extends BaseUser {
  role: 'USER' | 'ADMIN' | 'EDITOR'
}

// Union type for all user types
type User = RegularUser | SponsorUser

interface AuthContextType {
  user: User | null
  token: string | null
  selectedSponsorId: string | null
  setSelectedSponsorId: (id: string | null) => void
  setAuthToken: (token: string) => void
  logout: () => void
  isLoading: boolean
  isSponsor: boolean
  isRegularUser: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [selectedSponsorId, setSelectedSponsorIdState] = useState<
    string | null
  >(null)

  // Computed properties for user type checking
  const isSponsor = user?.role === 'SPONSOR'
  const isRegularUser =
    user?.role === 'USER' || user?.role === 'ADMIN' || user?.role === 'EDITOR'

  useEffect(() => {
    const initializeAuth = () => {
      try {
        const savedToken = localStorage.getItem('auth_token')
        const savedSponsorId = localStorage.getItem('selectedSponsorId')

        if (savedToken) {
          // Decodificar y validar el token inmediatamente
          const decoded = jwtDecode<User>(savedToken)

          // Debug: Log the decoded token data during initialization
          console.log('🔍 [AUTH] Token inicial decodificado:', decoded)
          console.log('🔍 [AUTH] firstName:', decoded.firstName)
          console.log('🔍 [AUTH] lastName:', decoded.lastName)
          console.log('🔍 [AUTH] username:', decoded.username)
          console.log('🔍 [AUTH] role:', decoded.role)

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

      // Debug: Log the decoded token data to verify structure
      console.log('🔍 [AUTH] Token decodificado:', decoded)
      console.log('🔍 [AUTH] firstName:', decoded.firstName)
      console.log('🔍 [AUTH] lastName:', decoded.lastName)
      console.log('🔍 [AUTH] username:', decoded.username)
      console.log('🔍 [AUTH] role:', decoded.role)

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
        isLoading,
        isSponsor,
        isRegularUser
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
