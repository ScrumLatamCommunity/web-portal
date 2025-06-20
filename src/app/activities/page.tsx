'use client'

import { useState, useEffect } from 'react'
import WeeklyActivityHero from './components/WeeklyActivityHero'
import EventFilters from './components/EventFilters'
import UpcomingEventsGrid from './components/UpcomingEventsGrid'

// Datos que vendrían de tu API o de archivos estáticos
import { allEventsData } from '@/data/data'
import { activityCategoriesData } from '@/data/data'
import { Event } from './interfaces/eventInterface'

export default function Activities() {
  const [events, setEvents] = useState<Event[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  useEffect(() => {
    const activeEvents = allEventsData.filter(
      (event) => event.status === 'ACTIVE'
    )
    setEvents(activeEvents)
    setIsLoading(false)
  }, [])

  const handleFilterChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [category]
    )
  }

  const handleHeroCategorySelect = (category: string) => {
    if (selectedCategories.length === 1 && selectedCategories[0] === category) {
      setSelectedCategories([])
    } else {
      setSelectedCategories([category])
    }
  }

  // Filtrar eventos basados en las categorías seleccionadas
  const filteredEvents =
    selectedCategories.length === 0
      ? events // Si no hay filtros, muestra todos los eventos activos
      : events.filter((event) => selectedCategories.includes(event.type))

  return (
    <>
      <div className='max-w-full overflow-x-hidden'>
        {/* 1. Componente para la nueva sección principal "Actividad Semanal" */}
        <WeeklyActivityHero
          categories={activityCategoriesData}
          onSelectCategory={handleHeroCategorySelect}
          selectedCategory={
            selectedCategories.length === 1 ? selectedCategories[0] : null
          }
        />
        <h2 className='my-7 pl-6 text-start font-darker-grotesque text-lg font-medium text-[#082965] lg:text-5xl'>
          Próximas Actividades
        </h2>
        {/* 2. Componente para la barra de filtros con checkboxes */}
        <EventFilters
          categories={activityCategoriesData}
          selectedCategories={selectedCategories}
          onFilterChange={handleFilterChange}
        />

        {/* 3. Componente para la cuadrícula de "Próximos Eventos" */}
        {/* Pasamos el estado de carga para que pueda mostrar un esqueleto si es necesario */}
        <UpcomingEventsGrid events={filteredEvents} isLoading={isLoading} />
      </div>
    </>
  )
}
