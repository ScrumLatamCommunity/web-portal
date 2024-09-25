interface PrimaryButtonProps {
  label: string
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ label }) => {
  return (
    <button>
      <span>{label}</span>
    </button>
  )
}
