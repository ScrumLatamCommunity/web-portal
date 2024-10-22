interface PrimaryButtonProps {
  label: string
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ label }) => (
  <button className='h-[49px] w-[185px] rounded-[20px] bg-red-400 font-darker-grotesque'>
    <span className='text-6 font-darker-grotesque-3 text-black-1'>{label}</span>
  </button>
)
