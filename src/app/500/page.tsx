export const dynamic = 'force-dynamic'

import Link from 'next/link'
import { errorsData } from '../../utils/errorsData'

const ErrorPage500: React.FC = () => {
  // console.log('Rendering ErrorPage500')
  const errorEvent = errorsData.find((error) => error.id === 2) // ID 2 para error 500

  if (!errorEvent) {
    return (
      <section className='flex h-full flex-col items-center bg-gradient-to-tr from-red-300 to-transparent px-4 pt-0 md:py-12 xl:m-auto'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold text-red-500'>Error desconocido</h1>
          <p className='text-lg text-gray-700'>
            Algo salió mal. Por favor, vuelve a la página de inicio.
          </p>
          <Link
            href='/'
            className='mt-4 inline-block text-blue-600 underline hover:text-blue-800'
          >
            Volver a la página de inicio
          </Link>
        </div>
      </section>
    )
  }

  const { image, title, description, message } = errorEvent

  return (
    <section className='flex min-h-screen flex-col items-center bg-gradient-to-tr from-red-300 to-transparent pb-0 pl-14 pr-12 pt-10 md:pt-24'>
      <div className='relative mx-auto flex max-w-screen-2xl flex-col items-center justify-center md:flex-row'>
        <div className='flex flex-col items-start justify-center md:w-1/2 md:pl-20 md:pr-0'>
          <div className='max-w-[500px] md:pr-2'>
            <h1 className='md:text-64px font-darker-grotesque text-10 font-bold text-[#082965] xl:text-19'>
              {Array.isArray(title) &&
                title.map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
            </h1>
            <p className='text-17px md:text-25px pt-2 font-karla font-normal leading-[21.6px] text-[#072356] md:leading-[23.23px] xl:text-10 xl:leading-8'>
              {description}
            </p>
            <p className='text-17px md:text-25px pt-4 font-karla font-bold leading-[21.6px] text-[#072356] md:leading-[23.23px] xl:text-10 xl:leading-8'>
              {message}
            </p>
            <div className='pb-10 pt-4 md:block md:pt-4 xl:pt-10'>
              <Link
                className='text-18px font-darker-grotesque font-semibold text-[#082965] underline hover:underline'
                href='/'
              >
                Volver a la página de inicio
              </Link>
            </div>
          </div>
        </div>
        <img
          className='aspect-[693/662] w-[100%] translate-x-0 translate-y-0 pb-0 md:mt-20 md:w-[50%] md:-translate-x-10 md:-translate-y-8'
          src={image}
          alt='Error 500'
        />
      </div>
    </section>
  )
}

export default ErrorPage500
