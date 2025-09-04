export interface ActivityUser {
  id: string
  firstName: string
  lastName: string
  username: string
  email: string
  membership: string
  role: string
  onboarding: boolean
  createdAt: string
  updatedAt: string
  profilePictureUrl: string | null
  country: string[]
  profilePictureCloudinaryId: string | null
}

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
  users?: ActivityUser[]
  inscriptions?: any[]
  recurrency?: string
  observation?: string | null
  createdAt?: string
  updatedAt?: string
}
