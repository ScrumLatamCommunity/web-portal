'use client'
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react'
import { useRouter } from 'next/navigation'

interface OnboardingContextType {
  progress: number
  completeWelcome: () => void
  completeTerms: () => void
  isWelcomeCompleted: boolean
  isTermsCompleted: boolean
}

interface OnboardingState {
  progress: number
  isWelcomeCompleted: boolean
  isTermsCompleted: boolean
}

const STORAGE_KEY = 'onboarding_state'

const getInitialState = (): OnboardingState => {
  if (typeof window === 'undefined') {
    return {
      progress: 0,
      isWelcomeCompleted: false,
      isTermsCompleted: false,
    }
  }

  const savedState = localStorage.getItem(STORAGE_KEY)
  if (savedState) {
    return JSON.parse(savedState)
  }

  return {
    progress: 0,
    isWelcomeCompleted: false,
    isTermsCompleted: false,
  }
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(
  undefined
)

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const router = useRouter()
  const [state, setState] = useState<OnboardingState>(getInitialState)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }, [state])

  const completeWelcome = () => {
    setState((prev) => ({
      ...prev,
      isWelcomeCompleted: true,
      progress: prev.isTermsCompleted ? 100 : 50,
    }))
  }

  const completeTerms = () => {
    setState((prev) => ({
      ...prev,
      isTermsCompleted: true,
      progress: prev.isWelcomeCompleted ? 100 : 50,
    }))

    if (state.isWelcomeCompleted) {
      router.push('/onboarding/comment')
    }
  }

  return (
    <OnboardingContext.Provider
      value={{
        progress: state.progress,
        completeWelcome,
        completeTerms,
        isWelcomeCompleted: state.isWelcomeCompleted,
        isTermsCompleted: state.isTermsCompleted,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  )
}

export function useOnboarding() {
  const context = useContext(OnboardingContext)
  if (context === undefined) {
    throw new Error('useOnboarding must be used within an OnboardingProvider')
  }
  return context
}
