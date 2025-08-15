'use client'

import { darkerGrotesque, inter, karla } from '@/fonts'
import React, { useEffect, useState } from 'react'
import ActivityList from './components/ActivityList'
import ActivityForm from './components/ActivityForm'

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

  const fetchActivities = async () => {
    try {
      let url = `${process.env.NEXT_PUBLIC_API_URL}activities/all`
      if (statusFilter) {
        url += `?status=${statusFilter}`
      } else {
        url += `?statusOrder=DRAFT`
      }
      const response = await fetch(url)
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

  return (
    <section
      className={`${darkerGrotesque.variable} ${karla.variable} ${inter.variable} mb-8`}
    >
      <h1
        className={`items-left max-w-[2180px] font-darker-grotesque text-[30px] font-darker-grotesque-700 text-[#FE2E00]`}
      >
        Panel de Actividades
      </h1>
      {!selectedActivity && (
        <>
          <div className='mb-8 mt-5 flex flex-col text-[18px] md:flex-row'>
            <h2 className=''>Aplicar Filtros: </h2>
            <div className='ml-5 flex flex-row gap-4'>
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
                  checked={statusFilter === 'REJECTED'}
                  onChange={() => handleCheckboxChange('REJECTED')}
                />
                Rechazado
              </label>
              <label className='flex items-center gap-2'>
                <input
                  type='checkbox'
                  className='form-checkbox text-[18px]'
                  checked={statusFilter === 'INACTIVE'}
                  onChange={() => handleCheckboxChange('INACTIVE')}
                />
                Inactiva
              </label>
            </div>
          </div>
          <div className='grid grid-cols-4 gap-4 rounded-[10px] bg-[#FFEAE6] p-2 py-6'>
            <span className='text-center font-darker-grotesque text-[21px] font-darker-grotesque-700'>
              Actividad
            </span>
            <span className='text-center font-darker-grotesque text-[21px] font-darker-grotesque-700'>
              Fecha de realización
            </span>
            <span className='text-center font-darker-grotesque text-[21px] font-darker-grotesque-700'>
              Estado
            </span>
            <span className='text-center font-darker-grotesque text-[21px] font-darker-grotesque-700'>
              Más
            </span>
          </div>
          <ActivityList activities={activities} onEdit={setSelectedActivity} />
          <div className='custom-scrollbar h-full max-h-[650px] overflow-y-scroll'></div>
        </>
      )}
      {selectedActivity && (
        <ActivityForm
          activity={selectedActivity}
          onBack={() => setSelectedActivity(null)}
          onActivityUpdate={handleActivityUpdate}
        />
      )}
    </section>
  )
}
