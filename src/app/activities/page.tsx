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
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  useEffect(() => {
    fetchSponsorData(selectedCategory ? { type: selectedCategory } : undefined)
  }, [selectedCategory]) // Only depend on selectedCategory

  const fetchSponsorData = async (filters?: { type?: string }) => {
    console.log('fetchSponsorData called with filters:', filters)
    try {
      const query = new URLSearchParams()
      if (filters?.type) {
        query.append('type', filters.type)
      }

      const url = `${process.env.NEXT_PUBLIC_API_URL}activities/all?status=ACTIVE&${query.toString()}`

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`)
      }

      const data = await response.json()
      console.log('Activities data received:', data)
      setActivityData(data ?? [])
    } catch (error) {
      console.error('Error al obtener actividades:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleFilterChange = (category: string) => {
    setSelectedCategory((prev) => (prev === category ? null : category))
  }

  const handleHeroCategorySelect = (category: string) => {
    setSelectedCategory((prev) => (prev === category ? null : category))
  }
  return (
    <>
      <div className='mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8'>
        {/* 1. Componente para la nueva sección principal "Actividad Semanal" */}
        <WeeklyActivityHero
          categories={activityCategoriesData}
          onSelectCategory={handleHeroCategorySelect}
          selectedCategory={selectedCategory}
        />
        <h2 className='my-7 pl-6 text-start font-darker-grotesque text-lg font-medium text-[#082965] lg:text-5xl'>
          Próximas Actividades
        </h2>
        {/* 2. Componente para la barra de filtros con checkboxes */}
        <ActivityFilters
          categories={activityCategoriesData}
          selectedCategory={selectedCategory}
          onFilterChange={handleFilterChange}
        />

        {/* 3. Componente para la cuadrícula de "Próximos Eventos" */}
        {/* Pasamos el estado de carga para que pueda mostrar un esqueleto si es necesario */}
        <UpcomingActivitiesGrid
          activities={activityData}
          isLoading={isLoading}
        />
      </div>
    </>
  )
}
