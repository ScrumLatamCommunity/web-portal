// En un nuevo archivo, por ej: components/EventCardSkeleton.tsx
'use client'

export default function EventCardSkeleton() {
  return (
    <div className='mx-auto flex w-full max-w-4xl animate-pulse flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg md:flex-row'>
      {/* Columna Izquierda: Imagen y Fecha */}
      <div className='relative flex-shrink-0 bg-gray-200 md:w-1/3'>
        <div className='h-48 w-full md:h-full'></div>{' '}
        {/* Placeholder para la imagen */}
      </div>

      {/* Columna Derecha: Información y Acción */}
      <div className='flex w-full flex-col justify-between p-6 md:w-2/3'>
        <div>
          <div className='mb-4 flex items-start justify-between'>
            <div className='h-4 w-1/4 rounded bg-gray-300'></div>{' '}
            {/* Placeholder para tipo */}
            <div className='h-8 w-1/3 rounded bg-gray-300'></div>{' '}
            {/* Placeholder para logo */}
          </div>
          <div className='mb-3 h-8 w-3/4 rounded bg-gray-400'></div>{' '}
          {/* Placeholder para título */}
          <div className='mb-4 h-5 w-1/2 rounded bg-gray-300'></div>{' '}
          {/* Placeholder para facilitador */}
          <div className='space-y-2'>
            <div className='h-4 w-full rounded bg-gray-200'></div>{' '}
            {/* Placeholder para descripción */}
            <div className='h-4 w-5/6 rounded bg-gray-200'></div>
          </div>
        </div>

        <div className='mt-6 flex flex-col items-center justify-between border-t border-gray-200 pt-4 sm:flex-row'>
          <div className='mb-4 flex w-full items-center gap-4 sm:mb-0 sm:w-auto'>
            <div className='h-5 w-full rounded bg-gray-300'></div>{' '}
            {/* Placeholder para fecha y hora */}
          </div>
          <div className='h-12 w-full rounded-full bg-gray-300 sm:w-40'></div>{' '}
          {/* Placeholder para botón */}
        </div>
      </div>
    </div>
  )
}
