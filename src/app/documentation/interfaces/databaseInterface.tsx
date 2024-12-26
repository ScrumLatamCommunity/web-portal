export interface Database {
  id: number
  title: string
  date: string
  description: string
  category: string
  subject: string
  onReadMore?: () => void // Propiedad opcional
}
