'use client'

import { useAuth } from '@/app/context/AuthContext'
import ActivityCard from '../components/ActivityCard'
import { getAllActivities } from '../actions/activity.actions'
import { Activity } from '@/app/activities/interfaces/activityInterface'
import { useEffect, useState, useCallback } from 'react'
import ActivityCardSkeleton from '@/app/activities/components/ActivityCardSkeleton'
import ActivityFilters from '@/app/activities/components/ActivityFilters'
import { activityCategoriesData } from '@/data/data'

// Datos fake para desarrollo
const fakeActivities: Activity[] = [
  {
    id: '1',
    title: 'Scrum Master Workshop',
    description:
      'Un taller intensivo sobre las mejores prácticas de Scrum Master. Aprenderás técnicas avanzadas de facilitación, gestión de equipos ágiles y resolución de conflictos.',
    facilitator: 'María González',
    date: '2025-01-25T10:00:00Z',
    time: ['10:00', '12:00'],
    type: 'workshop',
    status: 'active',
    link: 'https://zoom.us/j/123456789',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Comunidad%2Fimage_banner_sponsors.png?alt=media&token=6f18d393-5502-4b71-8f1c-f7adf65816fa',
    users: [
      {
        id: '1',
        firstName: 'Juan',
        lastName: 'Pérez',
        username: 'juan.perez',
        email: 'juan@example.com',
        country: ['Colombia'],
        profilePictureUrl: '',
        profilePictureCloudinaryId: null,
        membership: 'FREE',
        onboarding: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        role: 'USER'
      }
    ]
  },
  {
    id: '2',
    title: 'Product Owner Fundamentals',
    description:
      'Conceptos fundamentales del rol de Product Owner en equipos ágiles. Gestión de backlog, priorización y comunicación con stakeholders.',
    facilitator: 'Carlos Rodríguez',
    date: '2025-01-28T15:30:00Z',
    time: ['15:30', '17:00'],
    type: 'webinar',
    status: 'active',
    link: 'https://zoom.us/j/987654321',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Comunidad%2Fimage_banner_sponsors.png?alt=media&token=6f18d393-5502-4b71-8f1c-f7adf65816fa',
    users: [
      {
        id: '2',
        firstName: 'Ana',
        lastName: 'López',
        username: 'ana.lopez',
        email: 'ana@example.com',
        country: ['México'],
        profilePictureUrl: '',
        profilePictureCloudinaryId: null,
        membership: 'FREE',
        onboarding: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        role: 'USER'
      }
    ]
  },
  {
    id: '3',
    title: 'Agile Coaching Masterclass',
    description:
      'Técnicas avanzadas de coaching ágil para transformar organizaciones. Incluye casos prácticos y herramientas de mentoring.',
    facilitator: 'Ana Martínez',
    date: '2025-02-02T09:00:00Z',
    time: ['09:00', '11:30'],
    type: 'masterclass',
    status: 'active',
    link: 'https://zoom.us/j/555666777',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Comunidad%2Fimage_banner_sponsors.png?alt=media&token=6f18d393-5502-4b71-8f1c-f7adf65816fa',
    users: [
      {
        id: '3',
        firstName: 'Pedro',
        lastName: 'García',
        username: 'pedro.garcia',
        email: 'pedro@example.com',
        country: ['Argentina'],
        profilePictureUrl: '',
        profilePictureCloudinaryId: null,
        membership: 'FREE',
        onboarding: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        role: 'USER'
      }
    ]
  }
]

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
        // TODO: Descomentar cuando quieras usar datos reales con filtros
        /*
      const query = new URLSearchParams()
      if (filters?.type) {
        query.append('type', filters.type)
      }

      const { data, error } = await getAllActivities({ 
        userId: user.sub,
        type: filters?.type 
      })

      if (error) {
        setError(error)
        console.error('Error al obtener actividades:', error)
        return
      }

      if (data && Array.isArray(data)) {
        console.log('Datos de actividades recibidos:', data)
        setActivities(data)
      } else {
        setError('Formato de datos inválido')
      }
      */

        // TEMPORAL: Datos fake para desarrollo con filtros
        await new Promise((resolve) => setTimeout(resolve, 1000)) // Simular loading

        let filteredActivities = fakeActivities
        if (filters?.type) {
          filteredActivities = fakeActivities.filter(
            (activity) => activity.type === filters.type
          )
        }

        setActivities(filteredActivities)
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

  if (loading) {
    return <ActivityCardSkeleton />
  }

  if (error) {
    return (
      <div className='flex min-h-screen items-center justify-center'>
        <div className='text-lg text-red-600'>Error: {error}</div>
      </div>
    )
  }

  if (activities.length === 0) {
    return (
      <div className='flex min-h-screen items-center justify-center'>
        <div className='text-lg font-semibold text-[#FE7354]'>
          No hay actividades disponibles
        </div>
      </div>
    )
  }

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
      {activities.map((activity) => {
        const userCountry =
          activity.users && activity.users.length > 0
            ? activity.users[0].country?.[0] || 'No especificado'
            : 'No especificado'

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
