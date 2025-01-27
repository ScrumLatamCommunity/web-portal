import { useState } from 'react'

export const useRegisterForm = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>('')
  const [selectedMembership, setSelectedMembership] = useState<string>('')

  return {
    selectedCountry,
    setSelectedCountry,
    selectedMembership,
    setSelectedMembership,
  }
}
