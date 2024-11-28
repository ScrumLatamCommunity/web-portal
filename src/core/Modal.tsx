import React, { ReactNode, useEffect } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  title?: string
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])
  if (!isOpen) return null

  return (
    <>
      <div className='fixed inset-0 z-50 flex items-center justify-center bg-black-10 bg-opacity-50'>
        <div className='relative max-h-[80vh] w-[1008px] overflow-y-auto rounded-lg bg-white px-24 py-16 shadow-lg scrollbar scrollbar-thumb-black-8 scrollbar-thumb-rounded-full'>
          <div className='flex items-center justify-between p-4'>
            {title && (
              <h2 className='flex font-karla text-3xl font-bold text-red-500'>
                {title}
              </h2>
            )}
            <button className='mb-8' onClick={onClose}>
              <img
                alt='cerrar'
                className='h-[50px] w-[50px] gap-1'
                src='https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Reviews%20icons%2Fx.svg?alt=media&token=3fca622b-ce3c-436b-9372-0208bf399ba4'
              />
            </button>
          </div>
          <div className='p-4'>{children}</div>
        </div>
      </div>
    </>
  )
}
