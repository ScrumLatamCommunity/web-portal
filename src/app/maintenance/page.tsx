import Image from 'next/image'

export default function MaintenancePage() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4'>
      <div className='w-full max-w-md rounded-lg bg-white p-8 text-center shadow-lg'>
        <div className='mb-6 flex justify-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='150'
            height='150'
            viewBox='0 0 24 24'
            fill='none'
            stroke='#4F46E5'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          >
            <path d='M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z'></path>
            <path d='M10.59 15.41a2 2 0 0 1 0 2.83l-5.65 5.65a1 1 0 0 1-1.41 0L.71 21.07a1 1 0 0 1 0-1.41l5.65-5.65a2 2 0 0 1 2.83 0'></path>
          </svg>
        </div>
        <h1 className='mb-4 text-3xl font-bold text-gray-800'>
          Sitio en mantenimiento
        </h1>
        <p className='mb-6 text-gray-600'>
          Estamos realizando mejoras en nuestro sitio. Volveremos pronto con una
          mejor experiencia.
        </p>
        <p className='text-sm text-gray-500'>Gracias por su paciencia.</p>
      </div>
    </div>
  )
}
