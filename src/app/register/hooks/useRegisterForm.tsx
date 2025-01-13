import { z } from 'zod'
import { useState } from 'react'
import { registerSchema } from '../schema/userSchema'
import { METHODS } from '@/interfaces'

export const useRegisterForm = (API_URL: string) => {
  const [selectedCountry, setSelectedCountry] = useState<string>('')
  const [selectedMembership, setSelectedMembership] = useState<string>('')

  const handleSubmit = async (formData: Record<string, string>) => {
    try {
      registerSchema.parse(formData)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { confirmPassword, ...rest } = formData

      const response = await fetch(API_URL, {
        method: METHODS.POST,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(rest),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Error al registrar usuario')
      }

      alert('Usuario registrado exitosamente')
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.log(error)
        alert(
          error.errors
            .map((err) => `${err.path.join('.')}: ${err.message}`)
            .join('\n'),
        )
      }
    }
  }

  return {
    selectedCountry,
    setSelectedCountry,
    selectedMembership,
    setSelectedMembership,
    handleSubmit,
  }
}
