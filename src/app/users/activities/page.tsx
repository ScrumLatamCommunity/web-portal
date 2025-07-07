'use client'

import { useAuth } from '@/app/context/AuthContext'
import ActivityCard from '../components/ActivityCard'
import { getAllActivities } from '../actions/activity.actions'
import { Activity } from '@/app/activities/interfaces/activityInterface'
import { useEffect, useState } from 'react'
import ActivityCardSkeleton from '@/app/activities/components/ActivityCardSkeleton'

export default function ActivitiesPage() {
  const { user } = useAuth()
  const [activities, setActivities] = useState<Activity[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchActivities = async () => {
    if (!user?.sub) return

    setLoading(true)
    setError(null)

    try {
      const { data, error } = await getAllActivities({ userId: user.sub })

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
    } catch (err) {
      setError('Error al cargar las actividades')
      console.error('Error en fetchActivities:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (user?.sub) {
      fetchActivities()
    }
  }, [user?.sub])

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
        <div className='text-lg font-semibold text-[#082965]'>
          No hay actividades disponibles
        </div>
      </div>
    )
  }

  return (
    <div className='space-y-6 p-4'>
      <h1 className='mb-6 text-2xl font-bold text-[#082965]'>
        Mis Actividades
      </h1>
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
