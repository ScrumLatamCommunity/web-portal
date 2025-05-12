export enum METHODS {
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE'
}
export interface SponsorData {
  id: string
  userId: string
  status: string
  companyName: string
  specialization: string[]
  description: string
  web: string
  phone: string
  socials: string[]
  logo: string
  bannerWeb: string
  bannerMobile: string
  createdAt: string
  user: {
    id: string
    firstName: string
    lastName: string
    username: string
    email: string
    country: string
  }
}

export interface UserData {
  id: string
  firstName: string
  lastName: string
  username: string
  email: string
  country: string
  membership: string
  createdAt: string
}
