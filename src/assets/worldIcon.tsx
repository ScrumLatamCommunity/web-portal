import React from 'react'

const WorldIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
      d='M40.0003 73.3334C58.4098 73.3334 73.3337 58.4096 73.3337 40.0001C73.3337 21.5906 58.4098 6.66675 40.0003 6.66675C21.5908 6.66675 6.66699 21.5906 6.66699 40.0001C6.66699 58.4096 21.5908 73.3334 40.0003 73.3334Z'
      stroke='#FE2E00'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M6.66699 40H73.3337'
      stroke='#FE2E00'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M40.0003 6.66675C48.3379 15.7946 53.0762 27.6402 53.3337 40.0001C53.0762 52.36 48.3379 64.2056 40.0003 73.3334C31.6627 64.2056 26.9245 52.36 26.667 40.0001C26.9245 27.6402 31.6627 15.7946 40.0003 6.66675V6.66675Z'
      stroke='#FE2E00'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default WorldIcon
