import { flags } from '@/data/data'

export const Flags = () => {
  return (
    <div className='w-full self-center bg-black-4'>
      <div className='flex w-full h-[8vh] bg-black-5'>
        {flags.map((flag) => {
          return (
            <div key={flag.id}>
              <img
                alt={flag.name}
                className='w-[6vw] min-h-[16px] border border-black-12'
                src={flag.flag}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
