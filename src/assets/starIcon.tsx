import React from 'react'

const StarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
      d='M40.0003 6.66675L50.3003 27.5334L73.3337 30.9001L56.667 47.1334L60.6003 70.0667L40.0003 59.2334L19.4003 70.0667L23.3337 47.1334L6.66699 30.9001L29.7003 27.5334L40.0003 6.66675Z'
      stroke='#FE2E00'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default StarIcon
