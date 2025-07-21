'use client'

import 'tailwindcss/tailwind.css'
import useIsLargeScreen from '@/hooks'
import { useState } from 'react'
import { Linkedin, Facebook, Instagram } from 'react-feather'
import Link from 'next/link'
import { TermsAndConditions } from '@/app/history/components/TermsAndConditions'
import { Modal } from '@/core/Modal'
import { usePathname } from 'next/navigation'
import scrumFooterLogo from '@/assets/logo blanco (footer).png'
import Image from 'next/image'

export const Footer = () => {
  const pathname = usePathname()
  const hiddenLayoutRoutes = [
    '/sponsors',
    '/super-admin-dashboard',
    '/users',
    '/users/activities',
    '/register',
    '/login',
    '/onboarding/travel'
  ]
  const hideLayout = hiddenLayoutRoutes.some((route) =>
    pathname.startsWith(route)
  )
  const [openModal, setOpenModal] = useState(false)

  const handleModal = () => {
    setOpenModal(!openModal)
  }

  if (hideLayout) {
    return null
  }

  return (
    <div className='flex flex-col align-top'>
      <div className='flex flex-col items-center justify-evenly border-[#082965] bg-[#082965] px-4 pb-16 pt-10 text-white sm:items-center md:flex-row'>
        <div className='flex flex-col gap-4 border-[#082965] pb-5 md:pb-0'>
          <div className='flex w-full flex-col'>
            <Image
              src={scrumFooterLogo}
              alt='logo'
              height={800}
              width={800}
              className='h-18 w-72 pb-6 sm:h-20 sm:w-80 sm:pb-0'
            />
            <div className='mt-6 flex flex-row justify-center gap-3 md:justify-start'>
              <span className='text-black font-normal sm:text-lg'>
                Síguenos
              </span>
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
        <div className='flex flex-col-reverse flex-wrap justify-center gap-x-5 gap-y-10 border-[#082965] text-lg sm:flex-row sm:justify-end sm:gap-x-16 md:flex-row md:gap-x-56 2xl:flex-row 2xl:gap-x-96'>
          <div className='grid grid-cols-2 gap-4'>
            <div className='flex flex-col items-center justify-center sm:items-start'>
              <Link href='/community/squads'>
                <div className='flex cursor-pointer gap-2 font-normal text-black-1 sm:flex-row'>
                  Quiénes Somos
                </div>
              </Link>
              <Link href='/activities'>
                <div className='flex cursor-pointer gap-2 font-normal text-black-1 sm:flex-row'>
                  Actividades
                </div>
              </Link>
            </div>
            <div>
              <button className='font-normal text-white' onClick={handleModal}>
                Términos y condiciones
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col place-content-end gap-8 border-[#082965] bg-[#082965] py-5 text-center text-[15px] font-normal text-white sm:flex-row sm:justify-evenly'>
        <span>© 2025 Scrumlatam. Todos los derechos reservados</span>
      </div>

      <TermsAndConditions
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </div>
  )
}
