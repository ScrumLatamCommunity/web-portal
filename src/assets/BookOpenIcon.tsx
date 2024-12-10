import React from 'react'

type IconProps = {
  className?: string // Optional class for custom styles
  style?: React.CSSProperties // Optional inline styles
}

const BookOpenIcon: React.FC<IconProps> = ({ className, style }) => (
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
      d='M12 6v13M19 6c1.657 0 3 1.343 3 3v9c0 1.657-1.343 3-3 3-2.21 0-4.209-.894-6-2.344C11.209 20.106 9.21 21 7 21c-1.657 0-3-1.343-3-3V9c0-1.657 1.343-3 3-3 2.21 0 4.209.894 6 2.344C14.791 6.894 16.79 6 19 6z'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default BookOpenIcon
