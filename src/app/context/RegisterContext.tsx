'use client'
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect
} from 'react'

// Base user registration interface
interface BaseRegisterUser {
  firstName: string
  lastName: string
  username: string
  email: string
  country: string[]
  membership: string
  role: string
  profilePictureUrl: string
  onboarding: boolean
}

// Sponsor-specific registration data
interface SponsorRegisterData {
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

// Regular user registration interface
interface RegularRegisterUser extends BaseRegisterUser {
  role: 'USER'
}

// Sponsor user registration interface
interface SponsorRegisterUser extends BaseRegisterUser {
  role: 'SPONSOR'
  sponsorData: SponsorRegisterData
}

// Union type for all registration user types
type RegisterUser = RegularRegisterUser | SponsorRegisterUser

interface RegisterContextType {
  registerUser: RegisterUser | null
  setRegisterUser: (user: RegisterUser) => void
  clearRegisterUser: () => void
  isSponsorRegistration: boolean
  isRegularUserRegistration: boolean
}

const RegisterContext = createContext<RegisterContextType | undefined>(
  undefined
)

export function RegisterProvider({ children }: { children: ReactNode }) {
  const [registerUser, setRegisterUser] = useState<RegisterUser | null>(() => {
    // Intentamos obtener los datos del localStorage durante la inicialización
    if (typeof window !== 'undefined') {
      const savedUser = localStorage.getItem('registerUser')
      return savedUser ? JSON.parse(savedUser) : null
    }
    return null
  })

  // Computed properties for registration type checking
  const isSponsorRegistration = registerUser?.role === 'SPONSOR'
  const isRegularUserRegistration = registerUser?.role === 'USER'

  // Efecto para actualizar localStorage cuando cambie registerUser
  useEffect(() => {
    if (registerUser) {
      localStorage.setItem('registerUser', JSON.stringify(registerUser))
    }
  }, [registerUser])

  const clearRegisterUser = () => {
    setRegisterUser(null)
    localStorage.removeItem('registerUser')
  }

  return (
    <RegisterContext.Provider
      value={{
        registerUser,
        setRegisterUser,
        clearRegisterUser,
        isSponsorRegistration,
        isRegularUserRegistration
      }}
    >
      {children}
    </RegisterContext.Provider>
  )
}

export function useRegister() {
  const context = useContext(RegisterContext)
  if (!context) {
    throw new Error('useRegister debe usarse dentro de RegisterProvider')
  }
  return context
}
