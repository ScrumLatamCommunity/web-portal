'use client'

import Image from 'next/image'
import React from 'react'

export const Dashboard = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex gap-[20px] pl-24 pt-[48px]'>
        {/* Primer contenedor */}
        <div className='flex min-w-[553px] flex-col gap-[38px] rounded-2xl border border-[#082965] pb-[14px] pl-8 pr-4 pt-6'>
          <span className='font-darker-grotesque text-10 font-bold text-[#082965]'>
            Miembros
          </span>
          <div className='flex gap-[88px] pl-[34px]'>
            <Image
              alt='chart'
              className=''
              height={162}
              src='https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Super%20Admin%20Dashboard%2FOBJECTS.svg?alt=media&token=f42de4ed-3318-41ee-b417-2dfd1da3f073'
              width={162}
            />
            <div className='flex gap-[25px] pr-[29px]'>
              <div className='flex flex-col gap-[10px] font-inter-600'>
                <span className=''>3</span>
                <span>5</span>
                <span>3</span>
                <span>18</span>
                <span>103</span>
              </div>
              <div className='flex flex-col gap-[10px] font-inter-400'>
                <span>Administradores</span>
                <span>Editores</span>
                <span>Sponsors</span>
                <span>Membresías</span>
                <span>Usuarios</span>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-[67px]'>
            <div></div>
            <div className='flex items-end justify-end pt-[23px]'>
              <button className='rounded-2xl bg-[#FD3600] px-[19px] py-[10px] text-white'>
                Ir a Miembros
              </button>
            </div>
          </div>
        </div>
        {/* Segundo contenedor */}
        <div className='flex min-w-[543px] flex-col gap-[33px] rounded-xl border border-[#082965] px-[18px] pb-[14px] pt-6'>
          <span className='pl-[13px] font-darker-grotesque text-10 font-bold text-[#082965]'>
            Últimos Eventos
          </span>
          <div className='flex flex-col gap-[6px]'>
            <div className='flex gap-[65px] pl-[15px] pr-[15px] text-[12px] font-inter-600'>
              <span>Evento</span>
              <span>Fecha de creacion</span>
              <span>Fecha de evento</span>
              <span>Cupos</span>
            </div>
            <div className='flex gap-[65px] rounded-2xl border border-[#000000] px-[16px] py-[13px] text-[10px] font-inter-600'>
              <span>Metodologí..</span>
              <span>11/12/2024</span>
              <span className='pl-[43px]'>11/12/2024</span>
              <span className='pl-[33px]'>0/50</span>
            </div>
            <div className='flex gap-[65px] rounded-2xl border border-[#000000] px-[16px] py-[13px] text-[10px] font-inter-600'>
              <span>Metodologí..</span>
              <span>11/12/2024</span>
              <span className='pl-[43px]'>11/12/2024</span>
              <span className='pl-[33px]'>0/50</span>
            </div>
            <div className='flex gap-[65px] rounded-2xl border border-[#000000] px-[16px] py-[13px] text-[10px] font-inter-600'>
              <span>Metodologí..</span>
              <span>11/12/2024</span>
              <span className='pl-[43px]'>11/12/2024</span>
              <span className='pl-[33px]'>0/50</span>
            </div>
            <div className='flex gap-[65px] rounded-2xl border border-[#000000] px-[16px] py-[13px] text-[10px] font-inter-600'>
              <span>Metodologí..</span>
              <span>11/12/2024</span>
              <span className='pl-[43px]'>11/12/2024</span>
              <span className='pl-[33px]'>0/50</span>
            </div>
            <div className='flex gap-[65px] rounded-2xl border border-[#000000] px-[16px] py-[13px] text-[10px] font-inter-600'>
              <span>Metodologí..</span>
              <span>11/12/2024</span>
              <span className='pl-[43px]'>11/12/2024</span>
              <span className='pl-[33px]'>0/50</span>
            </div>
          </div>
          <div className='flex items-end justify-end'>
            <button className='rounded-2xl bg-[#FD3600] px-[19px] py-[10px] text-white'>
              Ir a Miembros
            </button>
          </div>
        </div>
      </div>
      <div className='flex gap-[20px] pl-24 pt-[10px]'>
        {/* Tercer contenedor */}
        <div className='flex min-w-[517px] flex-col gap-[33px] rounded-xl border border-[#082965] px-[18px] pb-[14px] pt-6'>
          <span className='pl-[13px] font-darker-grotesque text-10 font-bold text-[#082965]'>
            Últimos Eventos
          </span>
          <div className='flex flex-col gap-[6px]'>
            <div className='flex gap-[65px] pl-[15px] pr-[15px] text-[12px] font-inter-600'>
              <span>Nombre</span>
              <span>Aliado desde</span>
              <span>Servicio</span>
            </div>
            <div className='flex gap-[65px] rounded-2xl border border-[#000000] px-[16px] py-[13px] text-[10px] font-inter-600'>
              <span>Juan Perez</span>
              <span className='pl-[43px]'>11/12/2024</span>
              <span className='pl-[33px]'>Educación</span>
            </div>
            <div className='flex gap-[65px] rounded-2xl border border-[#000000] px-[16px] py-[13px] text-[10px] font-inter-600'>
              <span>Juan Perez</span>
              <span className='pl-[43px]'>11/12/2024</span>
              <span className='pl-[33px]'>Educación</span>
            </div>
            <div className='flex gap-[65px] rounded-2xl border border-[#000000] px-[16px] py-[13px] text-[10px] font-inter-600'>
              <span>Juan Perez</span>
              <span className='pl-[43px]'>11/12/2024</span>
              <span className='pl-[33px]'>Educación</span>
            </div>
            <div className='flex gap-[65px] rounded-2xl border border-[#000000] px-[16px] py-[13px] text-[10px] font-inter-600'>
              <span>Juan Perez</span>
              <span className='pl-[43px]'>11/12/2024</span>
              <span className='pl-[33px]'>Educación</span>
            </div>
            <div className='flex gap-[65px] rounded-2xl border border-[#000000] px-[16px] py-[13px] text-[10px] font-inter-600'>
              <span>Juan Perez</span>
              <span className='pl-[43px]'>11/12/2024</span>
              <span className='pl-[33px]'>Educación</span>
            </div>
          </div>
          <div className='flex items-end justify-end'>
            <button className='rounded-2xl bg-[#FD3600] px-[19px] py-[10px] text-white'>
              Ir a Aliados
            </button>
          </div>
        </div>
        {/* Cuarto contenedor */}
        <div className='flex min-w-[579px] flex-col gap-[33px] rounded-xl border border-[#082965] px-[18px] pb-[14px] pt-6'>
          <span className='pl-[13px] font-darker-grotesque text-10 font-bold text-[#082965]'>
            Últimos Eventos
          </span>
          <div className='flex flex-col gap-[6px]'>
            <div className='flex gap-[65px] pl-[15px] pr-[15px] text-[12px] font-inter-600'>
              <span>Juan Perez</span>
              <span>Fecha de creacion</span>
              <span>Fecha de evento</span>
              <span>Cupos</span>
            </div>
            <div className='flex gap-[65px] rounded-2xl border border-[#000000] px-[16px] py-[13px] text-[10px] font-inter-600'>
              <span>Juan Perez</span>
              <span>11/12/2024</span>
              <span className='pl-[43px]'>11/12/2024</span>
              <span className='pl-[33px]'>0/50</span>
            </div>
            <div className='flex gap-[65px] rounded-2xl border border-[#000000] px-[16px] py-[13px] text-[10px] font-inter-600'>
              <span>Juan Perez</span>
              <span>11/12/2024</span>
              <span className='pl-[43px]'>11/12/2024</span>
              <span className='pl-[33px]'>0/50</span>
            </div>
            <div className='flex gap-[65px] rounded-2xl border border-[#000000] px-[16px] py-[13px] text-[10px] font-inter-600'>
              <span>Juan Perez</span>
              <span>11/12/2024</span>
              <span className='pl-[43px]'>11/12/2024</span>
              <span className='pl-[33px]'>0/50</span>
            </div>
            <div className='flex gap-[65px] rounded-2xl border border-[#000000] px-[16px] py-[13px] text-[10px] font-inter-600'>
              <span>Juan Perez</span>
              <span>11/12/2024</span>
              <span className='pl-[43px]'>11/12/2024</span>
              <span className='pl-[33px]'>0/50</span>
            </div>
            <div className='flex gap-[65px] rounded-2xl border border-[#000000] px-[16px] py-[13px] text-[10px] font-inter-600'>
              <span>Juan Perez</span>
              <span>11/12/2024</span>
              <span className='pl-[43px]'>11/12/2024</span>
              <span className='pl-[33px]'>0/50</span>
            </div>
          </div>
          <div className='flex items-end justify-end'>
            <button className='rounded-2xl bg-[#FD3600] px-[19px] py-[10px] text-white'>
              Ir a Miembros
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
