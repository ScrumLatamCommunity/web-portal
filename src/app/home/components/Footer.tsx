'use client'

import 'tailwindcss/tailwind.css'
import useIsLargeScreen from '@/hooks'
import { useState } from 'react'
import {
  Linkedin,
  Facebook,
  Instagram,
  ChevronDown,
  ChevronUp,
} from 'react-feather'
import Link from 'next/link'
import { TermsAndConditions } from '@/app/history/components/TermsAndConditions'
import { Modal } from '@/core/Modal'

export const Footer = () => {
  const [openModal, setOpenModal] = useState(false)
  const isLargeScreen = useIsLargeScreen(480)

  const [sections, setSections] = useState({
    community: false,
    training: false,
    documentation: false,
    news: false,
  })

  const toggleSection = (section: keyof typeof sections) => {
    if (!isLargeScreen) {
      setSections((prevSections) => ({
        ...prevSections,
        [section]: !prevSections[section],
      }))
    }
  }

  const handleModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <div className='flex flex-col'>
      <div className='flex flex-col items-center bg-black-10 px-4 py-6 text-white'>
        <div className='flex w-full max-w-[960px] flex-col gap-4'>
          <div className='flex w-full flex-col'>
            <img
              src={
                'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Logos%20comunidad%2Flogo_footer_orange.svg?alt=media&token=ddfda43a-c5e1-4fc3-b47f-df419d556597'
              }
              alt='logo'
              className='h-12 w-40 sm:h-16 sm:w-80'
            />
          </div>

          <div className='text-black flex flex-col flex-wrap justify-start gap-10 text-lg sm:flex-row sm:justify-end'>
            <div className='flex flex-col gap-4'>
              <div
                className='flex cursor-pointer gap-2 font-bold text-black-1 sm:flex-row'
                onClick={() => {
                  toggleSection('community')
                }}
              >
                Comunidad
                {!isLargeScreen &&
                  (sections.community ? <ChevronUp /> : <ChevronDown />)}
              </div>
              {(isLargeScreen || sections.community) && (
                <>
                  <Link href='/history'>
                    <span className='font-light'>Conócenos</span>
                  </Link>
                  <span className='font-light'>¿Quiénes somos?</span>
                </>
              )}
            </div>

            <div className='flex flex-col gap-4'>
              <div
                className='flex cursor-pointer gap-2 font-bold text-black-1 sm:flex-row'
                onClick={() => {
                  toggleSection('training')
                }}
              >
                Entrenamiento
                {!isLargeScreen &&
                  (sections.training ? <ChevronUp /> : <ChevronDown />)}
              </div>
              {(isLargeScreen || sections.training) && (
                <>
                  <span className='font-light'>Eventos</span>
                  <span className='font-light'>Webinars</span>
                  <span className='font-light'>Talleres</span>
                </>
              )}
            </div>

            <div className='flex flex-col gap-4'>
              <div
                className='flex cursor-pointer gap-2 font-bold text-black-1 sm:flex-row'
                onClick={() => {
                  toggleSection('documentation')
                }}
              >
                Documentación
                {!isLargeScreen &&
                  (sections.documentation ? <ChevronUp /> : <ChevronDown />)}
              </div>
              {(isLargeScreen || sections.documentation) && <></>}
            </div>

            <div className='flex flex-col gap-4'>
              <div
                className='flex cursor-pointer gap-2 font-bold text-black-1 sm:flex-row'
                onClick={() => {
                  toggleSection('news')
                }}
              >
                Novedades
                {!isLargeScreen &&
                  (sections.news ? <ChevronUp /> : <ChevronDown />)}
              </div>
              {(isLargeScreen || sections.news) && <></>}
            </div>
          </div>

          <div className='mt-6 flex flex-col gap-3'>
            <span className='text-black sm:text-lg'>
              Síguenos en nuestras redes
            </span>
            <div className='flex gap-4'>
              <a
                href='https://www.facebook.com/scrumlatamcomunidad'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Facebook className='text-red-500' />
              </a>
              <a
                href='https://www.instagram.com/scrumlatamcomunidad/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Instagram className='text-red-500' />
              </a>
              <a
                href='https://www.linkedin.com/company/scrum-latam-comunidad'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Linkedin className='text-red-500' />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='text-black flex flex-col place-content-center gap-8 py-5 text-center font-semibold sm:flex-row sm:gap-12'>
        <span>© 2024 Scrumlatam. All rights reserved.</span>
        <span>Privacy Policy</span>
        <button onClick={handleModal}>Terms of Service</button>
        <Modal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
          title='Términos y Condiciones Scrum Latam'
        >
          <TermsAndConditions />
        </Modal>
      </div>
    </div>
  )
}
