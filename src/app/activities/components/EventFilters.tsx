// En tu archivo components/EventFilters.tsx
'use client'

import React from 'react'

interface Category {
  id: string
  title: string
}

interface EventFiltersProps {
  categories: Category[]
  selectedCategories: string[]
  onFilterChange: (categoryId: string) => void
}

export default function EventFilters({
  categories,
  selectedCategories,
  onFilterChange
}: EventFiltersProps) {
  return (
    <section className='py-6 md:py-8'>
      <div className='mx-auto max-w-full justify-start px-6 sm:px-8'>
        <div className='flex flex-col md:flex-row md:items-center md:gap-6'>
          <h3 className='mb-4 flex-shrink-0 font-darker-grotesque text-lg font-normal text-gray-700 md:mb-0 lg:text-3xl'>
            Aplicar filtros:
          </h3>

          {/* Contenedor con scroll horizontal en móvil */}
          <div className='flex flex-wrap items-center gap-4 overflow-x-auto pb-2 md:gap-6 md:pb-0'>
            {categories.map((category) => (
              <label
                key={category.id}
                htmlFor={`filter-${category.id}`}
                className='flex cursor-pointer items-center space-x-2 whitespace-nowrap'
              >
                <input
                  type='checkbox'
                  id={`filter-${category.id}`}
                  checked={selectedCategories.includes(category.id)}
                  onChange={() => onFilterChange(category.id)}
                  className='h-5 w-5 rounded border-gray-300 text-[#FE5833] focus:ring-transparent'
                />
                <span className='select-none text-base font-normal text-gray-800 lg:text-3xl'>
                  {category.title}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
