import React from 'react'

const BookOpenIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='#345081'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='feather feather-book-open'
  >
    <path d='M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z'></path>
    <path d='M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z'></path>
  </svg>
)

export default BookOpenIcon
