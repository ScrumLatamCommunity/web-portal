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
    <tr
      className={`${darkerGrotesque.variable} ${karla.variable} border-b border-gray-200`}
    >
      <td className='p-4 text-left font-karla text-[15px] font-karla-400'>
        {firstName}
      </td>
      <td className='p-4 text-left font-karla text-[15px] font-karla-400'>
        {lastName}
      </td>
      <td className='p-4 text-left font-karla text-[15px] font-karla-400'>
        {email}
      </td>
      <td className='p-4 text-left font-karla text-[15px] font-karla-400'>
        {country}
      </td>
      <td className='p-4 text-left font-karla text-[15px] font-karla-400'>
        {createdAt}
      </td>
      <td className='p-4 text-left font-karla text-[15px] font-karla-400'>
        {membership}
      </td>
      <td className='p-4 text-left font-karla text-[15px] font-karla-400'>
        {role}
      </td>
      <td className='p-4 text-center'>
        <div className='flex justify-center gap-6 font-darker-grotesque text-[20px] font-darker-grotesque-600'>
          <button className='text-[#FE5833]'>Ver Perfil</button>
          <button className='text-[#FE5833]'>Eliminar</button>
        </div>
      </td>
    </tr>
  )
}
