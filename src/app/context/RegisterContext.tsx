'use client'
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect
} from 'react'

interface RegisterUser {
  id: string
  firstName: string
  lastName: string
  username: string
  email: string
  country: string[]
  membership: string
  onboarding: boolean
}

interface RegisterContextType {
  registerUser: RegisterUser | null
  setRegisterUser: (user: RegisterUser) => void
  clearRegisterUser: () => void
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
        clearRegisterUser
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
