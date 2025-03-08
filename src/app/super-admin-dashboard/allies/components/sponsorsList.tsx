import { darkerGrotesque, karla } from '@/fonts'
import React from 'react'

interface SponsorProps {
  name: string
  since: string
  web: string
  status: string
}

export default function SponsorsList({
  name,
  since,
  web,
  status
}: SponsorProps) {
  return (
    <div
      className={`${darkerGrotesque.variable} ${karla.variable} grid grid-cols-5 place-items-center gap-4 py-3`}
    >
      <p className='font-karla font-karla-400'>{name}</p>
      <p className='font-karla font-karla-400'>{since}</p>
      <p className='font-karla font-karla-400'>{web}</p>
      <p
        className={`rounded-[20px] px-5 font-karla font-karla-400 ${
          status === 'ACTIVE' ? 'bg-[#34C75940]' : 'bg-[#FE583340]'
        }`}
      >
        {status === 'ACTIVE' ? 'Activo' : 'Inactivo'}
      </p>
      <div className='flex flex-row gap-6 font-darker-grotesque text-[20px] font-darker-grotesque-600'>
        <button className='text-[#FE5833]'>Ver Perfil</button>
        <button className='text-[#FE5833]'>Eliminar</button>
      </div>
    </div>
  )
}
