'use client'

import React from 'react'

interface Category {
  id: string
  title: string
}

interface ActivityFiltersProps {
  categories: Category[]
  selectedCategory: string | null
  onFilterChange: (categoryId: string) => void
}

export default function ActivityFilters({
  categories,
  selectedCategory,
  onFilterChange
}: ActivityFiltersProps) {
  return (
    <section className='container mx-auto py-6 md:py-8'>
      <div className='flex justify-center px-4 sm:px-8'>
        <div className='flex w-full flex-col md:flex-row md:items-center md:gap-6'>
          <h3 className='mb-4 flex-shrink-0 font-darker-grotesque text-lg font-normal text-gray-700 md:mb-0 md:text-xl lg:text-[24px]'>
            Aplicar filtros:
          </h3>

          {/* Contenedor flexible en mobile y horizontal en desktop */}
          <div className='flex flex-wrap items-center gap-3 md:gap-6'>
            {categories.map((category) => (
              <label
                key={category.id}
                htmlFor={`filter-${category.id}`}
                className='flex cursor-pointer items-center space-x-2'
              >
                <input
                  type='checkbox'
                  id={`filter-${category.id}`}
                  checked={selectedCategory === category.title}
                  onChange={() => onFilterChange(category.title)}
                  className='h-4 w-4 rounded border-gray-300 text-[#FE5833] focus:ring-transparent'
                />
                <span className='select-none text-sm font-normal text-gray-800 md:text-base lg:text-[20px]'>
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
