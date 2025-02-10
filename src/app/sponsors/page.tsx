'use client'
import React, { useState } from 'react'
import { ChevronRight } from 'react-feather'
import SponsorProfile from './profile/sponsorProfile'
import SponsorProfileIcon from '@/assets/SponsorsProfileIcon'
import ImageIcon from '@/assets/ImageIcon'
import SponsorPosts from './posts/sponsorsPosts'
import SponsorProfileScrumIcon from '@/assets/ScrumLatamSponsorLogo'
import Link from 'next/link'
import SponsorWheelIcon from '@/assets/SponsorDashboardWheelIcon'

export default function SponsorsDashboard() {
  const [activeSection, setActiveSection] = useState('profile')

  return (
    <section className='flex max-w-[1980px] flex-col'>
      <div className='flex h-[107px] w-screen justify-between border border-[#000000] bg-[#F5F5F5] pl-12 pr-9'>
        <div className='flex w-full flex-row items-center gap-[22px]'>
          <Link href='/'>
            <SponsorProfileScrumIcon className='ml-12' />
          </Link>
          <span className='flex font-darker-grotesque text-[38px] font-bold text-[#082965]'>
            Dashboard
          </span>
          <SponsorWheelIcon className='ml-auto' />
        </div>
      </div>
      <div className='flex flex-row'>
        <div className='flex w-[20%] flex-col items-center gap-2 border-r border-[#082965] bg-[#F5F5F5] pt-[30px]'>
          <div className={`flex w-full justify-center`}>
            <button
              className={`mb-3 flex h-[75px] w-[86%] items-center justify-between gap-4 rounded-2xl border border-[#000000] py-[10px] md:pl-[16px] 2xl:pl-[23px] 2xl:pr-[16px] ${
                activeSection === 'profile' ? 'bg-[#FE5833]' : ''
              }`}
              onClick={() => setActiveSection('profile')}
            >
              <div
                className={`flex items-center justify-center rounded-full bg-[#FFEAE6] md:h-[32px] md:w-[32px] 2xl:h-[40px] 2xl:w-[40px] ${
                  activeSection === 'profile' ? 'bg-white' : ''
                }`}
              >
                <SponsorProfileIcon />
              </div>
              <span className='flex flex-row font-darker-grotesque font-bold md:ml-0 md:text-[18px] 2xl:text-[20px]'>
                Perfil
              </span>
              <ChevronRight height={30} width={30} />
            </button>
          </div>
          <div className={`flex w-full justify-center`}>
            <button
              className={`mb-3 flex h-[80px] w-[86%] items-center justify-between rounded-2xl border border-[#000000] md:py-[13px] md:pl-[16px] 2xl:py-[12px] 2xl:pl-[23px] 2xl:pr-[16px] ${
                activeSection === 'posts' ? 'bg-[#FE5833]' : ''
              }`}
              onClick={() => setActiveSection('posts')}
            >
              <div
                className={`flex items-center justify-center rounded-full bg-[#FFEAE6] md:h-[32px] md:w-[32px] 2xl:h-[40px] 2xl:w-[40px] ${
                  activeSection === 'posts' ? 'bg-white' : ''
                }`}
              >
                <ImageIcon />
              </div>
              <span className='flex flex-1 self-start font-darker-grotesque font-bold md:text-[18px] 2xl:text-[19px]'>
                Publicar Contenido
              </span>
              <ChevronRight height={30} width={30} />
            </button>
          </div>
        </div>
        <div className='ml-12 mt-12 flex w-[100%]'>
          {activeSection === 'profile' && <SponsorProfile />}
          {activeSection === 'posts' && <SponsorPosts />}
        </div>
      </div>
    </section>
  )
}
