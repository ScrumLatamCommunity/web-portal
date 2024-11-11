interface PrimaryButtonProps {
  label: string
  className?: string
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  label,
  className,
}) => (
  <button
    className={`rounded-[20px] bg-red-400 px-5 py-[.5vw] font-darker-grotesque ${className}`}
  >
    <span className='text-6 font-darker-grotesque-3 text-black-1'>{label}</span>
  </button>
)
