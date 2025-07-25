'use client'
import { darkerGrotesque, karla } from '@/fonts'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import GlobeIcon from '@/assets/GlobeIcon'
import { useAuth } from '@/app/context/AuthContext'
import Skeleton from '../components/Skeleton'
import { getCountryFlag } from '@/utils/getFlags'
import { UserData } from '@/interfaces'
import { useRouter } from 'next/navigation'
import EditUserProfile from '../components/editUserProfile'
import ProfileImageUploadModal from '../components/profileImageUploadModal'

const DEFAULT_PROFILE_FALLBACK_IMAGE_URL =
  'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Super%20Admin%20Dashboard%2FIsotipo%20principal%201.svg?alt=media&token=c82729ba-f8ca-48cd-af3f-eb69b5a4024c'

export default function UserProfile() {
  const router = useRouter()
  const { user, token } = useAuth()
  const [userData, setUserData] = useState<UserData | null>(null)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [showEditProfile, setShowEditProfile] = useState(false)
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)

  useEffect(() => {
    if (user?.sub && token) {
      fetchUserData()
    } else {
      setIsLoading(false)
    }
  }, [user?.sub, token])

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'No disponible'
    const date = new Date(dateString)
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear()
    return `${day}/${month}/${year}`
  }

  const fetchUserData = async () => {
    setIsLoading(true)
    setError('')
    try {
      if (!user?.sub || !token) {
        setError('No hay información de usuario disponible')
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
      if (!response.ok) throw new Error(`Error HTTP: ${response.status}`)
      const data: UserData = await response.json()
      setUserData(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al cargar los datos')
    } finally {
      setIsLoading(false)
    }
  }

  const handleProfileSave = (updatedUserData: UserData) => {
    setUserData(updatedUserData)
    setShowEditProfile(false)
  }
  const handleImageUploadCompleted = (updatedUserData: UserData) => {
    setUserData(updatedUserData)
    setIsImageModalOpen(false)
  }

  const ImageWithFallback = ({
    primarySrc,
    fallbackSrc = DEFAULT_PROFILE_FALLBACK_IMAGE_URL,
    alt,
    className,
    imgWidth = 200,
    imgHeight = 200
  }: {
    primarySrc: string | undefined | null
    fallbackSrc?: string | null
    alt: string
    className: string
    imgWidth?: number
    imgHeight?: number
  }) => {
    const [currentSrcToDisplay, setCurrentSrcToDisplay] = useState(primarySrc)
    const [errorLoading, setErrorLoading] = useState(false)
    useEffect(() => {
      setCurrentSrcToDisplay(primarySrc)
      setErrorLoading(false)
    }, [primarySrc])
    if (isLoading && !userData) {
      return <Skeleton className={className} />
    }
    let finalSrc =
      errorLoading || !currentSrcToDisplay ? fallbackSrc : currentSrcToDisplay
    if (!finalSrc) {
      return (
        <div
          className={`${className} flex items-center justify-center border border-gray-300 bg-gray-100`}
        >
          <span className='text-xs text-gray-400'>Sin foto</span>
        </div>
      )
    }
    return (
      <Image
        key={finalSrc}
        src={finalSrc}
        alt={alt}
        className={className}
        width={imgWidth}
        height={imgHeight}
        objectFit='cover'
        onError={() => {
          if (
            currentSrcToDisplay &&
            currentSrcToDisplay === finalSrc &&
            !errorLoading
          ) {
            setErrorLoading(true)
          }
        }}
        unoptimized
      />
    )
  }

  if (showEditProfile) {
    return (
      <EditUserProfile
        onCancel={() => setShowEditProfile(false)}
        onSave={handleProfileSave}
      />
    )
  }
  if (isLoading && !userData) {
    return (
      <section
        className={`${darkerGrotesque.variable} ${karla.variable} min-h-screen bg-gray-100 p-4 md:p-8`}
      >
        <div className='mx-auto max-w-3xl'>
          <Skeleton className='mb-10 h-12 w-1/2' />
          <div className='rounded-xl bg-white p-8 shadow-xl'>
            <div className='mb-8 flex flex-col items-center gap-6'>
              <Skeleton className='mb-4 h-48 w-48 rounded-full' />
              <Skeleton className='h-10 w-3/4' />
              <Skeleton className='h-8 w-1/2' />
            </div>
            <div className='space-y-8'>
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} className='h-14 w-full' />
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
  if (error) {
    return (
      <div className='flex min-h-screen items-center justify-center bg-gray-100'>
        <div className='max-w-md rounded-lg bg-white p-6 text-center text-lg text-red-600 shadow-xl md:p-8'>
          <h2 className='mb-4 text-2xl font-bold text-red-700'>
            ¡Oops! Algo salió mal
          </h2>
          <p>Error: {error}</p>
          <button
            onClick={() => fetchUserData()}
            className='mt-6 rounded bg-[#FD3600] px-4 py-2 text-white transition-colors hover:bg-opacity-80'
          >
            Reintentar
          </button>
        </div>
      </div>
    )
  }

  const displayCountry =
    userData?.country && userData.country.length > 0
      ? userData.country.join(', ')
      : 'No especificado'
  const flagSrc =
    userData?.country && userData.country.length > 0
      ? getCountryFlag(userData.country[0])
      : undefined

  const DetailItem = ({
    label,
    value,
    icon,
    fullWidth = false
  }: {
    label: string
    value: string
    icon?: React.ReactNode
    fullWidth?: boolean
  }) => (
    <div className={`${fullWidth ? 'col-span-full' : ''}`}>
      <label className='mb-2 block text-sm font-medium text-gray-700'>
        {label}
      </label>
      <div className='relative'>
        <input
          type='text'
          value={value || ''}
          readOnly
          className='w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-900 focus:border-gray-300 focus:outline-none focus:ring-0'
        />
        {icon && (
          <div className='absolute right-3 top-1/2 -translate-y-1/2'>
            {icon}
          </div>
        )}
      </div>
    </div>
  )

  return (
    <>
      <section
        className={`${darkerGrotesque.variable} ${karla.variable} min-h-screen bg-gray-100 p-4 md:p-8`}
      >
        <div className='mx-auto max-w-2xl'>
          {/* Card principal centrado */}
          <div className='rounded-xl border border-gray-200 bg-white p-4 shadow-xl md:p-8'>
            {/* Título dentro del card */}
            <h1 className='mb-6 text-2xl font-darker-grotesque-700 text-[#FE7354] md:mb-8 md:text-4xl'>
              Mi perfil
            </h1>

            {/* Sección de perfil en dos columnas */}
            <div className='mb-6 flex gap-2 md:mb-8 md:flex-row md:items-start md:gap-6'>
              {/* Columna izquierda - Foto */}
              <div className='flex justify-center md:justify-start'>
                <div className='group relative flex-shrink-0'>
                  <ImageWithFallback
                    primarySrc={userData?.profilePictureUrl}
                    alt='Foto de Perfil'
                    className='h-20 w-20 rounded-full border-4 border-slate-300 object-cover shadow-lg md:h-36 md:w-36'
                    imgWidth={144}
                    imgHeight={144}
                  />
                  <button
                    onClick={() => setIsImageModalOpen(true)}
                    className='bg-black absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-full bg-opacity-0 text-sm font-semibold text-[#fefeff] opacity-0 transition-opacity duration-300 group-hover:bg-opacity-50 group-hover:opacity-100'
                    aria-label='Cambiar foto de perfil'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='mb-1 h-6 w-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z'
                      />
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z'
                      />
                    </svg>
                    Cambiar foto de perfil
                  </button>
                </div>
              </div>

              {/* Columna derecha - Nombre y botones */}
              <div className='flex-1 text-center'>
                <h2 className='text-s mb-2 font-darker-grotesque-700 text-[#082965] md:mb-4 md:text-3xl'>
                  {userData?.firstName || ''} {userData?.lastName || ''}
                </h2>
                <div className='flex flex-row justify-center gap-2 md:gap-4'>
                  <button
                    onClick={() => setIsImageModalOpen(true)}
                    className='flex-7 rounded-md border border-gray-300 px-1 py-1 text-xs font-medium text-gray-700 hover:bg-gray-50 md:flex-none md:px-4 md:text-sm lg:px-3 lg:py-3 lg:text-xl'
                  >
                    Cambiar foto de perfil
                  </button>
                  <button
                    onClick={() => setShowEditProfile(true)}
                    className='flex-2 rounded-md bg-[#082965] px-2 py-1 text-xs font-medium text-white hover:bg-opacity-90 md:flex-none md:px-4 md:text-sm lg:py-3 lg:text-xl'
                  >
                    Editar
                  </button>
                </div>
              </div>
            </div>

            {/* Formulario/Información */}
            <div className='space-y-4 md:space-y-6'>
              <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                <DetailItem
                  label='Nombres*'
                  value={userData?.firstName || ''}
                />
                <DetailItem
                  label='Apellidos*'
                  value={userData?.lastName || ''}
                />
              </div>

              <DetailItem
                label='Correo electrónico*'
                value={userData?.email || ''}
                fullWidth={true}
              />

              <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                <DetailItem
                  label='Nombre de usuario*'
                  value={userData?.username || ''}
                />
                <DetailItem
                  label='País*'
                  value={displayCountry}
                  icon={
                    flagSrc ? (
                      <ImageWithFallback
                        primarySrc={flagSrc}
                        fallbackSrc={null}
                        alt='Bandera'
                        className='h-4 w-6 object-contain'
                        imgWidth={24}
                        imgHeight={16}
                      />
                    ) : (
                      <GlobeIcon className='h-4 w-4 text-gray-400' />
                    )
                  }
                />
              </div>

              {/* Botón de guardar centrado */}
              <div className='pt-4 text-center md:pt-6'>
                <button
                  onClick={() => setShowEditProfile(true)}
                  className='w-full rounded-md bg-[#082965] px-4 py-2 font-inter text-base font-semibold text-white shadow-md transition-all hover:bg-opacity-90 hover:shadow-lg md:w-auto md:px-12 md:py-3 md:text-lg'
                >
                  Guardar cambios
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isImageModalOpen && (
        <ProfileImageUploadModal
          isOpen={isImageModalOpen}
          onClose={() => setIsImageModalOpen(false)}
          currentImageUrl={userData?.profilePictureUrl}
          onUploadComplete={handleImageUploadCompleted}
        />
      )}
    </>
  )
}
