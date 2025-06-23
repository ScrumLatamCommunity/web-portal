interface Event {
  title: string
  description: string
  date: string | Date
  time: string[]
  link: string
}

/**
 * Genera un enlace de Google Calendar a partir de los datos de un evento.
 * @param event - El objeto del evento con todos sus detalles.
 * @returns Un string con la URL para crear el evento en Google Calendar.
 */
export const generateGoogleCalendarLink = (event: Event): string => {
  // 1. Parsear la fecha y hora. Asumimos que la hora original siempre es de Colombia (COT, UTC-5)
  const timeRegex = /(\d{2}:\d{2})\s*-\s*(\d{2}:\d{2})/
  const match = event.time[0].match(timeRegex)

  if (!match) return '' // Si no hay hora, no se puede generar el enlace.

  const startTimeOriginal = match[1] // ej: "19:00"
  const endTimeOriginal = match[2] // ej: "20:00"

  const eventDateStr =
    typeof event.date === 'string'
      ? event.date
      : event.date.toISOString().split('T')[0]

  // 2. Crear fechas en la zona horaria de origen (Colombia UTC-5)
  const startDate = new Date(`${eventDateStr}T${startTimeOriginal}:00-05:00`)
  const endDate = new Date(`${eventDateStr}T${endTimeOriginal}:00-05:00`)

  // 3. Convertir a formato UTC que Google Calendar necesita (YYYYMMDDTHHMMSSZ)
  const formatToGoogleUTC = (date: Date) => {
    return date.toISOString().replace(/[-:.]/g, '').slice(0, -4) + 'Z'
  }

  const googleStartDate = formatToGoogleUTC(startDate)
  const googleEndDate = formatToGoogleUTC(endDate)

  // 4. Construir la URL con los parámetros codificados
  const baseUrl = 'https://www.google.com/calendar/render?action=TEMPLATE'
  const params = new URLSearchParams({
    text: event.title,
    dates: `${googleStartDate}/${googleEndDate}`,
    details: `${event.description}\n\nEnlace del evento: ${event.link}`,
    location: 'Evento Online'
  })

  return `${baseUrl}&${params.toString()}`
}
