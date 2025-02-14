export interface SponsorPost {
  id: string
  sponsorId: string
  status: string
  title: string
  category: string
  validFrom: string
  validUntil?: string
  description: string
  link: string
  imageWeb: string
  imageMobile: string
  createdAt: string
  updatedAt: string
}

export interface SponsorsData {
  id: string
  userId: string
  status: string
  companyName: string
  specialization: string
  description: string
  web: string
  phone: string
  socials: string[]
  logo: string
  bannerWeb: string
  bannerMobile: string
  createdAt: string
  updatedAt: string
  posts?: SponsorPost[]
}

export interface User {
  id: string
  firstName: string
  lastName: string
  username: string
  email: string
  country: string
  membership: string
  role: string
  onboarding: boolean
  createdAt: string
  updatedAt: string
  sponsorsData?: SponsorsData
}
export const getUserById = async (id: string, token: string): Promise<User> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/users/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    )

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`)
    }

    const userData: User = await response.json()

    return userData
  } catch (error) {
    console.error('Error fetching user data:', error)
    throw new Error('No se pudo obtener la información del usuario')
  }
}

export const getAllSponsors = async (): Promise<SponsorsData[]> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/sponsors`,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`)
    }

    const sponsors: SponsorsData[] = await response.json()
    return sponsors
  } catch (error) {
    console.error('Error fetching sponsors:', error)
    throw new Error('No se pudo obtener la lista de sponsors')
  }
}
