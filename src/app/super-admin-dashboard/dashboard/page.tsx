'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { PieChart } from '../allies/components/PieChart'
import { useAuth } from '@/app/context/AuthContext'

const API_URL = process.env.NEXT_PUBLIC_API_URL

interface CountryStats {
  country: string
  count: number
}

interface StatsResponse {
  totalUsers: number
  country: CountryStats[]
}

interface User {
  firstName: string
  lastName: string
  role: string
  membership: string
  createdAt: string
}

interface FreeUser {
  name: string
  lastName: string
  membership: string
  creationDate: string
}

interface ChartData {
  labels: string[]
  datasets: {
    data: number[]
    backgroundColor: string[]
  }[]
}

export const Dashboard = () => {
  const { token } = useAuth()
  const [data, setData] = useState<ChartData>({
    labels: [],
    datasets: [{ data: [], backgroundColor: [] }]
  })
  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [freeUsers, setFreeUsers] = useState<FreeUser[]>([])

  useEffect(() => {
    if (!token) return

    const fetchData = async () => {
      try {
        const res = await axios.get<StatsResponse>(
          `${API_URL}admin/stats?filters=country`,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )

        console.log(res.data)
        const roles = res.data.country
        const labels = roles.map((r: CountryStats) =>
          r.country.replace(/(\D+)(\d+)/, '$1 - $2')
        )
        const data = roles.map((r: CountryStats) => r.count)
        const colors = Array(labels.length)
          .fill('')
          .map((_, i) => {
            const baseColors = ['#FE5833', '#345081', '#FF9F8A', '#C4CCDA']
            return baseColors[i % baseColors.length]
          })

        setData({
          labels,
          datasets: [{ data, backgroundColor: colors }]
        })

        const resUsers = await axios.get<User[]>(`${API_URL}admin/users`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setUsers(resUsers.data.filter((user) => user.role === 'SPONSOR'))
        const filterFreeUsers = resUsers.data.filter(
          (user) => user.membership === 'Free'
        )
        setFreeUsers(
          filterFreeUsers.map((user) => ({
            name: user.firstName,
            lastName: user.lastName,
            membership: user.membership,
            creationDate: user.createdAt
          }))
        )
      } catch (error) {
        setError((error as Error).message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [token])

  const renderSkeletonItem = (columns: number) => (
    <div className='grid-cols-${columns} grid animate-pulse gap-4 rounded-xl border border-[#E5E7EB] p-4'>
      {Array(columns)
        .fill(0)
        .map((_, i) => (
          <div key={i} className='h-4 rounded bg-gray-200'></div>
        ))}
    </div>
  )

  const renderEmptyState = (message: string) => (
    <div className='flex flex-col items-center justify-center py-8 text-gray-500'>
      <span className='text-sm'>{message}</span>
    </div>
  )

  return (
    <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
      {/* Primer Contenedor - Miembros */}
      <div className='flex h-full flex-col gap-6 rounded-2xl border border-[#082965] p-6'>
        <span className='font-darker-grotesque text-10 font-bold text-[#082965]'>
          Miembros
        </span>
        <div className='flex flex-1 flex-col gap-6 lg:flex-row lg:justify-between'>
          {loading ? (
            <div className='h-[200px] w-full animate-pulse rounded-full bg-gray-200' />
          ) : data.labels.length > 0 ? (
            <>
              <PieChart chartData={data} />
              <div className='flex gap-6'>
                <div className='flex flex-col gap-2.5 font-inter-600'>
                  {data.datasets[0].data.map((item, index) => (
                    <span key={index}>{item}</span>
                  ))}
                </div>
                <div className='flex flex-col gap-2.5 font-inter-400'>
                  {data.labels.map((item, index) => (
                    <span key={index + 1}>{item}</span>
                  ))}
                </div>
              </div>
            </>
          ) : (
            renderEmptyState('No hay datos de miembros para mostrar')
          )}
        </div>
        <div className='mt-auto flex justify-end'>
          <button className='rounded-2xl bg-[#FD3600] px-5 py-2.5 text-white'>
            Ir a Miembros
          </button>
        </div>
      </div>

      {/* Segundo contenedor - Últimos Eventos */}
      <div className='flex h-full flex-col gap-6 rounded-xl border border-[#082965] p-6'>
        <span className='font-darker-grotesque text-10 font-bold text-[#082965]'>
          Últimos Eventos
        </span>
        <div className='flex flex-1 flex-col gap-2'>
          <div className='grid grid-cols-4 gap-4 px-4 text-xs font-inter-600'>
            <span>Evento</span>
            <span>Fecha de creacion</span>
            <span>Fecha de evento</span>
            <span>Cupos</span>
          </div>
          {loading
            ? Array(5)
                .fill(0)
                .map((_, index) => (
                  <div key={index}>{renderSkeletonItem(4)}</div>
                ))
            : renderEmptyState('No hay eventos para mostrar')}
        </div>
        <div className='mt-auto flex justify-end'>
          <button className='rounded-2xl bg-[#FD3600] px-5 py-2.5 text-white'>
            Ir a Eventos
          </button>
        </div>
      </div>

      {/* Tercer contenedor - Últimos Sponsors */}
      <div className='flex h-full flex-col gap-6 rounded-xl border border-[#082965] p-6'>
        <span className='font-darker-grotesque text-10 font-bold text-[#082965]'>
          Últimos Sponsors
        </span>
        <div className='flex flex-1 flex-col gap-2'>
          <div className='grid grid-cols-3 gap-4 px-4 text-xs font-inter-600'>
            <span>Nombre</span>
            <span>Aliado desde</span>
            <span>Servicio</span>
          </div>
          {loading
            ? Array(5)
                .fill(0)
                .map((_, index) => (
                  <div key={index}>{renderSkeletonItem(3)}</div>
                ))
            : users.length > 0
              ? users.slice(0, 5).map((item, index) => (
                  <div
                    key={index}
                    className='grid grid-cols-3 gap-4 rounded-xl border border-[#000000] p-4 text-[10px] font-inter-600'
                  >
                    <span>
                      {item.firstName} {item.lastName}
                    </span>
                    <span>{item.createdAt.split('T')[0]}</span>
                    <span>Educación</span>
                  </div>
                ))
              : renderEmptyState('No hay sponsors para mostrar')}
        </div>
        <div className='mt-auto flex justify-end'>
          <button className='rounded-2xl bg-[#FD3600] px-5 py-2.5 text-white'>
            Ir a Aliados
          </button>
        </div>
      </div>

      {/* Cuarto contenedor - Últimas Membresías */}
      <div className='flex h-full flex-col gap-6 rounded-xl border border-[#082965] p-6'>
        <span className='font-darker-grotesque text-10 font-bold text-[#082965]'>
          Últimas Membresías
        </span>
        <div className='flex flex-1 flex-col gap-2'>
          <div className='grid grid-cols-4 gap-4 px-4 text-xs font-inter-600'>
            <span>Nombre</span>
            <span>Membresías desde</span>
            <span>Tipo</span>
            <span>Metodo de Pago</span>
          </div>
          {loading
            ? Array(5)
                .fill(0)
                .map((_, index) => (
                  <div key={index}>{renderSkeletonItem(4)}</div>
                ))
            : freeUsers.length > 0
              ? freeUsers.map((user, index) => (
                  <div
                    key={index}
                    className='grid grid-cols-4 gap-4 rounded-xl border border-[#000000] p-4 text-[10px] font-inter-600'
                  >
                    <span>
                      {user.name} {user.lastName}
                    </span>
                    <span>{user.creationDate.split('T')[0]}</span>
                    <span>{user.membership}</span>
                    <span>Tarjeta de Crédito</span>
                  </div>
                ))
              : renderEmptyState('No hay membresías para mostrar')}
        </div>
        <div className='mt-auto flex justify-end'>
          <button className='rounded-2xl bg-[#FD3600] px-5 py-2.5 text-white'>
            Ir a Membresías
          </button>
        </div>
      </div>
    </div>
  )
}
