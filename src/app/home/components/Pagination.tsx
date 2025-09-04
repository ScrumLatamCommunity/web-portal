import React from 'react'

interface PaginationProps {
  currentIndex: number
  itemsPerPage: number
  onPageChange: (index: number) => void
  totalItems: number
}

export const Pagination: React.FC<PaginationProps> = ({
  currentIndex,
  itemsPerPage,
  onPageChange,
  totalItems
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  return (
    <div className='mb-10 mt-5 flex justify-center gap-2'>
      {Array.from({ length: totalPages }).map((_, pageIndex) => (
        <div
          key={pageIndex}
          className={`h-3 w-3 cursor-pointer rounded-full ${pageIndex === Math.floor(currentIndex / itemsPerPage) ? 'bg-[#082965]' : 'bg-gray-300'}`}
          onClick={() => onPageChange(pageIndex * itemsPerPage)}
        />
      ))}
    </div>
  )
}
