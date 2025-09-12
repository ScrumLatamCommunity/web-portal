import { LogoScrumlatam } from '@/components/Logo'
import { useRegister } from '@/app/context/RegisterContext'
import { useRouter } from 'next/navigation'
import { z } from 'zod'
import { registerSchema } from '../schema/userSchema'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { REGISTER_URL } from '../constants/constant'

interface UserRegistrationFormData {
  firstName: string
  lastName: string
  username: string
  email: string
  password: string
  confirmPassword: string
  country: string[]
  membership: string
}

export function RegisterForm() {
  const { setRegisterUser } = useRegister()
  const [selectedCountry, setSelectedCountry] = useState<string>('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)

    const form = event.currentTarget
    const formData = new FormData(form)

    const userData: UserRegistrationFormData = {
      firstName: formData.get('firstName')?.toString() || '',
      lastName: formData.get('lastName')?.toString() || '',
      username: formData.get('username')?.toString() || '',
      email: formData.get('email')?.toString() || '',
      password: formData.get('password')?.toString() || '',
      confirmPassword: formData.get('confirmPassword')?.toString() || '',
      country: selectedCountry ? [selectedCountry] : [],
      membership: 'Free'
    }

    try {
      // Validar con Zod
      registerSchema.parse(userData)

      const { confirmPassword, ...userDataToSend } = userData

      const response = await fetch(`${REGISTER_URL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userDataToSend)
      })

      const data = await response.json()
      console.log(data)

      if (response.ok) {
        setRegisterUser(data)
        toast.success('¡Registro exitoso! Bienvenido a la comunidad')
        router.push('/')
      } else {
        toast.error(data.message || 'Error en el registro')
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMessages = error.issues.map((err) => err.message).join(', ')
        toast.error(`Error de validación: ${errorMessages}`)
      } else if (error instanceof Error) {
        toast.error(error.message)
      } else {
        toast.error('Error en el registro')
      }
    } finally {
      setIsLoading(false)
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  return (
    <div className='flex w-full flex-col items-center justify-center p-4'>
      {/* Header */}
      <div className='mb-4 text-center'>
        <div className='mb-2 flex justify-center'>
          <LogoScrumlatam />
        </div>
        <p className='mb-1 text-[16px] font-semibold text-[#072356] md:text-[26px]'>
          Registrarte a nuestra comunidad
        </p>
        <p className='text-[10px] text-gray-600'>
          Todos los campos con <span className='text-orange-500'>*</span> son
          obligatorios
        </p>
      </div>

      <div className='w-full max-w-md'>
        <form className='space-y-3' onSubmit={handleSubmit}>
          {/* Nombres */}
          <div>
            <label className='mb-1 block text-xs font-medium text-gray-700'>
              Nombres<span className='text-orange-500'>*</span>
            </label>
            <input
              className='w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm placeholder:text-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-500'
              name='firstName'
              placeholder='Ej: Diego Ronald'
              type='text'
              required
              disabled={isLoading}
            />
          </div>

          {/* Apellidos */}
          <div>
            <label className='mb-1 block text-xs font-medium text-gray-700'>
              Apellidos<span className='text-orange-500'>*</span>
            </label>
            <input
              className='w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm placeholder:text-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-500'
              name='lastName'
              placeholder='Ej: Perez Olarte'
              type='text'
              required
              disabled={isLoading}
            />
          </div>

          {/* Correo electrónico */}
          <div>
            <label className='mb-1 block text-xs font-medium text-gray-700'>
              Correo electrónico<span className='text-orange-500'>*</span>
            </label>
            <input
              className='w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm placeholder:text-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-500'
              name='email'
              placeholder='Ej: tu correo@gmail.com'
              type='email'
              required
              disabled={isLoading}
            />
          </div>

          {/* Nombre de usuario */}
          <div>
            <label className='mb-1 block text-xs font-medium text-gray-700'>
              Nombre de usuario<span className='text-orange-500'>*</span>
            </label>
            <input
              className='w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm placeholder:text-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-500'
              name='username'
              placeholder='Ej: diegoperez'
              type='text'
              required
              disabled={isLoading}
            />
          </div>

          {/* País */}
          <div>
            <label className='mb-1 block text-xs font-medium text-gray-700'>
              País<span className='text-orange-500'>*</span>
            </label>
            <select
              className='w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-500'
              name='country'
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              required
              disabled={isLoading}
            >
              <option value=''>Seleccionar país</option>
              <option value='Colombia'>Colombia</option>
              <option value='Argentina'>Argentina</option>
              <option value='México'>México</option>
              <option value='Perú'>Perú</option>
              <option value='Chile'>Chile</option>
              <option value='Ecuador'>Ecuador</option>
              <option value='Venezuela'>Venezuela</option>
              <option value='Uruguay'>Uruguay</option>
              <option value='Paraguay'>Paraguay</option>
              <option value='Bolivia'>Bolivia</option>
            </select>
          </div>

          {/* Contraseña */}
          <div>
            <label className='mb-1 block text-xs font-medium text-gray-700'>
              Contraseña<span className='text-orange-500'>*</span>
            </label>
            <div className='relative'>
              <input
                className='w-full rounded-md border border-gray-300 px-3 py-1.5 pr-10 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-500'
                name='password'
                type={showPassword ? 'text' : 'password'}
                required
                disabled={isLoading}
                minLength={6}
              />
              <button
                type='button'
                className='absolute inset-y-0 right-0 flex items-center pr-3'
                onClick={togglePasswordVisibility}
                disabled={isLoading}
              >
                {showPassword ? (
                  <svg
                    className='h-4 w-4 text-gray-400'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21'
                    />
                  </svg>
                ) : (
                  <svg
                    className='h-4 w-4 text-gray-400'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Confirmar contraseña */}
          <div>
            <label className='mb-1 block text-xs font-medium text-gray-700'>
              Confirmar contraseña <span className='text-orange-500'>*</span>
            </label>
            <div className='relative'>
              <input
                className='w-full rounded-md border border-gray-300 px-3 py-1.5 pr-10 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-500'
                name='confirmPassword'
                type={showConfirmPassword ? 'text' : 'password'}
                required
                disabled={isLoading}
                minLength={6}
              />
              <button
                type='button'
                className='absolute inset-y-0 right-0 flex items-center pr-3'
                onClick={toggleConfirmPasswordVisibility}
                disabled={isLoading}
              >
                {showConfirmPassword ? (
                  <svg
                    className='h-4 w-4 text-gray-400'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21'
                    />
                  </svg>
                ) : (
                  <svg
                    className='h-4 w-4 text-gray-400'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Botón de registro */}
          <button
            className='w-full rounded-md bg-[#072356] px-4 py-2 text-sm font-medium text-white transition duration-200 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
            type='submit'
            disabled={isLoading}
          >
            {isLoading ? 'Registrando...' : 'Registrarse'}
          </button>

          {/* Link de inicio de sesión */}
          <div className='text-center'>
            <p className='flex flex-col text-xs text-gray-600'>
              ¿Ya tienes una cuenta?{' '}
              <button
                type='button'
                className='font-medium text-blue-600 hover:text-blue-500'
                onClick={() => router.push('/login')}
                disabled={isLoading}
              >
                Iniciar sesión
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
