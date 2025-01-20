'use client'

import React, { useState, useMemo } from 'react'
import { Database } from '../interfaces/databaseInterface'
import DatabaseCards from './databaseCards'
import FolderPlusIcon from '@/assets/FolderPlusIcon'
import PaperclipIcon from '@/assets/PaperclipIcon'
import FileTextIcon from '@/assets/FileTextIcon'
import ChevronDownIcon from '@/assets/ChevronDownIcon'

export default function DatabaseFeature({
  databases,
}: {
  databases: Array<Database>
}) {
  const [filter, setFilter] = useState('Todo')
  const [sortOrder, setSortOrder] = useState<'recent' | 'oldest'>('recent')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isCategoriesMenuOpen, setIsCategoriesMenuOpen] = useState(false)

  // Obtener categorías únicas de los datos
  const categories = useMemo(() => {
    return Array.from(new Set(databases.map((db) => db.category)))
  }, [databases])

  const handleFilterChange = (newFilter: string) => {
    console.log('Changing filter to:', newFilter)
    setFilter(newFilter)
  }

  const filteredDatabases = useMemo(() => {
    return databases.filter((database) => {
      if (filter === 'Todo') return true
      return database.category === filter
    })
  }, [filter, databases])

  const sortedDatabases = useMemo(() => {
    return [...filteredDatabases].sort((a, b) => {
      const dateA = new Date(a.date)
      const dateB = new Date(b.date)
      return sortOrder === 'recent'
        ? dateB.getTime() - dateA.getTime()
        : dateA.getTime() - dateB.getTime()
    })
  }, [filteredDatabases, sortOrder])

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev)
  }

  const handleSortChange = (value: 'recent' | 'oldest') => {
    setSortOrder(value)
    setIsDropdownOpen(false)
  }

  if (databases.length === 0) {
    return (
      <section className='flex min-h-[300px] items-center justify-center bg-[#FFEAE6] py-12 md:mt-12 md:max-w-[1980px]'>
        <p className='text-gray-500'>No se encontraron datos.</p>
      </section>
    )
  }

  return (
    <section className='flex flex-col bg-[#F5F5F5] md:mt-8 md:pb-1'>
      {/* Menú lateral móvil */}
      <div className='w-full bg-[#FCFCFC] shadow-md md:hidden'>
        <div className='flex items-center justify-around py-4'>
          <button
            className={`flex items-center gap-2 rounded-full px-4 py-2 ${
              filter === 'Todo' ? 'bg-[#FFEAE6]' : ''
            }`}
            onClick={() => handleFilterChange('Todo')}
          >
            <PaperclipIcon className='text-[#FE2E00]' />
            <span className='font-darker-grotesque text-[16px] text-[#082965]'>
              Todo
            </span>
          </button>

          <button
            className={`flex items-center gap-2 rounded-full px-4 py-2 ${
              filter === 'Categorías' ? 'bg-[#FFEAE6]' : ''
            }`}
            onClick={() => handleFilterChange('Categorías')}
          >
            <FileTextIcon className='text-[#FE2E00]' />
            <span className='font-darker-grotesque text-[16px] text-[#082965]'>
              Categorías
            </span>
          </button>

          <button
            className={`flex items-center gap-2 rounded-full px-4 py-2 ${
              filter === 'Temas' ? 'bg-[#FFEAE6]' : ''
            }`}
            onClick={() => handleFilterChange('Temas')}
          >
            <FolderPlusIcon className='text-[#FE2E00]' />
            <span className='font-darker-grotesque text-[16px] text-[#082965]'>
              Temas
            </span>
          </button>
        </div>
      </div>

      {/* Contenedor principal */}
      <div
        className='relative flex h-full w-full md:max-w-[1980px] md:flex-row'
        style={{ borderTop: '2px solid #082965' }}
      >
        {/* Barra lateral (pantallas grandes) */}
        <div
          className='left-0 top-0 z-[20] hidden w-[400px] flex-col items-center bg-gray-100 py-6 pl-4 shadow-md md:flex'
          style={{ borderRight: '2px solid #082965' }}
        >
          <button
            className={`relative flex w-full items-center gap-6 px-4 py-2 pl-10 text-left ${
              filter === 'Todo' ? 'bg-[#E6EAF0]' : ''
            }`}
            onClick={() => handleFilterChange('Todo')}
          >
            {filter === 'Todo' && (
              <div
                aria-hidden='true'
                className='absolute left-0 top-0 h-full w-2 bg-[#FD3600]'
              />
            )}
            <PaperclipIcon className='text-[#FE2E00]' />
            <span className='font-darker-grotesque text-[30px] text-[#082965]'>
              Todo
            </span>
          </button>

          {/* Botón para Categorías con submenú */}
          <div className='w-full'>
            <button
              className={`relative flex w-full items-center gap-6 px-4 py-2 pl-10 text-left ${
                categories.includes(filter) ? 'bg-[#E6EAF0]' : ''
              }`}
              onClick={() => setIsCategoriesMenuOpen((prev) => !prev)}
            >
              {categories.includes(filter) && (
                <div
                  aria-hidden='true'
                  className='absolute left-0 top-0 h-full w-2 bg-[#FD3600]'
                />
              )}

              <FileTextIcon className='text-[#FE2E00]' />
              <span className='font-darker-grotesque text-[30px] text-[#082965]'>
                Categorías
              </span>
              <ChevronDownIcon
                className={`ml-auto transition-transform ${
                  isCategoriesMenuOpen ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </button>
            {isCategoriesMenuOpen && (
              <div className='relative ml-10 mt-2 flex flex-col'>
                {/* Línea vertical principal */}
                <div className='absolute left-[10px] top-0 h-full w-[1px] bg-[#082965]'></div>

                {categories.map((category, index) => (
                  <button
                    key={category}
                    className={`relative flex w-full items-center gap-4 px-4 py-2 pl-14 text-left ${
                      filter === category ? 'text-[#FE2E00]' : 'text-[#082965]'
                    }`}
                    onClick={() => handleFilterChange(category)}
                  >
                    {/* Línea de conexión horizontal */}
                    <div
                      className={`absolute left-[10px] top-1/2 h-[1px] w-[40px] bg-[#082965]`}
                    ></div>
                    {/* Línea de conexión vertical */}
                    <div
                      className={`absolute left-[10px] h-full w-[1px] bg-[#082965] ${
                        index === categories.length - 1 ? 'h-[50%]' : 'h-full'
                      }`}
                    ></div>
                    <span className='font-darker-grotesque text-[16px]'>
                      {category}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Contenedor de las tarjetas */}
        <div className='w-full'>
          {/* Encabezado */}
          <div className='flex items-center justify-between bg-[#FFEAE6] p-4 md:mx-6 md:mt-4'>
            <h1 className='font-darker-grotesque text-[22px] font-semibold text-[#082965] md:text-[36px]'>
              {filteredDatabases.length} documentos
            </h1>
            <div className='relative'>
              <button
                className='flex items-center gap-2 font-roboto text-[20px] text-[#082965] focus:outline-none'
                onClick={toggleDropdown}
              >
                {sortOrder === 'recent' ? 'Más recientes' : 'Más antiguos'}
                <ChevronDownIcon className='h-5 w-5' />
              </button>
              {isDropdownOpen && (
                <div className='absolute right-0 z-50 mt-2 w-48 rounded-md bg-white shadow-md'>
                  <button
                    className='block w-full px-4 py-2 text-left text-[#082965] hover:bg-[#FFEAE6]'
                    onClick={() => handleSortChange('recent')}
                  >
                    Más recientes
                  </button>
                  <button
                    className='block w-full px-4 py-2 text-left text-[#082965] hover:bg-[#FFEAE6]'
                    onClick={() => handleSortChange('oldest')}
                  >
                    Más antiguos
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className='flex flex-wrap md:grid-cols-2'>
            {sortedDatabases.map((database) => (
              <DatabaseCards key={database.id} {...database} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
