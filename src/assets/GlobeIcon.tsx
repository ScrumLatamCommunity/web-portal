import React from 'react'

const GlobeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={`globe-icon ${props.className}`}
    {...props}
  >
    <circle
      cx='12'
      cy='12'
      r='11'
      stroke='currentColor'
      strokeWidth='1.2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M2 12H22'
      stroke='currentColor'
      strokeWidth='1.2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 2C15.3137 2 18 8.26801 18 12C18 15.7319 15.3137 22 12 22C8.68629 22 6 15.7319 6 12C6 8.26801 8.68629 2 12 2Z'
      stroke='currentColor'
      strokeWidth='1.2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default GlobeIcon
