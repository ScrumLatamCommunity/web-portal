import { useState } from 'react'

type CountriesDropdownProps = {
  value: string[]
  onChange: (value: string[]) => void
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

  const handleCountrySelect = (country: string) => {
    if (value.includes(country)) {
      onChange(value.filter((c) => c !== country))
    } else {
      onChange([...value, country])
    }
  }

  return (
    <div className='relative z-10 w-72'>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className='text-black flex w-full cursor-pointer items-center justify-between rounded-[10px] bg-[#D9D9D940] px-4 py-2'
      >
        <div className='flex flex-wrap gap-1'>
          {value.length > 0 ? (
            value.map((country) => (
              <span
                key={country}
                className='flex items-center gap-1 rounded-full bg-[#082965] px-2 py-1 text-sm text-white'
              >
                {country}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleCountrySelect(country)
                  }}
                  className='ml-1 text-white hover:text-red-300'
                >
                  ×
                </button>
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
                value.includes(option) ? 'bg-gray-200' : ''
              }`}
            >
              <div className='flex items-center gap-2'>
                <input
                  type='checkbox'
                  checked={value.includes(option)}
                  onChange={() => handleCountrySelect(option)}
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
