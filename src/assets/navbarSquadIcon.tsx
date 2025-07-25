import React from 'react'

const SquadIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className = '',
  ...props
}) => (
  <svg
    viewBox='0 0 16 17'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
    {...props}
  >
    <g clipPath='url(#clip0_6583_23998)'>
      <path
        d='M11.3333 14.5V13.1667C11.3333 12.4594 11.0523 11.7811 10.5522 11.281C10.0521 10.781 9.37387 10.5 8.66663 10.5H3.33329C2.62605 10.5 1.94777 10.781 1.44767 11.281C0.947578 11.7811 0.666626 12.4594 0.666626 13.1667V14.5'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6.00004 7.83333C7.4728 7.83333 8.66671 6.63943 8.66671 5.16667C8.66671 3.69391 7.4728 2.5 6.00004 2.5C4.52728 2.5 3.33337 3.69391 3.33337 5.16667C3.33337 6.63943 4.52728 7.83333 6.00004 7.83333Z'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.3334 14.4993V13.1659C15.3329 12.5751 15.1363 12.0011 14.7743 11.5341C14.4123 11.0672 13.9055 10.7336 13.3334 10.5859'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10.6666 2.58594C11.2402 2.7328 11.7487 3.0664 12.1117 3.53414C12.4748 4.00188 12.6719 4.57716 12.6719 5.16927C12.6719 5.76138 12.4748 6.33666 12.1117 6.8044C11.7487 7.27214 11.2402 7.60574 10.6666 7.7526'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </g>
    <defs>
      <clipPath id='clip0_6583_23998'>
        <rect
          width='16'
          height='16'
          fill='white'
          transform='translate(0 0.5)'
        />
      </clipPath>
    </defs>
  </svg>
)
export default SquadIcon
