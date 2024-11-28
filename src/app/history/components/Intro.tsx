'use client'

import { Modal } from '@/core/Modal'
import { images } from '@/data/images_url'
import { useState } from 'react'
import { HistoryDescription } from './HistoryDescription'
import useIsLargeScreen from '@/hooks'

export const Intro = () => {
  const [openModal, setOpenModal] = useState(false)
  const isLargeScreen = useIsLargeScreen(768)

  const handleModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <div className='flex w-full px-14 py-16'>
      <div className='flex w-full flex-col justify-start gap-8'>
        <h1 className='flex font-karla text-3xl font-bold text-red-500'>
          Historia
        </h1>
        <div className='flex flex-col sm:flex-row'>
          <div className='inline-flex w-full items-baseline sm:w-3/5'>
            <p className='font-karla text-xl text-blue-8'>
              En enero de 2020, <strong>Rubén Darío Romero Chica</strong>, junto
              a Jacqueline Díaz, Jorge Abad, Lucho Salazar y Nakary Carrillo,
              fundaron la comunidad Scrum Latam desde Colombia. La idea era
              simple:{' '}
              <strong>
                crear un grupo de WhatsApp para el intercambio de ideas y
                conocimientos sobre Scrum,
              </strong>{' '}
              reuniendo tanto a principiantes como a expertos.
              {!isLargeScreen && (
                <button
                  className='ml-2 border-none pr-8 font-darker-grotesque text-sm font-semibold text-red-400'
                  onClick={handleModal}
                >
                  Seguir leyendo
                </button>
              )}
              {isLargeScreen && (
                <p className='font-karla text-xl text-blue-8'>
                  <br></br>
                  <br></br>
                  Durante la pandemia de COVID-19, la comunidad creció
                  rápidamente. Creamos espacios llamados Retro, encuentros
                  semanales donde los miembros compartían conocimientos y
                  experiencias...
                  <button
                    className='ml-2 border-none pr-8 font-darker-grotesque text-sm font-semibold text-red-400'
                    onClick={handleModal}
                  >
                    Seguir leyendo
                  </button>
                </p>
              )}
            </p>
            <Modal
              isOpen={openModal}
              onClose={() => setOpenModal(false)}
              title='Historia'
            >
              <HistoryDescription />
            </Modal>
          </div>
          <div className='flex w-full sm:w-2/5'>
            <img
              alt='history'
              className='h-[416px] w-[508px]'
              src={images.history}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
