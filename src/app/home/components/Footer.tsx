'use client'

import 'tailwindcss/tailwind.css'
import useIsLargeScreen from '@/hooks'
import { useState } from 'react'
import { Linkedin, Facebook, Instagram } from 'react-feather'
import Link from 'next/link'
import { TermsAndConditions } from '@/app/history/components/TermsAndConditions'
import { Modal } from '@/core/Modal'
import { usePathname } from 'next/navigation'
import scrumFooterLogo from '@/assets/ScrumLatamFooterLogo.png'
import Image from 'next/image'
import GlobeIcon from '@/assets/GlobeIcon'

export const Footer = () => {
  const pathname = usePathname()
  const hiddenLayoutRoutes = ['/sponsors', '/super-admin-dashboard']
  const hideLayout = hiddenLayoutRoutes.some((route) =>
    pathname.startsWith(route)
  )
  const [openModal, setOpenModal] = useState(false)
  const isLargeScreen = useIsLargeScreen(480)

  const [sections, setSections] = useState({
    community: false,
    training: false,
    documentation: false,
    news: false
  })

  const handleModal = () => {
    setOpenModal(!openModal)
  }

  if (hideLayout) {
    return null
  }

  return (
    <div className='flex flex-col align-top'>
      <div className='flex flex-col items-center justify-evenly bg-[#082965] px-4 pb-16 pt-10 text-white sm:items-start md:flex-row'>
        <div className='flex flex-col gap-4 pb-5 md:pb-0'>
          <div className='flex w-full flex-col'>
            <Image
              src={scrumFooterLogo}
              alt='logo'
              height={800}
              width={800}
              className='h-15 w-60 pb-6 sm:h-16 sm:w-80 sm:pb-0'
            />
          </div>
        </div>
        <div className='flex flex-col-reverse flex-wrap justify-start gap-x-5 gap-y-10 text-lg sm:flex-row sm:justify-end sm:gap-x-16 md:flex-row md:gap-x-56 2xl:flex-row 2xl:gap-x-96'>
          <div className='flex flex-col gap-4'>
            <Link href='/community/squads'>
              <div className='flex cursor-pointer gap-2 font-[600] text-black-1 sm:flex-row'>
                Quiénes Somos
              </div>
            </Link>
            <Link href='/activities'>
              <div className='flex cursor-pointer gap-2 font-[600] text-black-1 sm:flex-row'>
                Actividades
              </div>
            </Link>
            <div className='flex flex-col gap-4'>
              <button className='font-[600] text-white' onClick={handleModal}>
                Términos y condiciones
              </button>
              <Modal
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
                title='Términos y Condiciones'
                contentClassName='justify-start gap-[10px]'
              >
                <TermsAndConditions />
              </Modal>
            </div>
          </div>
          <div className='mt-6 flex flex-row justify-start gap-3'>
            <span className='text-black font-[600] sm:text-lg'>Síguenos</span>
            <div className='flex flex-row gap-4 md:pl-8'>
              <a
                href='https://www.facebook.com/scrumlatamcomunidad'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Facebook className='text-white' />
              </a>
              <a
                href='https://www.instagram.com/scrumlatamcomunidad/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Instagram className='text-white' />
              </a>
              <a
                href='https://www.linkedin.com/company/scrum-latam-comunidad'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Linkedin className='text-white' />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col place-content-end gap-8 bg-[#082965] py-5 text-center text-[15px] font-semibold text-white sm:flex-row sm:justify-evenly'>
        <span>© 2025 Scrumlatam. Todos los derechos reservados.</span>
      </div>
    </div>
  )
}
