'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { REGISTER_URL } from './constants/constant'
import { useRegisterForm } from './hooks/useRegisterForm'
import { BackgroundCircles } from './components/BackgroundCircles'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const SelectComponent = dynamic(() => import('./components/SelectComponent'), {
  ssr: false,
})

function RegisterFormComponent() {
  const searchParams = useSearchParams()
  const selectedMembershipFromQuery = searchParams.get('membership')

  const {
    selectedCountry,
    setSelectedCountry,
    selectedMembership,
    handleSubmit: onSubmit,
  } = useRegisterForm(REGISTER_URL)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    const userData: Record<string, string> = {
      firstName: formData.get('firstName')?.toString() || '',
      lastName: formData.get('lastName')?.toString() || '',
      username: formData.get('username')?.toString() || '',
      email: formData.get('email')?.toString() || '',
      password: formData.get('password')?.toString() || '',
      confirmPassword: formData.get('confirmPassword')?.toString() || '',
      country: selectedCountry,
      membership: selectedMembership,
    }

    onSubmit(userData)
  }

  return (
    <div className='relative mx-10 my-20 grid grid-cols-1 gap-10 md:grid-cols-3'>
      <BackgroundCircles />
      <div className='order-1 col-span-1 md:order-1'>
        <p className='text-4xl font-bold'>Únete a nuestra comunidad</p>
      </div>
      <form
        className='order-2 col-span-2 flex flex-col md:order-2'
        onSubmit={handleSubmit}
      >
        <div className='mb-6 flex flex-col justify-between md:flex-row'>
          <input
            className='mb-4 w-full border-b-2 border-[#FD3600] bg-transparent p-4 shadow-sm placeholder:text-[#555] md:mb-0 md:mr-4 md:w-1/2'
            name='firstName'
            placeholder='Nombre'
            type='text'
          />
          <input
            className='w-full border-b-2 border-[#FD3600] bg-transparent p-4 shadow-sm placeholder:text-[#555] md:w-1/2'
            name='lastName'
            placeholder='Apellido'
            type='text'
          />
        </div>
        <div className='mb-6 flex flex-col justify-between md:flex-row'>
          <input
            className='mb-4 w-full border-b-2 border-[#FD3600] bg-transparent p-4 shadow-sm placeholder:text-[#555] md:mb-0 md:mr-4 md:w-1/2'
            name='username'
            placeholder='Nombre de usuario'
            type='text'
          />
          <input
            className='w-full border-b-2 border-[#FD3600] bg-transparent p-4 shadow-sm placeholder:text-[#555] md:w-1/2'
            name='email'
            placeholder='Correo electrónico'
            type='email'
          />
        </div>
        <div className='mb-6 flex flex-col justify-between md:flex-row'>
          <input
            className='mb-4 w-full border-b-2 border-[#FD3600] bg-transparent p-4 shadow-sm placeholder:text-[#555] md:mb-0 md:mr-4 md:w-1/2'
            name='password'
            placeholder='Contraseña'
            type='password'
          />
          <input
            className='w-full border-b-2 border-[#FD3600] bg-transparent p-4 shadow-sm placeholder:text-[#555] md:w-1/2'
            name='confirmPassword'
            placeholder='Confirmar Contraseña'
            type='password'
          />
        </div>
        <div className='mb-6 flex flex-col justify-between md:flex-row'>
          <div className='w-full md:w-1/2'>
            <SelectComponent
              selectedCountry={selectedCountry}
              setSelectedCountry={setSelectedCountry}
            />
          </div>
          <Link
            href={{
              pathname: `/register/select`,
              query: 'modal=membership',
            }}
            style={{ display: 'contents' }}
          >
            <input
              className='w-full border-b-2 border-[#FD3600] bg-transparent p-4 shadow-sm placeholder:text-[#555] md:ml-4 md:w-1/2'
              placeholder='Seleccionar membresía'
              readOnly
              type='text'
              value={selectedMembershipFromQuery ?? ''}
            />
          </Link>
        </div>
        <button
          className='rounded bg-[#FD3600] px-4 py-2 text-white'
          type='submit'
        >
          Crear Usuario
        </button>
      </form>
    </div>
  )
}

export default function RegisterForm() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RegisterFormComponent />
    </Suspense>
  )
}
