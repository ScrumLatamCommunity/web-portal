const Skeleton = ({ className }: { className: string }) => {
  return (
    <div className={`animate-pulse rounded-lg bg-gray-200 ${className}`}></div>
  )
}

export default Skeleton
