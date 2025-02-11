import { useState } from 'react'

interface OffertDropdownProps {
  value: string
  onChange: (value: string) => void
}

export default function OffertDropdown({
  value,
  onChange
}: OffertDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const options = [
    'Curso',
    'Workshop',
    'Certificaciones',
    'Eventos Especiales',
    'Colaboraciones y Alianzas'
  ]

  return (
    <div className='relative z-10 w-72'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='text-black flex w-full items-center justify-between rounded-[10px] bg-[#D9D9D940] px-4 py-2'
      >
        {value || 'Selecciona una categoría'}
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
