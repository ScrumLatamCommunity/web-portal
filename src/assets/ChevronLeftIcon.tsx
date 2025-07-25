import React from 'react'

interface ChevronLeftIconProps {
  className?: string
  width?: number
  height?: number
}

const ChevronLeftIcon: React.FC<ChevronLeftIconProps> = ({
  className = '',
  width = 32,
  height = 32
}) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 32 32'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
  >
    <path
      d='M20 8L12 16L20 24'
      stroke='#082965'
      strokeWidth='2.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default ChevronLeftIcon
