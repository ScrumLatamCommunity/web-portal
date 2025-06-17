'use client'

import { useState, useEffect } from 'react'
import WeeklyActivityHero from './components/WeeklyActivityHero'
import EventFilters from './components/EventFilters'
import UpcomingEventsGrid from './components/UpcomingEventsGrid'
import JoinCommunity from '@/app/community/components/joinSection'

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
    setIsLoading(false) // Finaliza la carga
  }, []) // El array vacío asegura que esto solo se ejecute una vez al montar

  const handleFilterChange = (category: string) => {
    setSelectedCategories(
      (prev) =>
        prev.includes(category)
          ? prev.filter((c) => c !== category) // Si ya está, lo quita
          : [...prev, category] // Si no está, lo añade
    )
  }

  const handleHeroCategorySelect = (category: string) => {
    // Si se hace clic en la misma categoría que ya es el único filtro,
    // se limpia la selección para mostrar todos los eventos.
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
      {/* 1. Componente para la nueva sección principal "Actividad Semanal" */}
      <WeeklyActivityHero
        categories={activityCategoriesData}
        onSelectCategory={handleHeroCategorySelect}
        selectedCategory={
          selectedCategories.length === 1 ? selectedCategories[0] : null
        }
      />

      {/* 2. Componente para la barra de filtros con checkboxes */}
      <EventFilters
        categories={activityCategoriesData}
        selectedCategories={selectedCategories}
        onFilterChange={handleFilterChange}
      />

      {/* 3. Componente para la cuadrícula de "Próximos Eventos" */}
      {/* Pasamos el estado de carga para que pueda mostrar un esqueleto si es necesario */}
      <UpcomingEventsGrid events={filteredEvents} isLoading={isLoading} />
    </>
  )
}
