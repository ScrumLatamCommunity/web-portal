'use client'

import React, { useState } from 'react'
import { Database } from '../interfaces/databaseInterface'
import DatabaseCards from './databaseCards'
import FolderIcon from '@/assets/FolderIcon'

export default function DatabaseFeature({
  databases,
}: {
  databases: Array<Database>
}) {
  const [filter, setFilter] = useState('Todo')

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter)
    // Aquí podrías implementar una lógica de filtrado basada en `newFilter`
  }

  if (databases.length === 0) {
    return (
      <section className='flex min-h-[300px] items-center justify-center bg-[#FFEAE6] py-12 md:mt-12 md:max-w-screen-2xl'>
        <p className='text-gray-500'>No se encontraron datos.</p>
      </section>
    )
  }

  return (
    <section className='flex bg-[#F5F5F5] md:mt-8'>
      {/* Contenedor principal */}
      <div className='relative flex w-full max-w-screen-2xl'>
        {/* Barra lateral (pantallas grandes) */}
        <div className='left-0 top-0 z-[2] hidden h-full w-[200px] flex-col items-center bg-gray-100 py-6 shadow-md md:flex'>
          <button
            onClick={() => handleFilterChange('Todo')}
            className={`flex items-center gap-3 px-4 py-2 text-left ${
              filter === 'Todo' ? 'bg-[#FFEAE6]' : ''
            }`}
          >
            <FolderIcon className='text-[#FE2E00]' />
            <span className='text-[#061D48]'>Todo</span>
          </button>
          <button
            onClick={() => handleFilterChange('Categorías')}
            className={`flex items-center gap-3 px-4 py-2 text-left ${
              filter === 'Categorías' ? 'bg-[#FFEAE6]' : ''
            }`}
          >
            <FolderIcon className='text-[#FE2E00]' />
            <span className='text-[#061D48]'>Categorías</span>
          </button>
          <button
            onClick={() => handleFilterChange('Temas')}
            className={`flex items-center gap-3 px-4 py-2 text-left ${
              filter === 'Temas' ? 'bg-[#FFEAE6]' : ''
            }`}
          >
            <FolderIcon className='text-[#FE2E00]' />
            <span className='text-[#061D48]'>Temas</span>
          </button>
        </div>

        {/* Contenedor de las tarjetas */}
        <div className='w-full'>
          <div className='flex flex-wrap gap-6 md:grid-cols-2'>
            {databases.map((database) => (
              <DatabaseCards key={database.id} {...database} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
