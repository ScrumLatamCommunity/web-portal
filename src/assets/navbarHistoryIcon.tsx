import React from 'react'

const HistoryIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
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
    <path
      d='M1.33337 2.5H5.33337C6.04062 2.5 6.71889 2.78095 7.21899 3.28105C7.71909 3.78115 8.00004 4.45942 8.00004 5.16667V14.5C8.00004 13.9696 7.78933 13.4609 7.41425 13.0858C7.03918 12.7107 6.53047 12.5 6.00004 12.5H1.33337V2.5Z'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M14.6667 2.5H10.6667C9.95942 2.5 9.28115 2.78095 8.78105 3.28105C8.28095 3.78115 8 4.45942 8 5.16667V14.5C8 13.9696 8.21071 13.4609 8.58579 13.0858C8.96086 12.7107 9.46957 12.5 10 12.5H14.6667V2.5Z'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
export default HistoryIcon
