import React from 'react'

const UserIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
      d='M56.6663 70V63.3333C56.6663 59.7971 55.2616 56.4057 52.7611 53.9052C50.2606 51.4048 46.8692 50 43.333 50H16.6663C13.1301 50 9.73874 51.4048 7.23825 53.9052C4.73777 56.4057 3.33301 59.7971 3.33301 63.3333V70'
      stroke='#FE2E00'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M30.0003 36.6667C37.3641 36.6667 43.3337 30.6971 43.3337 23.3333C43.3337 15.9695 37.3641 10 30.0003 10C22.6365 10 16.667 15.9695 16.667 23.3333C16.667 30.6971 22.6365 36.6667 30.0003 36.6667Z'
      stroke='#FE2E00'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M76.667 70V63.3333C76.6648 60.3791 75.6815 57.5093 73.8715 55.1744C72.0616 52.8395 69.5274 51.1719 66.667 50.4333'
      stroke='#FE2E00'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M53.333 10.4333C56.2011 11.1677 58.7431 12.8357 60.5585 15.1744C62.3738 17.5131 63.3592 20.3894 63.3592 23.35C63.3592 26.3106 62.3738 29.1869 60.5585 31.5256C58.7431 33.8643 56.2011 35.5323 53.333 36.2667'
      stroke='#FE2E00'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default UserIcon
