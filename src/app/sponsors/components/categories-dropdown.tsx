import { useState } from 'react'

type CategoriesDropdownProps = {
  value: string
  onChange: (value: string) => void
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
    'Certificaciones Profesionales'
  ]

  return (
    <div className='relative z-20 w-full'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='text-black flex w-full items-center justify-between rounded-[10px] bg-[#D9D9D940] px-4 py-2'
      >
        {value} {/* Usamos el valor controlado desde el padre */}
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
