export interface SearchBarProps {
  setQuery: (query: string) => void
  data: Array<{ id: number; companyName: string }>
  placeholder: string
}
