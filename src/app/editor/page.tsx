'use client'

import { darkerGrotesque, inter, karla } from '@/fonts'
import React, { useEffect, useState } from 'react'
import CreateActivity from './components/createActivity'
import ActivityList from './components/ActivityList'
import ActivityForm from './components/editActivity'

export interface Activity {
  id: string
  type: string
  title: string
  description: string
  date: string
  recurrency: string
  time: string[]
  inscriptions: string[]
  image: string
  status: string
  link: string
  facilitator?: string
  createdAt: string
  updatedAt: string
}

export default function EventsPage() {
  const [activities, setActivities] = useState<Activity[]>([])
  const [statusFilter, setStatusFilter] = useState<string | null>(null)
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(
    null
  )
  const [isCreating, setIsCreating] = useState(false)
  const [isViewing, setIsViewing] = useState(false)

  const fetchActivities = async () => {
    try {
      const query = new URLSearchParams()
      if (statusFilter) query.append('status', statusFilter)

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}activities/all?${query.toString()}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      if (!response.ok) throw new Error('Error al obtener actividades')
      const data = await response.json()
      setActivities(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchActivities()
  }, [statusFilter])

  const handleCheckboxChange = (status: string) => {
    setStatusFilter((prev) => (prev === status ? null : status))
  }

  const handleActivityUpdate = () => {
    fetchActivities()
  }

  const handleViewActivity = (activity: Activity) => {
    setSelectedActivity(activity)
    setIsViewing(true)
  }

  return (
    <section
      className={`${darkerGrotesque.variable} ${karla.variable} ${inter.variable} mb-8`}
    >
      {/* Botón para crear nueva actividad */}
      {!selectedActivity && !isCreating && (
        <div className='flex justify-end'>
          <button
            onClick={() => setIsCreating(true)}
            className='flex items-center gap-2 rounded-lg border border-[#072356] bg-white px-4 py-2 text-lg font-medium text-[#072356] transition-colors hover:bg-[#f0f4ff]'
          >
            <span className='text-lg'>+</span> Nueva actividad
          </button>
        </div>
      )}
      {/* Mostrar filtros y lista solo si no se está creando ni editando */}
      {!selectedActivity && !isCreating && (
        <>
          <h1
            className={`items-left max-w-[2180px] font-darker-grotesque text-[30px] font-darker-grotesque-700 text-[#FE2E00]`}
          >
            Panel de Actividades
          </h1>
          <div className='mb-8 mt-5 flex flex-col text-[18px] md:flex-row'>
            <h2 className='mb-4 flex-shrink-0 px-2 md:mb-0'>
              Aplicar Filtros:{' '}
            </h2>
            <div className='flex flex-wrap items-center gap-4 pb-2 md:gap-6 md:pb-0'>
              <label className='flex items-center gap-2'>
                <input
                  type='checkbox'
                  className='form-checkbox text-[18px]'
                  checked={statusFilter === 'DRAFT'}
                  onChange={() => handleCheckboxChange('DRAFT')}
                />
                Pendiente
              </label>
              <label className='flex items-center gap-2'>
                <input
                  type='checkbox'
                  className='form-checkbox text-[18px]'
                  checked={statusFilter === 'ACTIVE'}
                  onChange={() => handleCheckboxChange('ACTIVE')}
                />
                Publicado
              </label>
              <label className='flex items-center gap-2'>
                <input
                  type='checkbox'
                  className='form-checkbox text-[18px]'
                  checked={statusFilter === 'INACTIVE'}
                  onChange={() => handleCheckboxChange('INACTIVE')}
                />
                Inactivo
              </label>
              <label className='flex items-center gap-2'>
                <input
                  type='checkbox'
                  className='form-checkbox text-[18px]'
                  checked={statusFilter === 'REJECTED'}
                  onChange={() => handleCheckboxChange('REJECTED')}
                />
                Rechazado
              </label>
            </div>
          </div>
          <ActivityList
            activities={activities}
            onEdit={setSelectedActivity}
            onView={handleViewActivity}
          />
          <div className='custom-scrollbar h-full max-h-[650px] overflow-y-scroll'></div>
        </>
      )}
      {/* Formulario para crear nueva actividad */}
      {isCreating && (
        <CreateActivity
          activity={{
            id: '',
            type: '',
            title: '',
            description: '',
            date: '',
            recurrency: '',
            time: [],
            inscriptions: [],
            image: '',
            status: 'DRAFT',
            link: '',
            facilitator: '',
            createdAt: '',
            updatedAt: ''
          }}
          onBack={() => setIsCreating(false)}
          onActivityUpdate={() => {
            setIsCreating(false)
            fetchActivities()
          }}
        />
      )}
      {/* Formulario para editar actividad */}
      {selectedActivity && (
        <ActivityForm
          activity={selectedActivity}
          onBack={() => {
            setSelectedActivity(null)
            setIsViewing(false)
          }}
          onActivityUpdate={handleActivityUpdate}
          isViewMode={isViewing}
        />
      )}
    </section>
  )
}
