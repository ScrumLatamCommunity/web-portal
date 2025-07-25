import React from 'react'

interface OrangeChevronProps {
  direction: 'left' | 'right'
  className?: string
  size?: number
}

const OrangeChevron: React.FC<OrangeChevronProps> = ({
  direction,
  className = '',
  size = 40
}) => (
  <svg
    width={size}
    height={size * 0.67}
    viewBox='0 0 30 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
    style={{ transform: direction === 'left' ? 'scaleX(-1)' : undefined }}
  >
    <path
      d='M8 3L20 10L8 17'
      stroke='#FE2E00'
      strokeWidth='4'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default OrangeChevron
