'use client'

import { useEffect, useState } from 'react'
import { Activity } from '../interfaces/activityInterface'
import ActivityCardSkeleton from './ActivityCardSkeleton'
import ActivityCard from './activityCards'
import { useAuth } from '@/app/context/AuthContext'
import { UserData } from '@/interfaces'

interface UpcomingActivitiesGridProps {
  activities: Activity[]
  isLoading: boolean
}

const DEFAULT_COUNTRY = 'Colombia'

export default function UpcomingActivitiesGrid({
  activities,
  isLoading: loadingFromProps
}: UpcomingActivitiesGridProps) {
  const [error, setError] = useState('')
  const { user, token } = useAuth()
  const [userData, setUserData] = useState<UserData | null>(null)
  const [loadingUser, setLoadingUser] = useState(false)

  useEffect(() => {
    const fetchUserData = async () => {
      if (!user?.sub || !token) return

      try {
        setLoadingUser(true)
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}users/${user.sub}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          }
        )
        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`)
        const data: UserData = await response.json()
        setUserData(data)
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'Error al cargar los datos'
        )
      } finally {
        setLoadingUser(false)
      }
    }

    fetchUserData()
  }, [user?.sub, token])

  const finalLoading = loadingFromProps || loadingUser
  const country = userData?.country?.[0] || DEFAULT_COUNTRY

  return (
    <section className='py-12 md:py-16'>
      <div className='max-w-12xl mx-auto px-2 sm:px-6 lg:px-12'>
        {finalLoading ? (
          <div className='grid grid-cols-1 gap-3'>
            {[...Array(3)].map((_, index) => (
              <ActivityCardSkeleton key={index} />
            ))}
          </div>
        ) : activities.length > 0 ? (
          <div className='grid grid-cols-1 gap-6'>
            {activities.map((activity) => (
              <ActivityCard
                key={activity.id}
                activity={activity}
                country={country}
              />
            ))}
          </div>
        ) : (
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
