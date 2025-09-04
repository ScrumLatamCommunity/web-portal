import { SponsorData } from '@/interfaces'

export interface SearchBarProps {
  setQuery: (query: string) => void
  data?: SponsorData[]
  placeholder: string
}
