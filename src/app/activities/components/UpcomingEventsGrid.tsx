// En tu archivo components/UpcomingEventsGrid.tsx
'use client'

import EventCard from './eventCards'
import EventCardSkeleton from './EventCardSkeleton' // Importa el nuevo componente de esqueleto

// Interfaz basada en tu modelo Prisma 'Event'
interface Event {
  id: string
  type: string
  title: string
  description: string
  date: string | Date
  time: string[]
  image: string
  facilitator?: string | null
  link: string
}

interface UpcomingEventsGridProps {
  events: Event[]
  isLoading: boolean // Añade la prop isLoading
}

export default function UpcomingEventsGrid({
  events,
  isLoading
}: UpcomingEventsGridProps) {
  return (
    <section className='py-12 md:py-16'>
      <div className='max-w-12xl mx-auto px-2 sm:px-6 lg:px-12'>
        {isLoading ? (
          // Si está cargando, muestra 3 esqueletos
          <div className='grid grid-cols-1 gap-3'>
            {[...Array(3)].map((_, index) => (
              <EventCardSkeleton key={index} />
            ))}
          </div>
        ) : events.length > 0 ? (
          // Si no está cargando y hay eventos, muestra los eventos
          <div className='grid grid-cols-1 gap-6'>
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          // Si no está cargando y no hay eventos, muestra el mensaje
          <div className='rounded-lg bg-white px-6 py-12 text-center shadow-md'>
            <p className='text-xl font-semibold text-gray-700'>
              No hay eventos próximos para los filtros seleccionados.
            </p>
            <p className='mt-2 text-gray-500'>
              Intenta cambiar tu selección o revisa más tarde.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
