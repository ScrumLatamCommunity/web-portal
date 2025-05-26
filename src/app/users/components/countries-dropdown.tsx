import { useState } from 'react'

type CountriesDropdownProps = {
  countries: string[]
  onChange: (countries: string[]) => void
}

export default function CountriesDropdown({
  countries,
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

  const handleCountrySelect = (country: string) => {
    onChange([country])
    setIsOpen(false)
  }

  return (
    <div className='relative z-10 w-72'>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className='text-black flex w-full cursor-pointer items-center justify-between rounded-[10px] bg-[#D9D9D940] px-4 py-2'
      >
        <div className='flex flex-wrap gap-1'>
          {countries.length > 0 ? (
            countries.map((countries) => (
              <span
                key={countries}
                className='text-black flex items-center gap-1 rounded-full px-2 py-1 text-sm'
              >
                {countries}
              </span>
            ))
          ) : (
            <span className='text-gray-500'>Seleccionar países</span>
          )}
        </div>
        <span>{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && (
        <ul className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white shadow-md'>
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleCountrySelect(option)}
              className={`cursor-pointer p-2 hover:bg-gray-300 ${
                countries.includes(option) ? 'bg-gray-200' : ''
              }`}
            >
              <div className='flex items-center gap-2'>
                <input
                  type='button'
                  checked={countries.includes(option)}
                  onChange={() => {
                    handleCountrySelect(option)
                  }}
                  className='h-4 w-4'
                />
                {option}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
