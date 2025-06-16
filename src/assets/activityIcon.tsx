import React from 'react'

const ActivityIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width='80'
    height='80'
    viewBox='0 0 80 80'
    xmlns='http://www.w3.org/2000/svg'
    fill='currentColor'
    stroke='currentColor'
    className={`x-icon ${props.className}`}
    {...props}
  >
    <path
      d='M63.3333 13.3333H16.6667C12.9848 13.3333 10 16.318 10 19.9999V66.6666C10 70.3485 12.9848 73.3333 16.6667 73.3333H63.3333C67.0152 73.3333 70 70.3485 70 66.6666V19.9999C70 16.318 67.0152 13.3333 63.3333 13.3333Z'
      stroke='#FE2E00'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M53.333 6.66675V20.0001'
      stroke='#FE2E00'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M26.667 6.66675V20.0001'
      stroke='#FE2E00'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M10 33.3333H70'
      stroke='#FE2E00'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default ActivityIcon
