'use client'
import { NextPage } from 'next'
import { useMemo, useState } from 'react'
import Select, { SingleValue } from 'react-select'
import countryList from 'react-select-country-list'
import MembershipModal from './components/MembershipModal'
import { BackgroundCircles } from './components/BackgroundCircles'
import { useRegisterForm } from './hooks/useRegisterForm'
import { REGISTER_URL } from './constants/constant'

const RegisterForm: NextPage = () => {
  const {
    selectedCountry,
    setSelectedCountry,
    selectedMembership,
    setSelectedMembership,
    handleSubmit: onSubmit,
  } = useRegisterForm(REGISTER_URL)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const options = useMemo(() => countryList().getData(), [])

  const handleCountryChange = (
    selectedOption: SingleValue<{ label: string; value: string }>,
  ) => {
    setSelectedCountry(selectedOption?.label || '')
  }

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
            <Select
              classNamePrefix='react-select'
              options={options}
              styles={{
                container: (provided) => ({
                  ...provided,
                  width: '100%',
                }),
                control: (provided) => ({
                  ...provided,
                  border: 'none',
                  borderBottom: '2px solid #FD3600',
                  boxShadow: 'none',
                  borderRadius: '0',
                  padding: '16px 0 16px 15px',
                  backgroundColor: 'transparent',
                  '&:hover': {
                    borderBottom: '2px solid #FD3600',
                  },
                }),
                dropdownIndicator: () => ({
                  display: 'none',
                }),
                indicatorSeparator: () => ({
                  display: 'none',
                }),
                valueContainer: (provided) => ({
                  ...provided,
                  padding: '0',
                }),
              }}
              onChange={handleCountryChange}
              placeholder='País'
              value={options.find((option) => option.label === selectedCountry)}
            />
          </div>
          <input
            className='w-full border-b-2 border-[#FD3600] bg-transparent p-4 shadow-sm placeholder:text-[#555] md:ml-4 md:w-1/2'
            onClick={() => setIsModalOpen(true)}
            placeholder='Seleccionar membresía'
            readOnly
            type='text'
            value={selectedMembership}
          />
        </div>
        <button
          className='rounded bg-[#FD3600] px-4 py-2 text-white'
          type='submit'
        >
          Crear Usuario
        </button>
      </form>
      <MembershipModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelect={(membership) => setSelectedMembership(membership)}
      />
    </div>
  )
}

export default RegisterForm
