interface PrimaryButtonProps {
  label: string
  className?: string
  onClick?: () => void
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  label,
  className,
  onClick
}) => (
  <button className={`${className}`} onClick={onClick}>
    <span className='text-6 font-darker-grotesque-3 text-black-1'>{label}</span>
  </button>
)
