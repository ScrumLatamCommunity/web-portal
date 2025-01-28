'use client'
import React, { Suspense } from 'react'
import { MEMBERSHIP } from '../../constants/constant'
import { useRouter, useSearchParams } from 'next/navigation'

function MembershipComponent() {
  const searchParams = useSearchParams()
  const isModalOpen = searchParams.get('modal') === 'membership'
  const router = useRouter()

  if (!isModalOpen) return null

  return (
    <div className='bg-black fixed inset-0 z-10 flex items-center justify-center bg-opacity-50'>
      <div className='bg-black fixed inset-0 flex items-center justify-center bg-opacity-50'>
        <div className='rounded bg-white p-6 shadow-lg'>
          <h2 className='mb-4 text-xl'>Select a Membership</h2>
          <div className='grid grid-cols-1 gap-4'>
            {MEMBERSHIP.map((membership) => (
              <div
                key={membership.id}
                className={`cursor-pointer rounded border p-4 hover:bg-gray-100 ${
                  membership.disabled ? 'cursor-not-allowed opacity-50' : ''
                }`}
                onClick={() =>
                  !membership.disabled &&
                  router.replace(`/register?membership=${membership.name}`)
                }
              >
                <h3 className='text-lg font-bold'>{membership.name}</h3>
                <p>{membership.description}</p>
              </div>
            ))}
          </div>
          <button
            className='mt-4 rounded bg-red-500 px-4 py-2 text-white'
            onClick={() => router.replace('/register')}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default function RegisterForm() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MembershipComponent />
    </Suspense>
  )
}
