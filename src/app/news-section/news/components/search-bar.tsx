import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { darkerGrotesque } from '@/fonts'

export default function SearchBar() {
  const [query, setQuery] = useState('')

  const handleSearch = () => {
    console.log('Buscando:', query)
  }

  return (
    <div
      className={`flex items-center justify-center p-3 ${darkerGrotesque.variable}`}
    >
      <div className='relative w-full max-w-md bg-white text-[16px] font-darker-grotesque-600 text-[#63789E]'>
        <input
          type='text'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Busca una noticia...'
          className='w-full rounded-lg border border-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        <button
          onClick={handleSearch}
          className='absolute right-3 top-1/2 -translate-y-1/2 text-[#FE2E00] hover:text-blue-500'
        >
          <FiSearch size={20} />
        </button>
      </div>
    </div>
  )
}
