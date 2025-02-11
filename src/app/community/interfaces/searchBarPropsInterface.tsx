export interface SearchBarProps {
  setQuery: (query: string) => void
  data: Array<{ id: number; title: string }>
  placeholder: string
}
