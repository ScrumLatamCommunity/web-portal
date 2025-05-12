'use client'
import { darkerGrotesque, inter, karla } from '@/fonts'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import GlobeIcon from '@/assets/GlobeIcon'
import { useAuth } from '@/app/context/AuthContext'
import Skeleton from '../components/Skeleton'
import { getCountryFlag } from '@/utils/getFlags'
import { UserData } from '@/interfaces'
import { useRouter } from 'next/navigation'
import EditUserProfile from '../components/editUserProfile'

export default function SponsorProfile() {
  const router = useRouter()
  const { user, token } = useAuth()
  const [userData, setUserData] = useState<UserData | null>(null)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [showEditProfile, setShowEditProfile] = useState(false)

  useEffect(() => {
    fetchUserData()
  }, [user?.sub, token])

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'No hay fecha de ingreso'

    const date = new Date(dateString)
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear()

    return `${day}/${month}/${year}`
  }

  const cleanHtml = (html?: string) => {
    if (!html) return ''

    // Crear un elemento temporal
    const doc = new DOMParser().parseFromString(html, 'text/html')
    // Obtener el texto sin HTML
    const cleanText = doc.body.textContent || ''
    // Decodificar caracteres especiales
    return cleanText
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/[)(/)]/g, '') // Remover caracteres especiales como )(/))
      .trim()
  }
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
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al cargar los datos')
    } finally {
      setIsLoading(false)
    }
  }

  if (error) {
    return <div className='p-4 text-red-500'>Error: {error}</div>
  }

  const ImageWithFallback = ({
    src,
    alt,
    className
  }: {
    src: string | undefined
    alt: string
    className: string
  }) => {
    if (isLoading) {
      return <Skeleton className={className} />
    }

    if (!src) {
      return (
        <div
          className={`${className} flex items-center justify-center bg-gray-100`}
        >
          <span className='text-gray-400'>Sin imagen</span>
        </div>
      )
    }

    return (
      <Image
        src={src}
        alt={alt}
        className={className}
        width={100}
        height={100}
        unoptimized
      />
    )
  }
  if (showEditProfile) {
    return (
      <EditUserProfile
        onCancel={() => setShowEditProfile(false)}
        onSave={() => setShowEditProfile(false)}
      />
    )
  }

  return (
    <section className={`${darkerGrotesque.variable} ${karla.variable} mb-8`}>
      <h1
        className={`items-left mb-6 ml-4 max-w-[1980px] font-darker-grotesque text-[30px] font-darker-grotesque-700 text-[#082965]`}
      >
        Perfil del Usuario
      </h1>
      <div
        className={`w-screen rounded-[20px] border-[0.5px] border-black-13 py-4 md:max-w-[1025px] 2xl:max-w-[1250px]`}
      >
        <div className={`flex flex-row`}>
          <div className='mx-[33px] mb-6 flex w-[28%] flex-col gap-2'>
            <label
              className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'
              htmlFor='company-name'
            >
              Nombre
            </label>
            {isLoading ? (
              <Skeleton className='h-[39px] w-full' />
            ) : (
              <p
                className='h-[39px] w-[100%] rounded-[10px] bg-[#D9D9D940] py-[6px] pl-3'
                id='company-name'
              >
                {userData?.firstName || 'No hay nombre de la empresa'}
              </p>
            )}
          </div>
          <div className='mx-[33px] flex w-[36%] flex-col gap-2'>
            <label
              className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'
              htmlFor='specialization'
            >
              Apellido
            </label>
            {isLoading ? (
              <Skeleton className='h-[39px] w-full' />
            ) : (
              <p
                className='h-[39px] w-[100%] rounded-[10px] bg-[#D9D9D940] py-[6px] pl-3'
                id='company-name'
              >
                {userData?.lastName || 'No hay nombre de la empresa'}
              </p>
            )}
          </div>
          <div className='mx-[33px] flex w-[20%] flex-col gap-2'>
            <label
              className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'
              htmlFor='sponsor-date'
            >
              Fecha de ingreso
            </label>
            {isLoading ? (
              <Skeleton className='h-[39px] w-full' />
            ) : (
              <p
                className='h-[39px] w-[80%] rounded-[10px] bg-[#D9D9D940] p-[8px] text-center'
                id='sponsor-date'
              >
                {userData?.createdAt
                  ? formatDate(userData?.createdAt)
                  : 'No hay fecha de ingreso'}
              </p>
            )}
          </div>
        </div>

        <div className={`flex flex-col`}>
          <div className='flex flex-row'>
            <div className='w-[100%]'>
              <div className={`flex w-full flex-row`}>
                <div className='mx-[33px] mb-6 flex w-[40%] flex-col gap-2'>
                  <label
                    className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'
                    htmlFor='company-mail'
                  >
                    Nombre de Usuario
                  </label>
                  {isLoading ? (
                    <Skeleton className='h-[39px] w-full' />
                  ) : (
                    <p
                      className='h-[39px] w-full rounded-[10px] bg-[#D9D9D940] py-[6px] pl-3'
                      id='company-mail'
                    >
                      {userData?.username || 'No hay correo electrónico'}
                    </p>
                  )}
                </div>
                <div className='mx-[33px] flex w-[33%] flex-col gap-2'>
                  <label
                    className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'
                    htmlFor='company-country'
                  >
                    País
                  </label>
                  <div className={'flex flex-row'}>
                    <ImageWithFallback
                      src={getCountryFlag(userData?.country)}
                      alt='flag'
                      className='my-2 mr-2 h-[21px] w-[38px] bg-[#D9D9D940]'
                    />
                    {isLoading ? (
                      <Skeleton className='h-[39px] w-full' />
                    ) : (
                      <p
                        className='h-[39px] w-[100%] rounded-[10px] bg-[#D9D9D940] py-[6px] pl-3'
                        id='company-country'
                      >
                        {userData?.country || 'No hay país'}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className='mx-[33px] flex flex-col gap-2'>
                <label
                  className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'
                  htmlFor='company-web'
                >
                  Mail
                </label>
                <div className='mb-6 flex flex-row'>
                  <GlobeIcon className='my-1 mr-2 stroke-[#FE2E00]' />
                  {isLoading ? (
                    <Skeleton className='h-[39px] w-[461px]' />
                  ) : (
                    <p
                      className='h-[39px] w-[461px] rounded-[10px] bg-[#D9D9D940] py-[6px] pl-3'
                      id='company-web'
                    >
                      {userData?.email || 'No hay web'}
                    </p>
                  )}
                </div>
              </div>
              <div className='mx-[33px] flex flex-col gap-2'>
                <label
                  className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'
                  htmlFor='company-web'
                >
                  Membresía
                </label>
                <div className='mb-6 flex flex-row'>
                  <GlobeIcon className='my-1 mr-2 stroke-[#FE2E00]' />
                  {isLoading ? (
                    <Skeleton className='h-[39px] w-[461px]' />
                  ) : (
                    <p
                      className='h-[39px] w-[461px] rounded-[10px] bg-[#D9D9D940] py-[6px] pl-3'
                      id='company-web'
                    >
                      {userData?.membership || 'No hay web'}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className='flex w-[30%] flex-col'>
              <label
                className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'
                htmlFor='company-logo'
              >
                Foto de Perfil
              </label>
              <ImageWithFallback
                src={
                  'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Super%20Admin%20Dashboard%2FIsotipo%20principal%201.svg?alt=media&token=c82729ba-f8ca-48cd-af3f-eb69b5a4024c'
                }
                alt='company-logo'
                className='h-[200px] w-[200px] object-fill'
              />
            </div>
          </div>
        </div>

        <div className={`${inter.variable} flex w-full flex-row justify-end`}>
          <button
            onClick={() => setShowEditProfile(true)}
            className='mx-16 mb-6 mt-12 h-[60px] w-[300px] rounded-[10px] bg-[#FD3600] px-3 font-inter font-inter-400 text-[#FFFFFF]'
          >
            Editar Perfil
          </button>
        </div>
      </div>
    </section>
  )
}
