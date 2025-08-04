'use client'

import { useAuth } from '@/app/context/AuthContext'
import ActivityCard from '../components/ActivityCard'
import { getAllActivities } from '../actions/activity.actions'
import { Activity } from '@/app/activities/interfaces/activityInterface'
import { useEffect, useState, useCallback } from 'react'
import ActivityCardSkeleton from '@/app/activities/components/ActivityCardSkeleton'
import ActivityFilters from '@/app/activities/components/ActivityFilters'
import { activityCategoriesData } from '@/data/data'

export default function ActivitiesPage() {
  const { user } = useAuth()
  const [activities, setActivities] = useState<Activity[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const fetchActivities = useCallback(
    async (filters?: { type?: string }) => {
      if (!user?.sub) return

      setLoading(true)
      setError(null)

      try {
        const { success, data, error } = await getAllActivities({
          userId: user.sub
        })

        if (!success || error) {
          setError(error || 'Error al obtener las actividades')
          console.error('Error al obtener actividades:', error)
          return
        }

        if (data && Array.isArray(data)) {
          console.log('Datos de actividades recibidos:', data)

          // Aplicar filtros si existen
          let filteredActivities = data
          if (filters?.type) {
            filteredActivities = data.filter(
              (activity) => activity.type === filters.type
            )
          }

          setActivities(filteredActivities)
        } else {
          setError('Formato de datos inválido')
        }
      } catch (err) {
        setError('Error al cargar las actividades')
        console.error('Error en loadActivities:', err)
      } finally {
        setLoading(false)
      }
    },
    [user?.sub]
  )

  useEffect(() => {
    if (user?.sub) {
      fetchActivities(selectedCategory ? { type: selectedCategory } : undefined)
    }
  }, [user?.sub, selectedCategory])

  const handleFilterChange = (category: string) => {
    setSelectedCategory((prev) => (prev === category ? null : category))
  }

  // Mostrar skeleton solo para el contenido, manteniendo los filtros visibles
  if (loading) {
    return (
      <div className='space-y-6'>
        <h1 className='mx-auto my-6 max-w-[900px] text-center text-2xl font-bold text-[#FE7354]'>
          Mis Actividades
        </h1>
        <ActivityFilters
          categories={activityCategoriesData}
          selectedCategory={selectedCategory}
          onFilterChange={handleFilterChange}
        />
        <ActivityCardSkeleton />
      </div>
    )
  }

  if (error) {
    return (
      <div className='flex min-h-screen items-center justify-center'>
        <div className='text-lg text-red-600'>Error: {error}</div>
      </div>
    )
  }

  // Si no hay actividades pero hay un filtro seleccionado, mostrar mensaje con filtros
  if (activities.length === 0 && selectedCategory) {
    return (
      <div className='space-y-6'>
        <h1 className='mx-auto my-6 max-w-[900px] text-center text-2xl font-bold text-[#FE7354]'>
          Mis Actividades
        </h1>
        <ActivityFilters
          categories={activityCategoriesData}
          selectedCategory={selectedCategory}
          onFilterChange={handleFilterChange}
        />
        <div className='flex min-h-[400px] items-center justify-center'>
          <div className='text-center'>
            <div className='mb-2 text-lg font-semibold text-[#FE7354]'>
              No hay actividades de tipo "{selectedCategory}"
            </div>
            <div className='text-sm text-gray-600'>
              Intenta con otro filtro o deselecciona el filtro actual
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Si no hay actividades y no hay filtro seleccionado, mostrar mensaje general
  if (activities.length === 0) {
    return (
      <div className='space-y-6'>
        <h1 className='mx-auto my-6 max-w-[900px] text-center text-2xl font-bold text-[#FE7354]'>
          Mis Actividades
        </h1>
        <ActivityFilters
          categories={activityCategoriesData}
          selectedCategory={selectedCategory}
          onFilterChange={handleFilterChange}
        />
        <div className='flex min-h-[400px] items-center justify-center'>
          <div className='text-center'>
            <div className='mb-2 text-lg font-semibold text-[#FE7354]'>
              No hay actividades disponibles
            </div>
            <div className='text-sm text-gray-600'>
              Aún no te has inscrito en ninguna actividad
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='container mx-auto space-y-6'>
      <h1 className='mx-auto my-6 max-w-[900px] text-center text-2xl font-bold text-[#FE7354] md:text-[32px]'>
        Mis Actividades
      </h1>
      <ActivityFilters
        categories={activityCategoriesData}
        selectedCategory={selectedCategory}
        onFilterChange={handleFilterChange}
      />
      {activities.map((activity) => {
        const userInActivity = activity.users?.find((u) => u.id === user?.sub)
        const userCountry = userInActivity?.country?.[0] || 'No especificado'

        return (
          <ActivityCard
            key={activity.id}
            activity={activity}
            country={userCountry}
          />
        )
      })}
    </div>
  )
}
