'use client'

import { darkerGrotesque, inter, karla } from '@/fonts'
import React, { useEffect, useState } from 'react'
import { useAuth } from '@/app/context/AuthContext'
import MembersList from './components/membersList'

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('es-ES')
}

interface Members {
  id: number
  firstName: string
  lastName: string
  email: string
  country: string
  createdAt: string
  membership: string
  role: string
}

export default function MembersPage() {
  const { token, user } = useAuth()
  const [members, setMembers] = useState<Members[]>([])

  const getMembers = async () => {
    try {
      const response = await fetch(
        'http://localhost:8002/api/v1/users?order=desc',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        }
      )

      if (!response.ok) {
        throw new Error('Error al obtener miembros')
      }

      const data = await response.json()
      console.log('Miembros obtenidos:', data)

      setMembers(data)
    } catch (error) {
      console.error('Error al obtener miembros:', error)
    }
  }
  useEffect(() => {
    getMembers()
  }, [setMembers])
  return (
    <section
      className={`${darkerGrotesque.variable} ${karla.variable} ${inter.variable} mb-8`}
    >
      <h1
        className={`items-left max-w-[2180px] font-darker-grotesque text-[30px] font-darker-grotesque-700 text-[#082965]`}
      >
        Miembros de la Comunidad
      </h1>
      <div
        className={`mb-6 w-full rounded-[20px] border-[0.5px] border-black-13 p-4`}
      >
        <div className='grid grid-cols-8 gap-4 rounded-[20px] border-[0.5px] border-black-9 p-2'>
          <button className='font-darker-grotesque text-[21px] font-darker-grotesque-700'>
            Nombre
          </button>
          <button className='font-darker-grotesque text-[21px] font-darker-grotesque-700'>
            Apellido
          </button>
          <button className='font-darker-grotesque text-[21px] font-darker-grotesque-700'>
            Mail
          </button>
          <button className='font-darker-grotesque text-[21px] font-darker-grotesque-700'>
            País
          </button>
          <button className='font-darker-grotesque text-[21px] font-darker-grotesque-700'>
            Miembro desde
          </button>
          <button className='font-darker-grotesque text-[21px] font-darker-grotesque-700'>
            Membresía
          </button>
          <button className='font-darker-grotesque text-[21px] font-darker-grotesque-700'>
            Rol
          </button>
          <p className='flex items-center justify-center font-darker-grotesque text-[21px] font-darker-grotesque-700'>
            Acción
          </p>
        </div>
        <div className='custom-scrollbar h-full max-h-[650px] overflow-y-scroll'>
          {members.map((member) => (
            <MembersList
              key={member.id}
              firstName={member.firstName}
              lastName={member.lastName}
              email={member.email}
              country={member.country}
              createdAt={formatDate(member.createdAt)}
              membership={member.membership}
              role={member.role}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
