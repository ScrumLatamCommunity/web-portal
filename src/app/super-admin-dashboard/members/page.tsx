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
  const { token } = useAuth()
  const [members, setMembers] = useState<Members[]>([])

  const getMembers = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}users?order=desc`,
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
        className={`items-left font-darker-grotesque text-[30px] font-darker-grotesque-700 text-[#082965]`}
      >
        Miembros de la Comunidad
      </h1>
      <div
        className={`mb-6 w-full rounded-[20px] border-[0.5px] border-black-13 p-4`}
      >
        <div className='custom-scrollbar h-full max-h-[650px] overflow-x-auto overflow-y-scroll'>
          <table className='w-full'>
            <thead>
              <tr className='rounded-[50px] border-[0.5px] border-black-9'>
                <th className='p-4 text-left font-darker-grotesque text-[21px] font-darker-grotesque-700 first:rounded-l-[20px] last:rounded-r-[20px]'>
                  Nombre
                </th>
                <th className='p-4 text-left font-darker-grotesque text-[21px] font-darker-grotesque-700'>
                  Apellido
                </th>
                <th className='p-4 text-left font-darker-grotesque text-[21px] font-darker-grotesque-700'>
                  Mail
                </th>
                <th className='p-4 text-left font-darker-grotesque text-[21px] font-darker-grotesque-700'>
                  País
                </th>
                <th className='p-4 text-left font-darker-grotesque text-[21px] font-darker-grotesque-700'>
                  Miembro desde
                </th>
                <th className='p-4 text-left font-darker-grotesque text-[21px] font-darker-grotesque-700'>
                  Membresía
                </th>
                <th className='p-4 text-left font-darker-grotesque text-[21px] font-darker-grotesque-700'>
                  Rol
                </th>
                <th className='p-4 text-center font-darker-grotesque text-[21px] font-darker-grotesque-700'>
                  Acción
                </th>
              </tr>
            </thead>
            <tbody>
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
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
