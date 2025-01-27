'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { toast } from 'react-hot-toast'
import { useAuth } from '@/app/context/AuthContext'
import { useRegister } from '@/app/context/RegisterContext'

export default function Comment() {
  const router = useRouter()
  const { registerUser } = useRegister()
  const [comment, setComment] = useState('')

  useEffect(() => {
    if (!registerUser) {
      router.push('/login')
    }
  }, [registerUser, router])

  const handleSubmit = async () => {
    if (!registerUser) {
      toast.error('No hay información del usuario')
      return
    }

    const API_URL = process.env.NEXT_PUBLIC_API_URL
    try {
      const response = await fetch(`${API_URL}auth/onboarding`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: registerUser.email,
          completed: true
        })
      })

      if (response.ok) {
        toast.success('Onboarding completado')
        router.push('/login')
      } else {
        toast.error('Error al completar el onboarding')
      }
    } catch (error) {
      toast.error('Error al completar el onboarding')
    }
  }

  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='w-full max-w-md p-6'>
        <h1 className='mb-6 text-2xl font-bold'>¡Casi terminamos!</h1>
        <p className='mb-4'>
          Nos gustaría saber tus expectativas sobre la comunidad (opcional)
        </p>
        <TextField
          className='mb-4 w-full'
          multiline
          rows={4}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder='Escribe tu comentario aquí...'
        />
        <div className='flex justify-end'>
          <Button
            className='rounded-md bg-[#FD3600] p-2 font-bold text-white'
            onClick={handleSubmit}
          >
            Finalizar
          </Button>
        </div>
      </div>
    </div>
  )
}
