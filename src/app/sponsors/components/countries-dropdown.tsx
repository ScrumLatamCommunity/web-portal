import { useState } from 'react'

type CountriesDropdownProps = {
  value: string
  onChange: (value: string) => void
}

export default function CountriesDropdown({
  value,
  onChange
}: CountriesDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  const options = [
    'Colombia',
    'Argentina',
    'Chile',
    'España',
    'Peru',
    'Ecuador',
    'Guatemala',
    'Panama',
    'Costa Rica',
    'Nicaragua',
    'El Salvador',
    'Honduras',
    'México',
    'Venezuela',
    'Bolivia',
    'Paraguay',
    'Brasil',
    'Canada',
    'Estados Unidos'
  ]
  return (
    <div className='relative z-10 w-72'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='text-black flex w-full items-center justify-between rounded-[10px] bg-[#D9D9D940] px-4 py-2'
      >
        {value}
        <span>{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && (
        <ul className='absolute mt-1 w-full rounded-md bg-white shadow-md'>
          {options.map((option) => (
            <li
              key={option}
              onClick={() => {
                onChange(option)
                setIsOpen(false)
              }}
              className='cursor-pointer p-2 hover:bg-gray-300'
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
