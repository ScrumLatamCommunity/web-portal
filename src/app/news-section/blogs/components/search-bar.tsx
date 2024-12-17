'use client'
import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { darkerGrotesque } from '@/fonts'
import { news } from '@/data/data'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [filteredNews, setFilteredNews] = useState([])

  const handleSearch = () => {
    const results = news.filter((newsItem) =>
      newsItem.title.toLowerCase().includes(query.toLowerCase()),
    )
    setFilteredNews(results)
  }

  return (
    <div
      className={`flex items-center justify-center p-3 ${darkerGrotesque.variable}`}
    >
      <div className='relative z-20 w-full rounded-[15px] bg-white shadow-[0px_8px_15px_rgba(0,0,0,0.1)] md:w-[95%]'>
        <input
          type='text'
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            handleSearch()
          }}
          placeholder='Busca un blog...'
          className='w-full rounded-lg border border-white px-4 py-2 font-darker-grotesque-600 text-[#63789E] placeholder:text-[#63789E] focus:outline-none focus:ring-2 focus:ring-blue-500 md:text-[22px]'
        />
        <button
          onClick={handleSearch}
          className='absolute right-3 top-1/2 -translate-y-1/2 text-[#FE2E00] hover:text-blue-500 md:scale-150 md:pr-1'
        >
          <FiSearch size={20} />
        </button>
      </div>
      {/* Desplegable de resultados */}
      {filteredNews.length > 0 && (
        <div className='absolute z-10 mt-52 max-h-40 w-[94%] overflow-y-hidden rounded-lg bg-white shadow-md'>
          {filteredNews.map((newsItem) => (
            <div key={newsItem.id} className='border-b border-gray-200 p-2'>
              <p className='text-sm font-darker-grotesque-600 text-[#63789E]'>
                {newsItem.title}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
