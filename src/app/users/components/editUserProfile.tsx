'use client'
import { darkerGrotesque, inter, karla } from '@/fonts'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useAuth } from '@/app/context/AuthContext'
import Skeleton from './Skeleton'
import { getCountryFlag } from '@/utils/getFlags'
import { UserData } from '@/interfaces'
import CountriesDropdown from './countries-dropdown'
import ImageUpload from './imageUpload'

export default function EditUserProfile({
  onCancel,
  onSave
}: {
  onCancel: () => void
  onSave: () => void
}) {
  const { user, token } = useAuth()
  const [userData, setUserData] = useState<UserData | null>(null)
  const [formData, setFormData] = useState<Partial<UserData>>({})
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchUserData()
  }, [user?.sub, token])

  const fetchUserData = async () => {
    setIsLoading(true)
    try {
      if (!user?.sub || !token) {
        setError('No hay información de usuario disponible')
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
        throw new Error(`Error HTTP: ${response.status}`)
      }

      const data = await response.json()
      setUserData(data)
      setFormData(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al cargar los datos')
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

  const handleCountryChange = (countries: string[]) => {
    setFormData((prev) => ({ ...prev, country: countries }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!user?.sub || !token) {
      setError('No hay información de usuario disponible')
      return
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}users/${user.sub}`,
        {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        }
      )

      if (!response.ok) {
        throw new Error(`Error al actualizar: ${response.statusText}`)
      }

      onSave()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al actualizar')
    }
  }

  if (error) {
    return <div className='p-4 text-red-500'>Error: {error}</div>
  }

  return (
    <section className={`${darkerGrotesque.variable} ${karla.variable} mb-8`}>
      <h1 className='mb-6 ml-4 font-darker-grotesque text-[30px] text-[#082965]'>
        Editar Perfil del Usuario
      </h1>
      <form onSubmit={handleSubmit}>
        <div className='w-screen rounded-[20px] border border-black-13 py-4 md:max-w-[1025px] 2xl:max-w-[1250px]'>
          <div className='flex flex-row'>
            <div className='mx-[33px] mb-6 flex w-[28%] flex-col gap-2'>
              <label className='text-[21px] font-bold text-[#000000]'>
                Nombre
              </label>
              {isLoading ? (
                <Skeleton className='h-[39px] w-full' />
              ) : (
                <input
                  name='firstName'
                  value={formData.firstName || ''}
                  onChange={handleChange}
                  className='rounded-[10px] bg-[#D9D9D940] py-[6px] pl-3'
                />
              )}
            </div>
            <div className='mx-[33px] flex w-[36%] flex-col gap-2'>
              <label className='text-[21px] font-bold text-[#000000]'>
                Apellido
              </label>
              {isLoading ? (
                <Skeleton className='h-[39px] w-full' />
              ) : (
                <input
                  name='lastName'
                  value={formData.lastName || ''}
                  onChange={handleChange}
                  className='rounded-[10px] bg-[#D9D9D940] py-[6px] pl-3'
                />
              )}
            </div>
            <div className='mx-[33px] flex w-[20%] flex-col gap-2'>
              <label className='text-[21px] font-bold text-[#000000]'>
                Usuario
              </label>
              {isLoading ? (
                <Skeleton className='h-[39px] w-full' />
              ) : (
                <input
                  name='username'
                  value={formData.username || ''}
                  onChange={handleChange}
                  className='rounded-[10px] bg-[#D9D9D940] py-[6px] pl-3'
                />
              )}
            </div>
          </div>

          <div className='flex flex-row'>
            <div className='mx-[33px] flex w-[30%] flex-col gap-2'>
              <label className='text-[21px] font-bold text-[#000000]'>
                País
              </label>
              {isLoading ? (
                <Skeleton className='h-[39px] w-full' />
              ) : (
                <div className={'flex flex-row'}>
                  <Image
                    alt='flag'
                    className='my-2 mr-2 h-[21px] w-[38px] bg-[#D9D9D940]'
                    src={getCountryFlag(formData.country)}
                    width={100}
                    height={100}
                  />
                  <CountriesDropdown
                    value={formData.country || []}
                    onChange={handleCountryChange}
                  />
                </div>
              )}
            </div>
            <div className='mx-[33px] flex w-[30%] flex-col gap-2'>
              <label className='text-[21px] font-bold text-[#000000]'>
                Email
              </label>
              {isLoading ? (
                <Skeleton className='h-[39px] w-full' />
              ) : (
                <input
                  name='email'
                  type='email'
                  value={formData.email || ''}
                  onChange={handleChange}
                  className='rounded-[10px] bg-[#D9D9D940] py-[6px] pl-3'
                />
              )}
            </div>
            <div className='mx-[33px] flex w-[30%] flex-col gap-2'>
              <label className='text-[21px] font-bold text-[#000000]'>
                Membresía
              </label>
              {isLoading ? (
                <Skeleton className='h-[39px] w-full' />
              ) : (
                <input
                  name='membership'
                  value={formData.membership || ''}
                  onChange={handleChange}
                  className='rounded-[10px] bg-[#D9D9D940] py-[6px] pl-3'
                />
              )}
            </div>
          </div>

          <div className='mx-[33px] mt-4 flex flex-col gap-2'>
            <label className='text-[21px] font-bold text-[#000000]'>
              Foto de Perfil
            </label>
            {/* <ImageUpload onChange={handleChange} /> */}
          </div>

          <div
            className={`${inter.variable} flex w-full flex-row justify-end gap-4`}
          >
            <button
              type='button'
              onClick={onCancel}
              className='mx-16 mb-6 mt-12 h-[60px] w-[300px] rounded-[10px] bg-gray-500 px-3 font-inter text-white'
            >
              Cancelar
            </button>
            <button
              type='submit'
              className='mx-16 mb-6 mt-12 h-[60px] w-[300px] rounded-[10px] bg-[#FD3600] px-3 font-inter text-white'
            >
              Guardar Cambios
            </button>
          </div>
        </div>
      </form>
    </section>
  )
}
