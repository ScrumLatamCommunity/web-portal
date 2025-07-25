import React from 'react'
import SuccessIcon from '@/assets/successIcon'
import SadFaceIcon from '@/assets/sadfaceIcon'

export default function ConfirmModal({
  isOpen,
  message,
  onConfirm,
  onCancel
}: {
  isOpen: boolean
  message: string
  onConfirm: () => void
  onCancel: () => void
}) {
  if (!isOpen) return null
  return (
    <div className='bg-black fixed inset-0 z-50 flex items-center justify-center bg-opacity-40'>
      <div className='relative flex min-h-[200px] w-[500px] flex-col items-center justify-center rounded-lg bg-white p-8 shadow-lg'>
        <button
          onClick={onCancel}
          className='absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-gray-300 text-gray-600 hover:bg-gray-400 hover:text-gray-800'
        >
          <svg
            width='16'
            height='16'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <line x1='18' y1='6' x2='6' y2='18'></line>
            <line x1='6' y1='6' x2='18' y2='18'></line>
          </svg>
        </button>
        <p className='mb-6 text-center font-darker-grotesque text-[22px] font-medium text-[#061D48]'>
          {message}
        </p>
        <div className='flex w-full items-center justify-center gap-4'>
          <button
            className='text-black w-[40%] rounded bg-[#FE2E00] px-4 py-2 font-bold text-white transition-colors hover:bg-gray-400'
            onClick={onCancel}
          >
            No
          </button>
          <button
            className='w-[40%] rounded bg-[#072356] px-4 py-2 font-bold text-white transition-colors hover:bg-[#0a2e6b]'
            onClick={onConfirm}
          >
            Sí, seguro
          </button>
        </div>
      </div>
    </div>
  )
}

export function SuccessModal({
  isOpen,
  message,
  type,
  onClose
}: {
  isOpen: boolean
  message: string
  type: 'save' | 'reject' | 'approve' | null
  onClose: () => void
}) {
  if (!isOpen) return null

  const renderIcon = () => {
    if (type === 'reject') {
      return <SadFaceIcon />
    }
    return <SuccessIcon />
  }

  return (
    <div className='bg-black fixed inset-0 z-50 flex items-center justify-center bg-opacity-40'>
      <div className='relative flex min-h-[200px] w-[500px] flex-col items-center justify-center rounded-lg bg-white p-8 shadow-lg'>
        <button
          onClick={onClose}
          className='absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-gray-300 text-gray-600 hover:bg-gray-400 hover:text-gray-800'
        >
          <svg
            width='16'
            height='16'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <line x1='18' y1='6' x2='6' y2='18'></line>
            <line x1='6' y1='6' x2='18' y2='18'></line>
          </svg>
        </button>
        <div className='mb-4 flex justify-center'>{renderIcon()}</div>
        <p className='mb-6 text-center font-darker-grotesque text-[22px] font-medium text-[#061D48]'>
          {message}
        </p>
      </div>
    </div>
  )
}
