import React from 'react'
import { MEMBERSHIP } from '../constants/constant'
import { MembershipModalProps } from '../interface/registerInterface'

const MembershipModal: React.FC<MembershipModalProps> = ({
  isOpen,
  onClose,
  onSelect
}) => {
  if (!isOpen) return null

  return (
    <div className='bg-black fixed inset-0 flex items-center justify-center bg-opacity-50'>
      <div className='rounded bg-white p-6 shadow-lg'>
        <h2 className='mb-4 text-xl'>Select a Membership</h2>
        <div className='grid grid-cols-1 gap-4'>
          {MEMBERSHIP.map((membership) => (
            <div
              key={membership.name}
              className='cursor-pointer rounded border p-4 hover:bg-gray-100'
              onClick={() => {
                onSelect(membership.name)
                onClose()
              }}
            >
              <h3 className='text-lg font-bold'>{membership.name}</h3>
              <p>{membership.description}</p>
            </div>
          ))}
        </div>
        <button
          onClick={onClose}
          className='mt-4 rounded bg-red-500 px-4 py-2 text-white'
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default MembershipModal
