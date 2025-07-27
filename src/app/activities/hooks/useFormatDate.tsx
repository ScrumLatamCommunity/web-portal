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

  const [formattedTime, setFormattedTime] = useState('Calculando...')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!Array.isArray(time) || time.length !== 2 || !date) {
      setFormattedTime('Formato de tiempo inválido')
      setIsLoading(false)
      return
    }

    const [startTimeOriginal, endTimeOriginal] = time
    const rawCountry = userCountry?.trim() || DEFAULT_COUNTRY
    const destIso3 = countryNameToISO3[rawCountry] || DEFAULT_ISO3
    const destTimeZone = iso3ToTimeZone[destIso3] || DEFAULT_TIMEZONE

    const fallback = `${startTimeOriginal} a ${endTimeOriginal}`

    console.log(rawCountry)
    console.log(destIso3)

    const convertTime = (timeStr: string): string => {
      if (!/^\d{2}:\d{2}$/.test(timeStr))
        return `${startTimeOriginal} a ${endTimeOriginal}`

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
      const s = convertTime(startTimeOriginal)
      const e = convertTime(endTimeOriginal)

      console.log(`${s} a ${e}`)

      if (s === fallback || e === fallback) {
        setFormattedTime(`${startTimeOriginal} a ${endTimeOriginal}`)
      } else {
        setFormattedTime(`${s} a ${e}`)
      }
    } catch (err) {
      console.error('Error en conversión de hora:', err)
      setFormattedTime(`${startTimeOriginal} a ${endTimeOriginal}`)
    } finally {
      setIsLoading(false)
    }
  }, [date, JSON.stringify(time), userCountry]) // ahora evita bucles

  return { formattedTime, isLoading }
}
