import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function requireAuth() {
  const token = (await cookies()).get('auth_token')

  if (!token) {
    redirect('/login')
  }

  return token.value
}
