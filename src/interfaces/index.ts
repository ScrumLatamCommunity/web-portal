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
  certificates: SponsorCertificate[]
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

export interface UpdateSponsorInput {
  companyName: string
  specialization: string[]
  descriptions: SponsorDescription[]
  web: string
  phone: string
  socials: string[]
  logo: string
  wppMessage: string
  status: string
  country: string[]
  certificatesSponsor: SponsorCertificate[]
  bannerWeb: string
  bannerMobile: string
}

export interface SponsorDescription {
  title: string
  description: string
}

export interface SponsorCertificate {
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
