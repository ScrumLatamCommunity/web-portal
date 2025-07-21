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
  web: string
  phone: string
  wppMessage: string
  socials: string[]
  logo: string
  certificates: Certificate[]
  bannerWeb: string
  bannerMobile: string
  createdAt: string
  updatedAt: string
  descriptions: SponsorDescription[]
  user: {
    email: string
    country: string[]
  }
}

export interface SponsorDescription {
  id: string
  sponsorId: string
  title: string
  description: string
}

export interface Certificate {
  id: string
  title: string
  url: string
}

export interface UserData {
  id: string
  firstName: string
  lastName: string
  username: string
  email: string
  country: string[]
  profilePictureUrl: string
  membership: string
  createdAt: string
}
