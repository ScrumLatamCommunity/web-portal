import React from 'react'

interface ChevronProps {
  className?: string
  width?: number
  height?: number
}

const NewChevronLeft = ({
  className,
  width = 12,
  height = 22
}: ChevronProps) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 12 22'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
  >
    <path
      d='M10 20L2 11L10 2'
      stroke='currentColor'
      strokeWidth='3'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default NewChevronLeft
