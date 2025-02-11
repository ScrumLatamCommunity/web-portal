'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { PieChart } from '../allies/components/PieChart'

const API_URL = 'http://localhost:8002/api/v1'

export const Dashboard = () => {
  const [token, setToken] = useState<string | null>(null)
  const [data, setData] = useState<any>(null)
  const [user, setUser] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const loginRes = await axios.post(`${API_URL}/auth/login`, {
          email: 'gabrielta1798@gmail.com',
          password: '5CrUmL4T4M!'
        })

        setToken(loginRes.data.access_token)
        console.log('Token obtenido:', loginRes.data.access_token)
      } catch (error) {
        setError((error as Error).message)
      }
    }

    fetchToken()
  }, [])

  useEffect(() => {
    if (!token) return

    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_URL}/admin/stats?filters=role`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        console.log(res.data)
        setData(res.data)

        const resUsers = await axios.get(`${API_URL}/admin/users?order=desc`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        console.log('Users', resUsers.data)
        setUser(resUsers.data)
      } catch (error) {
        setError((error as Error).message)
      } finally {
        setLoading(false)
        console.log('Complete', token)
      }
    }

    fetchData()
  }, [token])

  return (
    <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
      {/* Primer Contenedor - Miembros */}
      <div className='flex flex-col gap-6 rounded-2xl border border-[#082965] p-6'>
        <span className='font-darker-grotesque text-10 font-bold text-[#082965]'>
          Miembros
        </span>
        <div className='flex flex-col gap-6 lg:flex-row lg:justify-between'>
          {token && <PieChart token={token} />}
          <div className='flex gap-6'>
            <div className='flex flex-col gap-2.5 font-inter-600'>
              {data?.role?.map((item: any, index: number) => (
                <span key={index}>{item.count}</span>
              ))}
            </div>
            <div className='flex flex-col gap-2.5 font-inter-400'>
              {data?.role?.map((item: any, index: number) => (
                <span key={index}>{item.role}</span>
              ))}
            </div>
          </div>
        </div>
        <div className='flex justify-end'>
          <button className='rounded-2xl bg-[#FD3600] px-5 py-2.5 text-white'>
            Ir a Miembros
          </button>
        </div>
      </div>

      {/* Segundo contenedor - Últimos Eventos */}
      <div className='flex flex-col gap-6 rounded-xl border border-[#082965] p-6'>
        <span className='font-darker-grotesque text-10 font-bold text-[#082965]'>
          Últimos Eventos
        </span>
        <div className='flex flex-col gap-2'>
          <div className='grid grid-cols-4 gap-4 px-4 text-xs font-inter-600'>
            <span>Evento</span>
            <span>Fecha de creacion</span>
            <span>Fecha de evento</span>
            <span>Cupos</span>
          </div>
          {[1, 2, 3, 4, 5].map((_, index) => (
            <div
              key={index}
              className='grid grid-cols-4 gap-4 rounded-xl border border-[#000000] p-4 text-[10px] font-inter-600'
            >
              <span>Metodologí..</span>
              <span>11/12/2024</span>
              <span>11/12/2024</span>
              <span>0/50</span>
            </div>
          ))}
        </div>
        <div className='flex justify-end'>
          <button className='rounded-2xl bg-[#FD3600] px-5 py-2.5 text-white'>
            Ir a Eventos
          </button>
        </div>
      </div>

      {/* Tercer contenedor - Últimos Sponsors */}
      <div className='flex flex-col gap-6 rounded-xl border border-[#082965] p-6'>
        <span className='font-darker-grotesque text-10 font-bold text-[#082965]'>
          Últimos Sponsors
        </span>
        <div className='flex flex-col gap-2'>
          <div className='grid grid-cols-3 gap-4 px-4 text-xs font-inter-600'>
            <span>Nombre</span>
            <span>Aliado desde</span>
            <span>Servicio</span>
          </div>
          {user?.slice(0, 5).map((item: any, index: number) => (
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
          ))}
        </div>
        <div className='flex justify-end'>
          <button className='rounded-2xl bg-[#FD3600] px-5 py-2.5 text-white'>
            Ir a Aliados
          </button>
        </div>
      </div>

      {/* Cuarto contenedor - Últimas Membresías */}
      <div className='flex flex-col gap-6 rounded-xl border border-[#082965] p-6'>
        <span className='font-darker-grotesque text-10 font-bold text-[#082965]'>
          Últimas Membresías
        </span>
        <div className='flex flex-col gap-2'>
          <div className='grid grid-cols-4 gap-4 px-4 text-xs font-inter-600'>
            <span>Nombre</span>
            <span>Membresías desde</span>
            <span>Tipo</span>
            <span>Metodo de Pago</span>
          </div>
          {[1, 2, 3, 4, 5].map((_, index) => (
            <div
              key={index}
              className='grid grid-cols-4 gap-4 rounded-xl border border-[#000000] p-4 text-[10px] font-inter-600'
            >
              <span>Juan Perez</span>
              <span>11/12/2024</span>
              <span>Flex</span>
              <span>Tarjeta de Crédito</span>
            </div>
          ))}
        </div>
        <div className='flex justify-end'>
          <button className='rounded-2xl bg-[#FD3600] px-5 py-2.5 text-white'>
            Ir a Membresías
          </button>
        </div>
      </div>
    </div>
  )
}
