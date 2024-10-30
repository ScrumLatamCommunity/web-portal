interface PrimaryButtonProps {
  label: string
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ label }) => (
  <button className='rounded-[20px] bg-red-400 px-5 py-[.5vw] font-darker-grotesque'>
    <span className='text-6 font-darker-grotesque-3 text-black-1'>{label}</span>
  </button>
)
