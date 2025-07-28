'use client'

import { useState, useEffect } from 'react'
import { Activity } from '../interfaces/activityInterface'

const iso3ToTimeZone: { [key: string]: string } = {
  ARG: 'America/Argentina/Buenos_Aires',
  CHL: 'America/Santiago',
  COL: 'America/Bogota',
  ESP: 'Europe/Madrid',
  PER: 'America/Lima',
  ECU: 'America/Guayaquil',
  GTM: 'America/Guatemala',
  PAN: 'America/Panama',
  CRI: 'America/Costa_Rica',
  NIC: 'America/Managua',
  SLV: 'America/El_Salvador',
  HND: 'America/Tegucigalpa',
  MEX: 'America/Mexico_City',
  VEN: 'America/Caracas',
  BOL: 'America/La_Paz',
  PRY: 'America/Asuncion',
  BRA: 'America/Sao_Paulo',
  CAN: 'America/Toronto',
  USA: 'America/New_York'
}

const countryNameToISO3: Record<string, string> = {
  Argentina: 'ARG',
  Chile: 'CHL',
  Colombia: 'COL',
  España: 'ESP',
  Perú: 'PER',
  Ecuador: 'ECU',
  Guatemala: 'GTM',
  Panamá: 'PAN',
  'Costa Rica': 'CRI',
  Nicaragua: 'NIC',
  Honduras: 'HND',
  México: 'MEX',
  Venezuela: 'VEN',
  Bolivia: 'BOL',
  Paraguay: 'PRY',
  Brasil: 'BRA',
  Canadá: 'CAN',
  'Estados Unidos': 'USA'
}

const DEFAULT_TIMEZONE = 'America/Bogota'
const DEFAULT_ISO3 = 'COL'
const DEFAULT_COUNTRY = 'Colombia'

export const useTimeConverter = (activity: Activity, userCountry?: string) => {
  const { date, time } = activity
  console.log('userCountry:', userCountry)
  console.log('activity.time:', time)
  console.log('activity.time type:', typeof time)
  console.log('activity.time isArray:', Array.isArray(time))
  if (Array.isArray(time)) {
    console.log('activity.time length:', time.length)
    console.log('activity.time content:', time)
  }

  const [formattedTime, setFormattedTime] = useState('Calculando...')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Función para extraer los horarios del string
    const extractTimesFromString = (
      timeString: string
    ): { startTime: string; endTime: string } | null => {
      if (typeof timeString !== 'string') {
        console.log('Time no es string:', typeof timeString, timeString)
        return null
      }

      console.log('Procesando timeString:', timeString)

      // Remover llaves si existen
      const cleanTimeString = timeString.replace(/[{}]/g, '').trim()
      console.log('TimeString limpio:', cleanTimeString)

      // Buscar el patrón "HH:MM a HH:MM" - más flexible
      const timePattern = /(\d{1,2}:\d{2})\s*a\s*(\d{1,2}:\d{2})/
      const match = cleanTimeString.match(timePattern)

      console.log('Match encontrado:', match)

      if (match) {
        return {
          startTime: match[1],
          endTime: match[2]
        }
      }

      // Si no funciona el patrón anterior, intentar con espacios más flexibles
      const flexiblePattern = /(\d{1,2}:\d{2}).*?(\d{1,2}:\d{2})/
      const flexibleMatch = cleanTimeString.match(flexiblePattern)

      console.log('Flexible match:', flexibleMatch)

      if (flexibleMatch) {
        return {
          startTime: flexibleMatch[1],
          endTime: flexibleMatch[2]
        }
      }

      console.log('No se pudo extraer horarios del string:', timeString)
      return null
    }

    // Manejar tanto string como string[]
    let times: { startTime: string; endTime: string } | null = null

    if (Array.isArray(time) && time.length === 1) {
      // Si es un array con un string como ['19:00 a 20:30']
      console.log('Procesando como array con string:', time)
      times = extractTimesFromString(time[0])
    } else if (Array.isArray(time) && time.length === 2) {
      // Si es un array como define la interfaz original
      console.log('Procesando como array:', time)
      times = {
        startTime: time[0],
        endTime: time[1]
      }
    } else if (typeof time === 'string') {
      // Si es un string como viene de la base de datos
      console.log('Procesando como string:', time)
      times = extractTimesFromString(time)
    } else {
      console.log('Tipo de time no reconocido:', typeof time, time)
    }

    if (!times || !date) {
      console.log('Times o date inválidos:', { times, date })
      setFormattedTime('Formato de tiempo inválido')
      setIsLoading(false)
      return
    }

    const { startTime: startTimeOriginal, endTime: endTimeOriginal } = times
    const rawCountry = userCountry?.trim() || DEFAULT_COUNTRY
    const destIso3 = countryNameToISO3[rawCountry] || DEFAULT_ISO3
    const destTimeZone = iso3ToTimeZone[destIso3] || DEFAULT_TIMEZONE

    const fallback = `${startTimeOriginal} a ${endTimeOriginal}`

    console.log('País:', rawCountry)
    console.log('ISO3:', destIso3)
    console.log('Horarios originales:', startTimeOriginal, 'a', endTimeOriginal)

    const convertTime = (timeStr: string): string => {
      if (!/^\d{1,2}:\d{2}$/.test(timeStr)) {
        return timeStr
      }

      const today = new Date()
      const [hour, minute] = timeStr.split(':').map(Number)

      // Hora base: Bogotá (UTC-5)
      const colombiaDate = new Date(
        Date.UTC(
          today.getFullYear(),
          today.getMonth(),
          today.getDate(),
          hour + 5,
          minute
        )
      )

      // Fecha en zona Colombia (para referencia)
      const baseDateStr = new Intl.DateTimeFormat('en-CA', {
        timeZone: DEFAULT_TIMEZONE,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }).format(colombiaDate)

      // Fecha en zona destino
      const targetDateStr = new Intl.DateTimeFormat('en-CA', {
        timeZone: destTimeZone,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }).format(colombiaDate)

      const timeFormatted = new Intl.DateTimeFormat('es-CO', {
        timeZone: destTimeZone,
        hour12: false,
        hour: '2-digit',
        minute: '2-digit'
      }).format(colombiaDate)

      const dayDiff = targetDateStr > baseDateStr ? ' (+1 día)' : ''

      return `${timeFormatted}${dayDiff}`
    }

    try {
      setIsLoading(true)
      const startTimeConverted = convertTime(startTimeOriginal)
      const endTimeConverted = convertTime(endTimeOriginal)

      console.log(
        'Horarios convertidos:',
        startTimeConverted,
        'a',
        endTimeConverted
      )

      if (
        startTimeConverted === startTimeOriginal &&
        endTimeConverted === endTimeOriginal
      ) {
        setFormattedTime(`${startTimeOriginal} a ${endTimeOriginal}`)
      } else {
        setFormattedTime(`${startTimeConverted} a ${endTimeConverted}`)
      }
    } catch (err) {
      console.error('Error en conversión de hora:', err)
      setFormattedTime(`${startTimeOriginal} a ${endTimeOriginal}`)
    } finally {
      setIsLoading(false)
    }
  }, [date, time, userCountry])

  return { formattedTime, isLoading }
}
