'use client'
import { useState } from 'react'
import { NextPage } from 'next'
import Select, { SingleValue, StylesConfig } from 'react-select'
import countryList from 'react-select-country-list'

interface FormData {
  firstName: string
  lastName: string
  password: string
  confirmPassword: string
  username: string
  email: string
  country: string
  city: string
  gender: string
  role: string
  interest: string
  participation: string
}

const BackgroundCircles = () => {
  return (
    <div className='absolute inset-0 -z-10'>
      <div className='absolute left-10 top-40 h-32 w-32 rounded-full bg-gradient-to-r from-[#FD3600] to-[#FF5733] opacity-80 md:left-10 md:top-20'></div>
      <div className='absolute right-10 top-10 h-32 w-32 rounded-full bg-gradient-to-r from-[#FD3600] to-[#FF5733] opacity-50 md:right-60 md:top-32'></div>
      <div className='absolute left-40 top-80 h-24 w-24 rounded-full bg-gradient-to-r from-[#FD3600] to-[#FF5733] opacity-30 md:left-40 md:top-60'></div>
    </div>
  )
}

const RegisterForm: NextPage = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    username: '',
    email: '',
    country: '',
    city: '',
    gender: '',
    role: '',
    interest: '',
    participation: 'none',
  })

  const options = countryList().getData()

  const handleCountryChange = (
    selectedOption: SingleValue<{ label: string; value: string }>,
  ) => {
    setFormData({ ...formData, country: selectedOption?.label || '' })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  const customStyles: StylesConfig<{ label: string; value: string }, false> = {
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
    container: (provided) => ({
      ...provided,
      width: '100%',
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: '0',
    }),
    input: (provided) => ({
      ...provided,
      margin: '0',
    }),
    placeholder: (provided) => ({
      ...provided,
      margin: '0',
      padding: '0',
      color: '#555',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    dropdownIndicator: () => ({
      display: 'none',
    }),
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
            type='text'
            placeholder='Nombre'
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            className='mb-4 w-full border-b-2 border-[#FD3600] bg-transparent p-4 shadow-sm placeholder:text-[#555] md:mb-0 md:mr-4 md:w-1/2'
          />
          <input
            type='text'
            placeholder='Apellido'
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            className='w-full border-b-2 border-[#FD3600] bg-transparent p-4 shadow-sm placeholder:text-[#555] md:w-1/2'
          />
        </div>
        <div className='mb-6 flex flex-col justify-between md:flex-row'>
          <input
            type='text'
            placeholder='Nombre de usuario'
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            className='mb-4 w-full border-b-2 border-[#FD3600] bg-transparent p-4 shadow-sm placeholder:text-[#555] md:mb-0 md:mr-4 md:w-1/2'
          />
          <input
            type='email'
            placeholder='Correo electrónico'
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className='w-full border-b-2 border-[#FD3600] bg-transparent p-4 shadow-sm placeholder:text-[#555] md:w-1/2'
          />
        </div>
        <div className='mb-6 flex flex-col justify-between md:flex-row'>
          <input
            type='password'
            placeholder='Contraseña'
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className='mb-4 w-full border-b-2 border-[#FD3600] bg-transparent p-4 shadow-sm placeholder:text-[#555] md:mb-0 md:mr-4 md:w-1/2'
          />
          <input
            type='password'
            placeholder='Confirmar Contraseña'
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
            className='w-full border-b-2 border-[#FD3600] bg-transparent p-4 shadow-sm placeholder:text-[#555] md:w-1/2'
          />
        </div>
        <div className='mb-6 flex flex-col justify-between md:flex-row'>
          <div className='w-full md:w-1/2'>
            <Select
              options={options}
              value={options.find(
                (option) => option.label === formData.country,
              )}
              onChange={handleCountryChange}
              placeholder='País'
              classNamePrefix='react-select'
              styles={customStyles}
            />
          </div>
        </div>
        <button
          type='submit'
          className='rounded bg-[#FD3600] px-4 py-2 text-white'
        >
          Crear Usuario
        </button>
      </form>
    </div>
  )
}

export default RegisterForm
