'use client'

import { images } from '@/data/images_url'
import React, { useState } from 'react'
import Image from 'next/image'
import { useAuth } from '@/app/context/AuthContext'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export const DesktopNavbar = () => {
  const { logout } = useAuth()
  const router = useRouter()
  const [showDropdown, setShowDropdown] = useState(false)

  function handleLogout() {
    logout()
    router.push('/login')
  }

  return (
    <div className='flex h-[80px] justify-between border border-[#000000] pl-3 pr-9'>
      <div className='flex items-center gap-2'>
        <Link href='/'>
          <Image
            alt='logo'
            className='flex cursor-pointer'
            height={47}
            src={images.superadmin[0]}
            width={47}
          />
        </Link>

        <Link href='/'>
          <span className='flex cursor-pointer font-darker-grotesque text-[34px] font-bold text-[#082965]'>
            Dashboard
          </span>
        </Link>
      </div>

      <div className='relative flex'>
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className='relative flex items-center'
        >
          <Image
            alt='settings'
            className='flex cursor-pointer'
            height={41}
            src={images.superadmin[1]}
            width={41}
          />
        </button>

        {showDropdown && (
          <div className='ring-black absolute right-0 top-[60px] w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-opacity-5'>
            <button
              onClick={handleLogout}
              className='block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100'
            >
              Cerrar Sesión
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
