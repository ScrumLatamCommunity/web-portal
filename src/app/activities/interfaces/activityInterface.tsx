export interface Activity {
  id: string
  type: string
  title: string
  facilitator?: string
  image: string
  date: string | Date
  time: string[]
  description: string
  status: string
  link: string
}
