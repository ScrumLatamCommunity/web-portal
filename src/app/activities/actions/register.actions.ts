import { setupAxios } from '../../../config/axios.setup'

export async function registerActivity(activityId: string, userId: string) {
  const axiosInstance = setupAxios({})

  try {
    const response = await axiosInstance.post(
      `/activities/${activityId}/register`,
      {
        userId: userId
      }
    )

    return {
      success: true,
      data: response.data
    }
  } catch (error) {
    console.error('Error al registrar la actividad:', error)
    return {
      success: false,
      error: error
    }
  }
}
