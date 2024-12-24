export interface Database {
  id: number
  title: string
  date: string
  description: string
  category: string
  subject: string // Nueva propiedad "subject"
  onReadMore?: () => void // Propiedad opcional
}
