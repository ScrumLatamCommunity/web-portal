import React from 'react'

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
      <div className='flex flex-col items-center rounded-lg bg-white p-8 shadow-lg'>
        <p className='mb-6 text-center text-lg font-semibold'>{message}</p>
        <div className='flex gap-4'>
          <button
            className='text-black rounded bg-gray-300 px-4 py-2 font-bold transition-colors hover:bg-gray-400'
            onClick={onCancel}
          >
            No
          </button>
          <button
            className='rounded bg-[#072356] px-4 py-2 font-bold text-white transition-colors hover:bg-[#0a2e6b]'
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
  onClose
}: {
  isOpen: boolean
  message: string
  onClose: () => void
}) {
  if (!isOpen) return null
  return (
    <div className='bg-black fixed inset-0 z-50 flex items-center justify-center bg-opacity-40'>
      <div className='flex flex-col items-center rounded-lg bg-white p-8 shadow-lg'>
        <p className='mb-6 text-center text-lg font-semibold'>{message}</p>
        <button
          className='mt-2 rounded bg-[#072356] px-6 py-2 font-bold text-white transition-colors hover:bg-[#0a2e6b]'
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  )
}
