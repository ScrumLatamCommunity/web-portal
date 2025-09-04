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
import CountriesDropdown from '../components/countries-dropdown'
import ProfileImageUploadModal from '../components/profileImageUploadModal'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const DEFAULT_PROFILE_FALLBACK_IMAGE_URL =
  'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Super%20Admin%20Dashboard%2FIsotipo%20principal%201.svg?alt=media&token=c82729ba-f8ca-48cd-af3f-eb69b5a4024c'

// Schema de validación con Zod
const userProfileSchema = z.object({
  firstName: z.string().min(1, 'El nombre es requerido'),
  lastName: z.string().min(1, 'El apellido es requerido'),
  username: z.string().min(1, 'El nombre de usuario es requerido'),
  email: z.string().email('Ingresa un email válido'),
  country: z.array(z.string()).min(1, 'Selecciona al menos un país')
})

type UserProfileFormData = z.infer<typeof userProfileSchema>

export default function UserProfile() {
  const router = useRouter()
  const { user, token, isLoading: authLoading, updateUser } = useAuth()
  const [userData, setUserData] = useState<UserData | null>(null)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)

  // React Hook Form setup
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors: formErrors }
  } = useForm<UserProfileFormData>({
    resolver: zodResolver(userProfileSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      country: []
    }
  })

  useEffect(() => {
    // Esperar a que la autenticación termine de cargar
    if (authLoading) {
      return
    }

    // Solo cargar datos si tenemos tanto el usuario como el token
    if (user?.sub && token) {
      fetchUserData()
    } else if (token && !user) {
      // Si hay token pero no hay usuario, esperar a que se cargue
      setIsLoading(true)
    } else {
      // Si no hay token, no mostrar loading
      setIsLoading(false)
    }
  }, [user?.sub, token, authLoading])

  // Ya no necesitamos handleChange ni handleCountryChange
  // porque react-hook-form los maneja automáticamente

  // Memoizar valores calculados
  const displayCountry = React.useMemo(() => {
    const country = userData?.country
    return country && country.length > 0
      ? country.join(', ')
      : 'No especificado'
  }, [userData?.country])

  const flagSrc = React.useMemo(() => {
    const country = userData?.country
    return country && country.length > 0
      ? getCountryFlag(country[0])
      : undefined
  }, [userData?.country])

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

      if (!response.ok) {
        if (response.status === 401) {
          setError('Sesión expirada. Por favor, inicia sesión nuevamente.')
        } else {
          throw new Error(`Error HTTP: ${response.status}`)
        }
        setIsLoading(false)
        return
      }

      const data: UserData = await response.json()
      setUserData(data)

      // Inicializar form con los datos del usuario usando reset
      reset({
        firstName: data.firstName || '',
        lastName: data.lastName || '',
        username: data.username || '',
        email: data.email || '',
        country: Array.isArray(data.country) ? data.country : []
      })
    } catch (err) {
      console.error('Error fetching user data:', err)
      setError(err instanceof Error ? err.message : 'Error al cargar los datos')
    } finally {
      setIsLoading(false)
    }
  }

  const handleEditToggle = () => {
    if (isEditing) {
      // Cancelar edición: restaurar datos originales usando reset
      if (userData) {
        reset({
          firstName: userData.firstName || '',
          lastName: userData.lastName || '',
          username: userData.username || '',
          email: userData.email || '',
          country: Array.isArray(userData.country) ? userData.country : []
        })
      }
      setError('')
    }
    setIsEditing(!isEditing)
  }

  const onSubmit = async (data: UserProfileFormData) => {
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
      firstName: data.firstName,
      lastName: data.lastName,
      username: data.username,
      email: data.email,
      country: data.country
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
      setUserData(updatedData)
      setIsEditing(false)

      // Actualizar el contexto de autenticación con los nuevos datos
      updateUser({
        firstName: updatedData.firstName,
        lastName: updatedData.lastName,
        username: updatedData.username,
        email: updatedData.email,
        country: updatedData.country,
        profilePictureUrl: updatedData.profilePictureUrl
      })

      // Actualizar el form con los nuevos datos
      reset({
        firstName: updatedData.firstName || '',
        lastName: updatedData.lastName || '',
        username: updatedData.username || '',
        email: updatedData.email || '',
        country: Array.isArray(updatedData.country) ? updatedData.country : []
      })
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Error al actualizar el perfil.'
      )
    } finally {
      setIsSaving(false)
    }
  }

  const handleImageUploadCompleted = (updatedUserData: UserData) => {
    setUserData(updatedUserData)
    setIsImageModalOpen(false)

    // Actualizar el contexto de autenticación con la nueva imagen de perfil
    updateUser({
      profilePictureUrl: updatedUserData.profilePictureUrl
    })
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

  if (authLoading || (isLoading && !userData)) {
    return (
      <section
        className={`${darkerGrotesque.variable} ${karla.variable} min-h-screen bg-gray-100 p-4 md:p-8`}
      >
        <div className='flex min-h-[850px] items-center justify-center'>
          <div className='flex h-auto min-h-[850px] w-full max-w-[994px] shrink-0 flex-col items-start gap-[10px] rounded-[10px] border-[0.5px] border-[rgba(7,35,86,0.5)] bg-white px-6 py-8 shadow-[2px_2px_4px_0_rgba(149,163,189,0.5)] md:rounded-[25px] md:px-[70px] md:py-[55px]'>
            <Skeleton className='mb-10 h-12 w-1/2' />
            <div className='w-full'>
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
        </div>
      </section>
    )
  }

  // Si no hay token y no está cargando, mostrar mensaje de no autenticado
  if (!authLoading && !token) {
    return (
      <div className='flex min-h-screen items-center justify-center bg-gray-100'>
        <div className='flex h-auto min-h-[850px] w-full max-w-[994px] shrink-0 flex-col items-start justify-center gap-[10px] rounded-[10px] border-[0.5px] border-[rgba(7,35,86,0.5)] bg-white px-6 py-8 shadow-[2px_2px_4px_0_rgba(149,163,189,0.5)] md:rounded-[25px] md:px-[70px] md:py-[55px]'>
          <div className='w-full text-center text-lg text-red-600'>
            <h2 className='mb-4 text-2xl font-bold text-red-700'>
              No autenticado
            </h2>
            <p>Debes iniciar sesión para ver tu perfil.</p>
            <button
              type='button'
              onClick={() => router.push('/login')}
              className='mt-6 rounded bg-[#FD3600] px-4 py-2 text-white transition-colors hover:bg-opacity-80'
            >
              Ir al login
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (error && !userData) {
    return (
      <div className='flex min-h-screen items-center justify-center bg-gray-100'>
        <div className='flex h-auto min-h-[850px] w-full max-w-[994px] shrink-0 flex-col items-start justify-center gap-[10px] rounded-[10px] border-[0.5px] border-[rgba(7,35,86,0.5)] bg-white px-6 py-8 shadow-[2px_2px_4px_0_rgba(149,163,189,0.5)] md:rounded-[25px] md:px-[70px] md:py-[55px]'>
          <div className='w-full text-center text-lg text-red-600'>
            <h2 className='mb-4 text-2xl font-bold text-red-700'>
              ¡Oops! Algo salió mal
            </h2>
            <p>Error: {error}</p>
            <button
              type='button'
              onClick={() => fetchUserData()}
              className='mt-6 rounded bg-[#FD3600] px-4 py-2 text-white transition-colors hover:bg-opacity-80'
            >
              Reintentar
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Componente Input reutilizable con react-hook-form
  const FormInput = React.memo(
    ({
      name,
      label,
      type = 'text',
      fullWidth = false,
      icon,
      placeholder
    }: {
      name: keyof UserProfileFormData
      label: string
      type?: string
      fullWidth?: boolean
      icon?: React.ReactNode
      placeholder?: string
    }) => (
      <div className={`${fullWidth ? 'col-span-full' : ''}`}>
        <label className='mb-2 block text-sm font-medium text-gray-700'>
          {label}
        </label>
        <div className='relative'>
          <Controller
            name={name}
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type={type}
                placeholder={placeholder}
                readOnly={!isEditing}
                disabled={isSaving}
                className={`w-full rounded-md border px-3 py-2 text-gray-900 focus:outline-none ${
                  isEditing
                    ? 'border-gray-300 bg-white focus:border-[#082965] focus:ring-2 focus:ring-[#082965]'
                    : 'border-gray-300 bg-gray-50 focus:border-gray-300 focus:ring-0'
                } ${formErrors[name] ? 'border-red-500' : ''}`}
              />
            )}
          />
          {icon && (
            <div className='absolute right-3 top-1/2 -translate-y-1/2'>
              {icon}
            </div>
          )}
        </div>
        {formErrors[name] && (
          <p className='mt-1 text-sm text-red-500'>
            {formErrors[name]?.message}
          </p>
        )}
      </div>
    )
  )

  FormInput.displayName = 'FormInput'

  return (
    <>
      <section
        className={`${darkerGrotesque.variable} ${karla.variable} min-h-screen bg-gray-100 p-4 md:p-8`}
      >
        <div className='flex min-h-[850px] items-center justify-center'>
          {/* Card principal centrado */}
          <div className='flex h-auto min-h-[850px] w-full max-w-[994px] shrink-0 flex-col items-start gap-[10px] rounded-[10px] border-[0.5px] border-[rgba(7,35,86,0.5)] bg-white px-6 py-8 shadow-[2px_2px_4px_0_rgba(149,163,189,0.5)] md:rounded-[25px] md:px-[70px] md:py-[55px]'>
            {/* Título dentro del card */}
            <h1 className='font-darker-grotesque text-[32px] font-bold leading-normal text-[#FE7354] sm:text-[40px] md:mb-9 md:text-[48px]'>
              {isEditing ? 'Editar perfil' : 'Mi perfil'}
            </h1>

            {/* Mostrar errores de guardado */}
            {error && isEditing && (
              <div className='mb-6 w-full rounded-md border border-red-200 bg-red-50 p-4 text-red-700'>
                <p className='font-semibold'>Error al guardar:</p>
                <p>{error}</p>
              </div>
            )}

            {/* Sección de perfil */}
            <div className='mb-6 flex w-full items-center gap-6 self-stretch sm:flex-row sm:gap-[42px] md:mb-8'>
              {/* Foto de perfil */}
              <div className='flex justify-center'>
                <div className='group relative h-[64px] w-[64px] flex-shrink-0 sm:h-[150px] sm:w-[150px]'>
                  <ImageWithFallback
                    primarySrc={userData?.profilePictureUrl}
                    alt='Foto de Perfil'
                    className='h-full w-full rounded-full border-4 border-slate-300 object-cover shadow-lg'
                    imgWidth={150}
                    imgHeight={150}
                  />
                  {isEditing && (
                    <button
                      type='button'
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
                  )}
                </div>
              </div>

              {/* Nombre y botones */}
              <div className='flex w-full flex-col items-start gap-4 sm:w-auto sm:items-start'>
                <h2 className='text-left font-darker-grotesque text-[18px] font-bold leading-normal text-[#072356] sm:text-left sm:text-[32px] md:text-[40px]'>
                  {`${userData?.firstName || ''} ${userData?.lastName || ''}`.trim() ||
                    'Usuario'}
                </h2>
                <div className='flex w-full gap-4 sm:w-auto sm:flex-row'>
                  {!isEditing && (
                    <button
                      type='button'
                      onClick={handleEditToggle}
                      disabled={isSaving}
                      className='flex h-[28px] w-[88px] shrink-0 items-center justify-center gap-[10px] rounded-md bg-[#082965] px-4 py-[14px] text-[12px] font-medium text-white hover:bg-opacity-90 disabled:bg-opacity-60 sm:h-[50px] sm:w-[144px] sm:px-[47px] sm:text-[20px]'
                    >
                      <img
                        src='/edit-2.svg'
                        alt='Editar'
                        className='h-[15px] w-[15px]'
                      />
                      Editar
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Formulario/Información */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='w-full space-y-4 md:space-y-6'
            >
              <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                <FormInput
                  name='firstName'
                  label='Nombres*'
                  placeholder='Ingresa tu nombre'
                />
                <FormInput
                  name='lastName'
                  label='Apellidos*'
                  placeholder='Ingresa tu apellido'
                />
              </div>

              <FormInput
                name='email'
                label='Correo electrónico*'
                type='email'
                placeholder='ejemplo@correo.com'
                fullWidth={true}
              />

              <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                <FormInput
                  name='username'
                  label='Nombre de usuario*'
                  placeholder='Ingresa tu nombre de usuario'
                />

                {/* Campo de país con Controller */}
                <div>
                  <label className='mb-2 block text-sm font-medium text-gray-700'>
                    País*
                  </label>
                  <div className='relative'>
                    {isEditing ? (
                      <Controller
                        name='country'
                        control={control}
                        render={({ field }) => (
                          <div className='flex items-center gap-x-3'>
                            {flagSrc && (
                              <Image
                                alt='Bandera del país'
                                className='h-8 w-12 flex-shrink-0 rounded-sm object-contain'
                                src={flagSrc}
                                width={48}
                                height={32}
                                onError={(e) => {
                                  ;(
                                    e.target as HTMLImageElement
                                  ).style.display = 'none'
                                }}
                              />
                            )}
                            <CountriesDropdown
                              countries={field.value || []}
                              onChange={field.onChange}
                              disabled={isSaving}
                            />
                          </div>
                        )}
                      />
                    ) : (
                      <div className='flex items-center gap-x-3'>
                        <input
                          type='text'
                          value={displayCountry}
                          readOnly
                          className='w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-900 focus:border-gray-300 focus:outline-none focus:ring-0'
                        />
                        {flagSrc ? (
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
                        )}
                      </div>
                    )}
                  </div>
                  {formErrors.country && (
                    <p className='mt-1 text-sm text-red-500'>
                      {formErrors.country?.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Botones de acción - solo en modo edición */}
              {isEditing && (
                <div className='w-full pt-4 text-center md:pt-6'>
                  <div className='flex flex-col gap-4 sm:flex-row sm:justify-center'>
                    <button
                      type='button'
                      onClick={handleEditToggle}
                      disabled={isSaving}
                      className='w-[30%] rounded-md bg-gray-500 px-4 py-2 font-inter text-base font-semibold text-white shadow-md transition-all hover:bg-gray-600 disabled:bg-opacity-60 sm:px-8 md:py-3 md:text-lg'
                    >
                      Cancelar
                    </button>
                    <button
                      type='submit'
                      disabled={isSaving}
                      className='w-full rounded-md bg-[#082965] px-4 py-2 font-inter text-base font-semibold text-white shadow-md transition-all hover:bg-opacity-90 hover:shadow-lg md:px-12 md:py-3 md:text-lg'
                    >
                      {isSaving ? 'Guardando...' : 'Guardar cambios'}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {isImageModalOpen && (
        <ProfileImageUploadModal
          isOpen={isImageModalOpen}
          onClose={() => setIsImageModalOpen(false)}
          currentImageUrl={userData?.profilePictureUrl}
          onUploadComplete={handleImageUploadCompleted}
          currentUserData={userData}
        />
      )}
    </>
  )
}
