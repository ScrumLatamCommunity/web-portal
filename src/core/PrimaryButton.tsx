interface PrimaryButtonProps {
  label: string
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ label }) => {
  return (
    <button className='bg-red-400 rounded-[20px] h-[49px] w-[185px] font-darker-grotesque'>
      <span className='text-black-1 font-darker-grotesque-3 text-6'>
        {label}
      </span>
    </button>
  )
}
