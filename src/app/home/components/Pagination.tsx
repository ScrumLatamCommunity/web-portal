import React from 'react'

interface PaginationProps {
  currentIndex: number
  itemsPerPage: number
  totalItems: number
  onPageChange: (index: number) => void
}

export const Pagination: React.FC<PaginationProps> = ({
  currentIndex,
  itemsPerPage,
  totalItems,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  return (
    <div className='mt-6 flex justify-center gap-2'>
      {Array.from({ length: totalPages }).map((_, pageIndex) => (
        <div
          key={pageIndex}
          className={`h-4 w-4 cursor-pointer rounded-full ${pageIndex === Math.floor(currentIndex / itemsPerPage) ? 'bg-red-400' : 'bg-gray-300'}`}
          onClick={() => onPageChange(pageIndex * itemsPerPage)}
        />
      ))}
    </div>
  )
}
