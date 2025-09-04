export interface ProductServiceFeatureInterface {
  sponsorId: string
  title: string
  flag: string
  description: string
  image: string
  linkTitle: string
  highlights: string[] // Nuevo array para las líneas debajo del título
  socialUrls?: {
    // Opcional: URLs de redes sociales
    email?: string
    website?: string
    facebook?: string
    instagram?: string
    linkedin?: string
    phone?: string
  }
}
