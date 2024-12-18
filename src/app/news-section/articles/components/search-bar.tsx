import React, { useState, useEffect, useRef } from 'react'
import { FiSearch } from 'react-icons/fi'
import { darkerGrotesque } from '@/fonts'
import { articles } from '@/data/data'

interface Article {
  id: number
  title: string
  date: string
  description: string
  img: string
}

export default function SearchBar() {
  const [query, setQuery] = useState<string>('')
  const [filteredNews, setFilteredNews] = useState<Article[]>([])
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  const handleSearch = () => {
    const results = articles.filter((articlesItem) =>
      articlesItem.title.toLowerCase().includes(query.toLowerCase()),
    )
    setFilteredNews(results)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setFilteredNews([])
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const highlightMatch = (text: string, query: string): string => {
    if (!query) return text
    const regex = new RegExp(`(${query})`, 'gi')
    return text.replace(regex, '<strong>$1</strong>')
  }

  return (
    <div
      className={`relative flex w-full flex-col items-center ${darkerGrotesque.variable}`}
    >
      <div className='relative z-20 w-full rounded-[15px] bg-white shadow-[0px_8px_15px_rgba(0,0,0,0.1)] md:max-w-[1800px]'>
        <input
          type='text'
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            handleSearch()
          }}
          placeholder='Busca un artículo...'
          className='w-full rounded-lg border border-white p-4 py-2 font-darker-grotesque-600 text-[#63789E] placeholder:text-[#63789E] focus:outline-none focus:ring-2 focus:ring-[#9878c8] md:text-[22px]'
        />
        <button
          onClick={handleSearch}
          className='absolute right-3 top-1/2 -translate-y-1/2 text-[#FE2E00] hover:text-blue-500 md:scale-150 md:pr-1'
        >
          <FiSearch size={20} />
        </button>
      </div>

      {filteredNews.length > 0 && (
        <div
          ref={dropdownRef}
          className='absolute top-full z-10 w-full overflow-y-auto rounded-b-xl bg-white shadow-md md:max-w-[1800px]'
        >
          {filteredNews.map((articlesItem) => (
            <div
              key={articlesItem.id}
              className='group relative flex items-center border-gray-200 p-2 hover:bg-[#FFEAE6]'
            >
              <div className='absolute left-0 top-0 h-full w-1 bg-[#FE5833] opacity-0 group-hover:opacity-100'></div>

              <p
                className='z-10 ml-2 text-sm font-darker-grotesque-600 text-[#63789E]'
                dangerouslySetInnerHTML={{
                  __html: highlightMatch(articlesItem.title, query),
                }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
