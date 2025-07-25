import React from 'react'

const InfoIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className = '',
  ...props
}) => (
  <svg
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
    {...props}
  >
    <g clipPath='url(#clip0_6583_24004)'>
      <path
        d='M8.00004 14.6673C11.6819 14.6673 14.6667 11.6825 14.6667 8.00065C14.6667 4.31875 11.6819 1.33398 8.00004 1.33398C4.31814 1.33398 1.33337 4.31875 1.33337 8.00065C1.33337 11.6825 4.31814 14.6673 8.00004 14.6673Z'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8 10.6667V8'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8 5.33398H8.00667'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </g>
    <defs>
      <clipPath id='clip0_6583_24004'>
        <rect width='16' height='16' fill='white' />
      </clipPath>
    </defs>
  </svg>
)
export default InfoIcon
