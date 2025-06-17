// En tu archivo components/ActivityTypeCard.tsx
'use client'

import Image from 'next/image'

interface Category {
  id: string
  title: string
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
  return (
    <div
      onClick={onClick}
      // --- CORRECCIÓN PRINCIPAL AQUÍ ---
      // Se añade el prefijo `md:` al hover para que solo se aplique en pantallas medianas y más grandes.
      // En móvil, la tarjeta ya no se escalará.
      className={`w-50 group relative h-48 min-w-[100px] max-w-[300px] transform cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-all duration-300 ${isSelected ? 'scale-110 ring-4 ring-white/80 ring-offset-2' : 'md:hover:scale-105'}`}
    >
      {/* Capa 1: Imagen de Fondo */}
      <Image
        src={category.image}
        alt={category.title}
        fill
        // El efecto de zoom en la imagen también se hace solo para desktop
        className='object-cover transition-transform duration-300 md:group-hover:scale-110'
      />

      {/* Capa 2: Overlay Azul */}
      <div className='absolute inset-0 z-10 bg-gradient-to-t from-[#082965] via-[#082965]/70 to-transparent opacity-90'></div>

      {/* Capa 3: Texto */}
      <div className='absolute inset-x-0 bottom-0 z-20 p-4 text-center'>
        <h4 className='font-darker-grotesque text-lg font-bold text-white sm:text-xl lg:text-2xl'>
          {category.title}
        </h4>
      </div>
    </div>
  )
}
