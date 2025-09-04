const PhoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={`phone-icon ${props.className}`}
    {...props}
  >
    <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.1 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 3.1 4.18 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L9 9a16 16 0 0 0 6 6l1.36-1.35a2 2 0 0 1 2.11-.45 12.05 12.05 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'></path>
  </svg>
)
export default PhoneIcon
