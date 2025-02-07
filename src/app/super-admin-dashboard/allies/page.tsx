'use client'

import React from 'react'
import { CommunitySponsors } from './components'
import EditProfile from './components/editProfile'

export default function AlliesPage() {
  return (
    <main className='flex flex-col justify-center pl-2 pt-[55px]'>
      <CommunitySponsors />
      <EditProfile />
    </main>
  )
}
