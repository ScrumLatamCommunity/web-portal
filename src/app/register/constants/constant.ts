const API_URL = process.env.NEXT_PUBLIC_API_URL!

export const MEMBERSHIP = [
  { name: 'Free', description: 'Free membership description' },
  { name: 'Premium', description: 'Premium membership description' },
  { name: 'VIP', description: 'VIP membership description' },
]

export const REGISTER_URL = `${API_URL}auth/register`
