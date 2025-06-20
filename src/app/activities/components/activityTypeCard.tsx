'use client'

import Image from 'next/image'

interface Category {
  id: string
  title: string
  description: string
  image: string
}

interface ActivityTypeCardProps {
  category: Category
  isSelected: boolean
  onClick: () => void
}

export default function ActivityTypeCard({
  category,
  isSelected,
  onClick
}: ActivityTypeCardProps) {
  const active = isSelected

  return (
    <div
      onClick={onClick}
      className={`group relative h-44 w-full max-w-[250px] transform cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-all duration-300 lg:h-80 lg:max-w-[420px] ${
        isSelected ? 'ring-4 ring-white/80 ring-offset-2' : ''
      }`}
    >
      {/* Imagen de fondo */}
      <Image
        src={category.image}
        alt={category.title}
        fill
        className='object-cover transition-transform duration-300 md:group-hover:scale-110'
        sizes='(max-width: 768px) 90vw, 300px'
      />

      {/* Fondo dinámico */}
      <div
        className={`absolute inset-0 z-10 transition-colors duration-300 ${
          active
            ? 'bg-[#082965]'
            : 'bg-gradient-to-t from-[#082965] via-[#082965]/70 to-transparent group-hover:bg-[#082965]'
        } opacity-90`}
      />

      {/* Contenido centrado */}
      <div
        className={`absolute inset-0 z-20 flex flex-col items-center justify-end p-4 text-center text-white transition-all duration-300 group-hover:justify-center ${active ? 'justify-center' : ''} `}
      >
        <div>
          <h4 className='font-darker-grotesque text-xl font-bold sm:text-2xl lg:text-3xl'>
            {category.title}
          </h4>

          <p
            className={`mt-2 max-h-0 overflow-hidden text-xl text-white/80 opacity-0 transition-all duration-300 ease-in-out group-hover:max-h-40 group-hover:opacity-100 ${active ? 'max-h-40 opacity-100' : ''} `}
          >
            {category.description}
          </p>
        </div>
      </div>
    </div>
  )
}
