import React from 'react'

interface ChevronRightIconProps {
  className?: string
  width?: number
  height?: number
}

const ChevronRightIcon: React.FC<ChevronRightIconProps> = ({
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
      d='M12 8L20 16L12 24'
      stroke='#082965'
      strokeWidth='2.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default ChevronRightIcon
