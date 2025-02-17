import { darkerGrotesque, karla } from '@/fonts'
import React from 'react'

interface MembersProps {
  firstName: string
  lastName: string
  email: string
  country: string
  createdAt: string
  membership: string
  role: string
}

export default function MembersList({
  firstName,
  lastName,
  email,
  country,
  createdAt,
  membership,
  role
}: MembersProps) {
  return (
    <div
      className={`${darkerGrotesque.variable} ${karla.variable} grid grid-cols-8 place-items-center gap-2 py-3`}
    >
      <p className='font-karla text-[15px] font-karla-400'>{firstName}</p>
      <p className='font-karla text-[15px] font-karla-400'>{lastName}</p>
      <p className='font-karla text-[15px] font-karla-400'>{email}</p>
      <p className='font-karla text-[15px] font-karla-400'>{country}</p>
      <p className='font-karla text-[15px] font-karla-400'>{createdAt}</p>
      <p className='font-karla text-[15px] font-karla-400'>{membership}</p>
      <p className='font-karla text-[15px] font-karla-400'>{role}</p>
      <div className='flex flex-row gap-6 font-darker-grotesque text-[20px] font-darker-grotesque-600'>
        <button className='text-[#FE5833]'>Ver Perfil</button>
        <button className='text-[#FE5833]'>Eliminar</button>
      </div>
    </div>
  )
}
