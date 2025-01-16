const API_URL = process.env.NEXT_PUBLIC_API_URL!

export const MEMBERSHIP = [
  { id: 1, name: 'Free', description: 'Free membership description' },
  { id: 2, name: 'Premium', description: 'Premium membership description' },
  { id: 3, name: 'VIP', description: 'VIP membership description' },
]

export const REGISTER_URL = `${API_URL}auth/register`
