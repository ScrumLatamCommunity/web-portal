'use client'
import { darkerGrotesque, inter, karla } from '@/fonts'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useAuth } from '@/app/context/AuthContext'
import Skeleton from './Skeleton'
import { getCountryFlag } from '@/utils/getFlags'
import { UserData } from '@/interfaces'
import CountriesDropdown from './countries-dropdown'

export default function EditUserProfile({
  onCancel,
  onSave
}: {
  onCancel: () => void
  onSave: (updatedData: UserData) => void
}) {
  const { user, token } = useAuth()
  const [formData, setFormData] = useState<Partial<UserData>>({ country: [] })
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    if (user?.sub && token) {
      fetchInitialUserData()
    } else {
      setError('No hay información de usuario o token disponible.')
      setIsLoading(false)
    }
  }, [user?.sub, token])

  const fetchInitialUserData = async () => {
    setIsLoading(true)
    setError('')
    try {
      if (!user?.sub || !token) {
        setError('No hay información de usuario disponible.')
        setIsLoading(false)
        return
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}users/${user.sub}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      )

      if (!response.ok) {
        throw new Error(
          `Error HTTP al cargar datos iniciales: ${response.status}`
        )
      }

      const data: UserData = await response.json()
      const { ...initialFormData } = data
      setFormData({
        ...initialFormData,
        country: Array.isArray(initialFormData.country)
          ? initialFormData.country
          : []
      })
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Error al cargar los datos para editar.'
      )
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCountryChange = (updatedCountries: string[]) => {
    setFormData((prev) => ({ ...prev, country: updatedCountries }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsSaving(true)

    if (!user?.sub || !token) {
      setError(
        'No hay información de usuario o token disponible para actualizar.'
      )
      setIsSaving(false)
      return
    }

    const payload: Partial<UserData> = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      username: formData.username,
      email: formData.email,
      country: formData.country
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}users/${user.sub}`,
        {
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        }
      )

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(
          `Error al actualizar: ${response.status} - ${response.statusText}. Detalle: ${errorText}`
        )
      }

      const updatedData: UserData = await response.json()
      onSave(updatedData)
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Error al actualizar el perfil.'
      )
    } finally {
      setIsSaving(false)
    }
  }

  const flagSrc =
    formData.country && formData.country.length > 0
      ? getCountryFlag(formData.country[0])
      : undefined

  if (isLoading) {
    return (
      <section
        className={`${darkerGrotesque.variable} ${karla.variable} flex min-h-screen flex-col items-center bg-gray-100 px-4 py-10`}
      >
        <div className='w-full max-w-2xl'>
          <Skeleton className='mx-auto mb-8 h-10 w-3/4' />
          <div className='space-y-8 rounded-2xl bg-white p-6 shadow-xl md:p-10'>
            {[...Array(5)].map((_, i) => (
              <div key={i}>
                <Skeleton className='mb-2 h-6 w-1/4' />
                <Skeleton className='h-12 w-full rounded-xl' />
              </div>
            ))}
            <div className='mt-4 flex justify-end gap-4 pt-6'>
              <Skeleton className='h-12 w-32 rounded-lg' />
              <Skeleton className='h-12 w-40 rounded-lg' />
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (error && Object.keys(formData).length === 0 && !isLoading) {
    return (
      <section
        className={`${darkerGrotesque.variable} ${karla.variable} flex min-h-screen items-center justify-center bg-red-50 px-4 py-10`}
      >
        <div className='max-w-md rounded-xl bg-white p-8 text-center shadow-2xl'>
          <h2 className='mb-4 text-2xl font-bold text-red-700'>
            Error Crítico
          </h2>
          <p className='text-lg text-red-600'>{error}</p>
          <button
            onClick={fetchInitialUserData}
            className='mt-8 rounded-lg bg-[#FD3600] px-6 py-3 text-lg text-white transition-colors hover:bg-opacity-80'
          >
            Reintentar Carga
          </button>
        </div>
      </section>
    )
  }

  return (
    <section
      className={`${darkerGrotesque.variable} ${karla.variable} flex min-h-screen flex-col items-center bg-gray-50 px-4 py-10`}
    >
      <div className='w-full max-w-2xl'>
        <h1
          className={`mb-10 text-center text-4xl font-darker-grotesque-700 text-[#082965] md:text-5xl`}
        >
          Editar Perfil
        </h1>
        <form
          onSubmit={handleSubmit}
          className='space-y-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-2xl md:p-10'
        >
          {error && Object.keys(formData).length > 0 && (
            <div className='mb-6 rounded-md border border-red-200 bg-red-50 p-4 text-red-700'>
              <p className='font-semibold'>Error al guardar:</p>
              <p>{error}</p>
            </div>
          )}

          <div>
            <label
              htmlFor='firstName'
              className='text-black mb-2 block text-xl font-darker-grotesque-700'
            >
              Nombre
            </label>
            <input
              id='firstName'
              name='firstName'
              type='text'
              value={formData.firstName || ''}
              onChange={handleChange}
              className='text-black w-full rounded-xl border-transparent bg-[#D9D9D940] px-4 py-3 text-lg focus:border-transparent focus:ring-2 focus:ring-[#082965]'
              disabled={isSaving}
            />
          </div>

          <div>
            <label
              htmlFor='lastName'
              className='text-black mb-2 block text-xl font-darker-grotesque-700'
            >
              Apellido
            </label>
            <input
              id='lastName'
              name='lastName'
              type='text'
              value={formData.lastName || ''}
              onChange={handleChange}
              className='text-black w-full rounded-xl border-transparent bg-[#D9D9D940] px-4 py-3 text-lg focus:border-transparent focus:ring-2 focus:ring-[#082965]'
              disabled={isSaving}
            />
          </div>

          <div>
            <label
              htmlFor='username'
              className='text-black mb-2 block text-xl font-darker-grotesque-700'
            >
              Nombre de Usuario
            </label>
            <input
              id='username'
              name='username'
              type='text'
              value={formData.username || ''}
              onChange={handleChange}
              className='text-black w-full rounded-xl border-transparent bg-[#D9D9D940] px-4 py-3 text-lg focus:border-transparent focus:ring-2 focus:ring-[#082965]'
              disabled={isSaving}
            />
          </div>

          <div>
            <label
              htmlFor='email'
              className='text-black mb-2 block text-xl font-darker-grotesque-700'
            >
              Email
            </label>
            <input
              id='email'
              name='email'
              type='email'
              value={formData.email || ''}
              onChange={handleChange}
              className='text-black w-full rounded-xl border-transparent bg-[#D9D9D940] px-4 py-3 text-lg focus:border-transparent focus:ring-2 focus:ring-[#082965]'
              disabled={isSaving}
            />
          </div>

          <div>
            <label
              htmlFor='country'
              className='text-black mb-2 block text-xl font-darker-grotesque-700'
            >
              País
            </label>
            <div className='flex items-center gap-x-3'>
              {flagSrc && (
                <Image
                  alt='Bandera del país'
                  className='h-8 w-12 flex-shrink-0 rounded-sm object-contain'
                  src={flagSrc}
                  width={48}
                  height={32}
                  onError={(e) => {
                    ;(e.target as HTMLImageElement).style.display = 'none'
                  }}
                />
              )}
              <CountriesDropdown
                countries={formData.country || []}
                onChange={handleCountryChange}
                disabled={isSaving}
              />
            </div>
          </div>

          {/* Botones de Acción */}
          <div
            className={`${inter.variable} mt-10 flex flex-col justify-end gap-4 border-t border-gray-200 pt-8 sm:flex-row`}
          >
            <button
              type='button'
              onClick={onCancel}
              className='w-full rounded-xl bg-gray-500 px-8 py-3 font-inter text-lg font-semibold text-white transition-colors hover:bg-gray-600 sm:w-auto'
              disabled={isSaving}
            >
              Cancelar
            </button>
            <button
              type='submit'
              className='w-full rounded-xl bg-[#FD3600] px-8 py-3 font-inter text-lg font-semibold text-white transition-colors hover:bg-opacity-85 sm:w-auto'
              disabled={isSaving || isLoading}
            >
              {isSaving ? 'Guardando...' : 'Guardar Cambios'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
