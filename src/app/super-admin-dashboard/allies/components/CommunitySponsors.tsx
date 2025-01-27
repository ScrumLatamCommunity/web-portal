'use client'

import React from 'react'

export const CommunitySponsors = () => {
  return (
    <div className='flex h-[470px] w-[1280px] flex-col items-start gap-7 rounded-lg border border-[#082965] py-[14px] pl-[14px] pr-3'>
      <h2 className='font-darker-grotesque text-[24px] font-bold text-[#082965]'>
        Sponsor de la Comunidad
      </h2>
      <div className='flex gap-[78px] rounded-lg border border-[#000000] py-[10px] pl-[28px] pr-[104px] font-darker-grotesque text-[24px] font-bold'>
        <span>Nombre</span>
        <span>Aliado desde</span>
        <span>Fecha de finalización</span>
        <span>Servicio</span>
        <span>Estado</span>
        <span>Acción</span>
      </div>
      <div className='flex gap-[7px] overflow-y-auto pl-[28px] font-karla text-[18px] font-normal scrollbar scrollbar-thumb-[#FE2E00] scrollbar-w-[10px] scrollbar-h-[72px]'>
        <div className='flex flex-col gap-[35px] whitespace-nowrap'>
          <span>Ejemplo 1</span>
          <span>Ejemplo 1</span>
          <span>Ejemplo 1</span>
          <span>Ejemplo 1</span>
          <span>Ejemplo 1</span>
        </div>
        <div className='flex flex-col gap-[35px]'>
          <span className='pl-[90px]'>19/12/2024</span>
          <span className='pl-[90px]'>19/12/2024</span>
          <span className='pl-[90px]'>19/12/2024</span>
          <span className='pl-[90px]'>19/12/2024</span>
          <span className='pl-[90px]'>19/12/2024</span>
        </div>
        <div className='flex flex-col gap-[35px]'>
          <span className='pl-[170px]'>25/03/2025</span>
          <span className='pl-[170px]'>25/03/2025</span>
          <span className='pl-[170px]'>25/03/2025</span>
          <span className='pl-[170px]'>25/03/2025</span>
          <span className='pl-[170px]'>25/03/2025</span>
        </div>
        <div className='flex gap-11'>
          <div className='flex flex-col gap-[20px] leading-[21px]'>
            <span className='w-[270px] break-words pl-[135px] text-center'>
              Certificaciones en '' ejemplo
            </span>
            <span className='w-[270px] break-words pl-[135px] text-center'>
              Certificaciones en '' ejemplo
            </span>
            <span className='w-[270px] break-words pl-[135px] text-center'>
              Certificaciones en '' ejemplo
            </span>
            <span className='w-[270px] break-words pl-[135px] text-center'>
              Certificaciones en '' ejemplo
            </span>
            <span className='w-[270px] break-words pl-[135px] text-center'>
              Certificaciones en '' ejemplo
            </span>
          </div>
          <div className='flex flex-col gap-[29px]'>
            <span className='flex h-8 rounded-2xl bg-[#34C75940] px-[18px] py-[3px] pl-[17px] text-opacity-25'>
              Activo
            </span>
            <span className='flex h-8 rounded-2xl bg-[#34C75940] px-[18px] py-[3px] pl-[17px] text-opacity-25'>
              Activo
            </span>
            <span className='flex h-8 rounded-2xl bg-[#34C75940] px-[18px] py-[3px] pl-[17px] text-opacity-25'>
              Activo
            </span>
            <span className='flex h-8 rounded-2xl bg-[#34C75940] px-[18px] py-[3px] pl-[17px] text-opacity-25'>
              Activo
            </span>
            <span className='flex h-8 rounded-2xl bg-[#34C75940] px-[18px] py-[3px] pl-[17px] text-opacity-25'>
              Activo
            </span>
          </div>
        </div>
        <div className='flex flex-col gap-[35px] whitespace-nowrap'>
          <span className='pl-[24px] font-darker-grotesque font-semibold text-[#FE5833]'>
            Ver perfil
          </span>
          <span className='pl-[24px] font-darker-grotesque font-semibold text-[#FE5833]'>
            Ver perfil
          </span>
          <span className='pl-[24px] font-darker-grotesque font-semibold text-[#FE5833]'>
            Ver perfil
          </span>
          <span className='pl-[24px] font-darker-grotesque font-semibold text-[#FE5833]'>
            Ver perfil
          </span>
          <span className='pl-[24px] font-darker-grotesque font-semibold text-[#FE5833]'>
            Ver perfil
          </span>
        </div>
        <div className='flex flex-col gap-[35px] whitespace-nowrap pl-2 pr-7'>
          <span className='pl-[5px] font-darker-grotesque font-semibold text-[#FE5833]'>
            Eliminar perfil
          </span>
          <span className='pl-[5px] font-darker-grotesque font-semibold text-[#FE5833]'>
            Eliminar perfil
          </span>
          <span className='pl-[5px] font-darker-grotesque font-semibold text-[#FE5833]'>
            Eliminar perfil
          </span>
          <span className='pl-[5px] font-darker-grotesque font-semibold text-[#FE5833]'>
            Eliminar perfil
          </span>
          <span className='pl-[5px] font-darker-grotesque font-semibold text-[#FE5833]'>
            Eliminar perfil
          </span>
          <span className='pl-[5px] font-darker-grotesque font-semibold text-[#FE5833]'>
            Eliminar perfil
          </span>
        </div>
      </div>
    </div>
  )
}
