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
        <div className='flex w-[17%] flex-col items-center gap-2 border-r border-[#082965] bg-[#F5F5F5] pt-[30px]'>
          <div className={`flex w-full justify-center`}>
            <button
              className={`mb-3 flex w-[86%] items-center justify-between gap-4 rounded-2xl border border-[#000000] py-[18px] pl-[23px] pr-[16px] ${
                activeSection === 'profile' ? 'bg-[#FE5833]' : ''
              }`}
              onClick={() => setActiveSection('profile')}
            >
              <div
                className={`flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#FFEAE6] ${
                  activeSection === 'profile' ? 'bg-white' : ''
                }`}
              >
                <SponsorProfileIcon />
              </div>
              <span className='ml-6 flex flex-1 justify-start font-darker-grotesque text-[20px] font-bold'>
                Perfil
              </span>
              <ChevronRight height={20} width={20} />
            </button>
          </div>
          <div className={`flex w-full justify-center`}>
            <button
              className={`flex w-[86%] items-center justify-between rounded-2xl border border-[#000000] py-[12px] pl-[23px] pr-[16px] ${
                activeSection === 'posts' ? 'bg-[#FE5833]' : ''
              }`}
              onClick={() => setActiveSection('posts')}
            >
              <div
                className={`flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#FFEAE6] ${
                  activeSection === 'posts' ? 'bg-white' : ''
                }`}
              >
                <ImageIcon />
              </div>
              <span className='ml-[-10px] flex flex-1 self-start font-darker-grotesque text-[20px] font-bold'>
                Publicar Contenido
              </span>
              <ChevronRight height={20} width={20} />
            </button>
          </div>
        </div>
        <div className='ml-12 mt-12 flex w-[83%]'>
          {activeSection === 'profile' && <SponsorProfile />}
          {activeSection === 'posts' && <SponsorPosts />}
        </div>
      </div>
    </section>
  )
}
