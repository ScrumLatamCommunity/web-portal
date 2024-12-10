import React from 'react'

type IconProps = {
  className?: string // Optional class for custom styles
  style?: React.CSSProperties // Optional inline styles
}

const GlobeIcon: React.FC<IconProps> = ({ className, style }) => (
  <svg
    className={className}
    fill='none'
    stroke='#345081'
    strokeWidth={2}
    style={style}
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M12 2a10 10 0 100 20 10 10 0 000-20zm0 0v20m0-20a10 10 0 110 20M2 12h20M12 2c-1.96 0-3.845.9-5.162 2.5A9.958 9.958 0 014 12c0 2.7 1.08 5.17 2.838 6.85C8.155 21.1 10.04 22 12 22M12 2c1.96 0 3.845.9 5.162 2.5A9.958 9.958 0 0120 12c0 2.7-1.08 5.17-2.838 6.85C15.845 21.1 13.96 22 12 22'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default GlobeIcon
