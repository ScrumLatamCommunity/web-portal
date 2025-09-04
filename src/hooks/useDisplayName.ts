import { useAuth } from '@/app/context/AuthContext'

export const useDisplayName = () => {
  const { user } = useAuth()

  const getDisplayName = () => {
    console.log('🔍 [useDisplayName] User data:', user)
    console.log('🔍 [useDisplayName] User role:', user?.role)
    console.log('🔍 [useDisplayName] User firstName:', user?.firstName)

    // Para usuarios SPONSOR, mostrar el nombre de la empresa
    if (user?.role === 'SPONSOR' && (user as any)?.sponsorData?.companyName) {
      console.log(
        '🔍 [useDisplayName] Returning company name:',
        (user as any).sponsorData.companyName
      )
      return (user as any).sponsorData.companyName
    }

    // Para usuarios USER, ADMIN, EDITOR, mostrar el nombre personal
    if (user?.firstName) {
      console.log('🔍 [useDisplayName] Returning firstName:', user.firstName)
      return user.firstName
    }

    // Fallback to email username
    if (user?.email) {
      const emailUsername = user.email.split('@')[0]
      const result =
        emailUsername.charAt(0).toUpperCase() + emailUsername.slice(1)
      console.log('🔍 [useDisplayName] Returning email username:', result)
      return result
    }

    console.log('🔍 [useDisplayName] Returning fallback: Usuario')
    return 'Usuario'
  }

  return { getDisplayName }
}
