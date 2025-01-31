const API_URL = process.env.NEXT_PUBLIC_API_URL!

export const MEMBERSHIP = [
  {
    id: 1,
    name: 'Free',
    description: 'Free membership description',
    disabled: false
  },
  {
    id: 2,
    name: 'Premium',
    description: 'Premium membership description',
    disabled: true
  },
  {
    id: 3,
    name: 'VIP',
    description: 'VIP membership description',
    disabled: true
  }
]

export const REGISTER_URL = `${API_URL}auth/register`
