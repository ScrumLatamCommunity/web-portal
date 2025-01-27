import React, { ReactNode, useEffect } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  title?: string
  modalClassName?: string
  contentClassName?: string
  backdropClassName?: string
  closeButtonClassName?: string
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  modalClassName = '',
  contentClassName = '',
  backdropClassName = '',
  closeButtonClassName = ''
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

  const handleBackdropClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <>
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black-10 bg-opacity-50 ${backdropClassName}`}
        onClick={handleBackdropClick}
      >
        {/* prettier-ignore */}
        <div
          className={`scrollbar-thin scrollbar-thumb-black-8 scrollbar-thumb-rounded-full relative flex max-h-[85vh] w-full justify-start overflow-y-auto rounded-lg bg-white shadow-lg sm:w-4/5 lg:w-3/5 ${modalClassName}`}
        >
          <div
            className={`flex w-full flex-col items-start gap-3 p-8 ${contentClassName}`}
          >
            <button
              className={`flex items-center justify-center self-end py-2 ${closeButtonClassName}`}
              onClick={onClose}
            >
              <img
                alt='cerrar'
                className='fixed h-6 w-6 gap-1 md:h-[50px] md:w-[50px]'
                src='https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Reviews%20icons%2Fx.svg?alt=media&token=3fca622b-ce3c-436b-9372-0208bf399ba4'
              />
            </button>
            {title && (
              <h2 className='flex font-karla text-3xl font-bold text-red-500 md:px-24'>
                {title}
              </h2>
            )}
            <div className='pb-10 pr-7 md:px-24'>{children}</div>
          </div>
        </div>
      </div>
    </>
  )
}
