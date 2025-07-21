import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'react-feather'

type CategoriesDropdownProps = {
  value: string[]
  onChange: (value: string[]) => void
}

export default function CategoriesDropdown({
  value,
  onChange
}: CategoriesDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  const options = [
    'Metodologías Ágiles',
    'Desarrollo de Software',
    'Diseño y Experiencia de Usuario',
    'Gestión de Proyectos',
    'Liderazgo y Desarrollo Organizacional',
    'Tecnologías Emergentes',
    'Marketing Digital',
    'Certificaciones Profesionales',
    'Servicio al Cliente',
    'Asistentes Administrativos',
    'Agentes de Centro de Llamadas'
  ]

  const handleCountrySelect = (country: string) => {
    if (value.includes(country)) {
      onChange(value.filter((c) => c !== country))
    } else {
      onChange([...value, country])
    }
  }

  return (
    <div className='relative w-full'>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className='text-black flex w-full cursor-pointer items-center justify-between rounded-[10px] bg-white px-4 py-2'
      >
        <div className='flex flex-wrap gap-1'>
          {value.length > 0 ? (
            value.map((country) => (
              <span
                key={country}
                className='text-black flex items-center gap-1 rounded-md bg-[#F0F0F0] px-2 py-1 text-sm'
              >
                {country}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleCountrySelect(country)
                  }}
                  className='text-black ml-1 hover:text-red-300'
                >
                  ×
                </button>
              </span>
            ))
          ) : (
            <span className='text-gray-500'>Seleccionar países</span>
          )}
        </div>
        <span>{isOpen ? <ChevronUp /> : <ChevronDown />}</span>
      </div>
      {isOpen && (
        <ul className='absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white shadow-md'>
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
