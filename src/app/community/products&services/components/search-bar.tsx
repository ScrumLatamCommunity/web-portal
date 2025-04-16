'use client'

import React, { useState, useRef, useEffect } from 'react'
import { FiSearch } from 'react-icons/fi'
import { darkerGrotesque } from '@/fonts'
import { SearchBarProps } from '../../interfaces/searchBarPropsInterface'

export default function SearchBar({
  setQuery,
  data,
  placeholder
}: SearchBarProps) {
  const [localQuery, setLocalQuery] = useState<string>('')
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false)
  const dropdownRef = useRef<HTMLDivElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleSearch = (query: string) => {
    setQuery(query)
    setIsDropdownVisible(query.length > 0)
  }

  const handleSelect = (query: string) => {
    setLocalQuery(query)
    setQuery(query)
    setIsDropdownVisible(false)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      inputRef.current &&
      !inputRef.current.contains(event.target as Node)
    ) {
      setIsDropdownVisible(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div
      className={`relative flex w-full flex-col items-center ${darkerGrotesque.variable}`}
    >
      <div className='relative z-20 w-[320px] rounded-[15px] bg-white shadow-[0px_8px_15px_rgba(0,0,0,0.1)] md:w-[1000px] md:max-w-[1800px]'>
        <input
          className='w-full rounded-lg border border-white p-4 py-2 font-darker-grotesque-600 text-[#63789E] placeholder:text-[#63789E] focus:outline-none focus:ring-2 focus:ring-[#FE5833] md:text-[22px]'
          onChange={(e) => {
            const query = e.target.value
            setLocalQuery(query)
            handleSearch(query)
          }}
          onFocus={() => setIsDropdownVisible(localQuery.length > 0)}
          placeholder={placeholder}
          ref={inputRef}
          type='text'
          value={localQuery}
        />
        <button className='absolute right-3 top-1/2 -translate-y-1/2 text-[#FE2E00] hover:text-blue-500 md:scale-150 md:pr-1'>
          <FiSearch size={20} />
        </button>
        {isDropdownVisible && (
          <div
            ref={dropdownRef}
            className='absolute top-full z-10 w-full overflow-y-auto rounded-b-xl bg-white shadow-md'
          >
            {(data || [])
              .filter((item) =>
                item.companyName
                  .toLowerCase()
                  .includes(localQuery.toLowerCase())
              )
              .map((filteredItem) => (
                <div
                  className='group relative flex items-center border-gray-200 p-2 hover:bg-[#FFEAE6]'
                  key={filteredItem.id}
                  onClick={() => handleSelect(filteredItem.companyName)}
                >
                  <div className='absolute left-0 top-0 h-full w-1 bg-[#FE5833] opacity-0 group-hover:opacity-100'></div>
                  <p className='z-10 ml-2 text-sm font-darker-grotesque-600 text-[#63789E]'>
                    {filteredItem.companyName}
                  </p>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  )
}
