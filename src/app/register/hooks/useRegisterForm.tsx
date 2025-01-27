import { z } from 'zod'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { registerSchema } from '../schema/userSchema'
import { METHODS } from '@/interfaces'
import toast from 'react-hot-toast'

export const useRegisterForm = (API_URL: string) => {
  const router = useRouter()
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

      toast.success('Usuario registrado exitosamente')
      setTimeout(() => {
        router.push('/login')
      }, 2000)
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.log(error)
        toast.error(
          error.errors
            .map((err) => `${err.path.join('.')}: ${err.message}`)
            .join('\n'),
        )
      } else if (error instanceof Error) {
        toast.error(error.message)
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
