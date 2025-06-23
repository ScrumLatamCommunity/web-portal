'use client'

import { useState, useEffect } from 'react'
import WeeklyActivityHero from './components/WeeklyActivityHero'
import ActivityFilters from './components/ActivityFilters'
import UpcomingActivitiesGrid from './components/UpcomingActivitiesGrid'

import { activityCategoriesData } from '@/data/data'
import { Activity } from './interfaces/activityInterface'
import { useAuth } from '../context/AuthContext'

export default function Activities() {
  const { token } = useAuth()
  const [activityData, setActivityData] = useState<Activity[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const fetchSponsorData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}activities`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`)
      }

      const data = await response.json()
      setActivityData(data ?? [])
    } catch (error) {
      console.error('Error al obtener actividades:', error)
    } finally {
      setIsLoading(false)
    }
  }

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

  useEffect(() => {
    fetchSponsorData()
  }, [token])

  const filteredActivities =
    selectedCategories.length === 0
      ? activityData
      : activityData.filter((activity) =>
          selectedCategories.includes(activity.type)
        )

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
        <ActivityFilters
          categories={activityCategoriesData}
          selectedCategories={selectedCategories}
          onFilterChange={handleFilterChange}
        />

        {/* 3. Componente para la cuadrícula de "Próximos Eventos" */}
        {/* Pasamos el estado de carga para que pueda mostrar un esqueleto si es necesario */}
        <UpcomingActivitiesGrid
          activities={filteredActivities}
          isLoading={isLoading}
        />
      </div>
    </>
  )
}
