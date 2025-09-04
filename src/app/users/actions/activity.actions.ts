'use server'

import { setupAxios } from '@/config/axios.setup'

export async function getAllActivities({ userId }: { userId: string }) {
  const axiosInstance = setupAxios({})

  try {
    const response = await axiosInstance.get(`/activities/user/${userId}`)

    if (response.status !== 200) {
      return {
        success: false,
        error: 'Error al obtener las actividades'
      }
    }

    return {
      success: true,
      data: response.data
    }
  } catch (error) {
    console.error('Error al obtener las actividades:', error)
    return {
      success: false,
      error: 'Error al obtener las actividades'
    }
  }
}
