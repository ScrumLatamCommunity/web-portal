'use client'

import { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import axios from 'axios'

Chart.register(ArcElement, Tooltip, Legend, ChartDataLabels)

interface ChartData {
  labels: string[]
  datasets: {
    data: number[]
    backgroundColor: string[]
  }[]
}

interface PieChartProps {
  token: string | null
}

export const PieChart = ({ token }: PieChartProps) => {
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: [{ data: [], backgroundColor: [] }]
  })

  useEffect(() => {
    if (!token) {
      console.warn('No hay token disponible.')
      return
    }

    console.log('Usando token:', token)

    axios
      .get('http://localhost:8002/api/v1/admin/stats?filters=country', {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((response) => {
        console.log('Respuesta de la API:', response.data)

        if (!response.data.country || !Array.isArray(response.data.country)) {
          console.warn("No hay datos disponibles en 'role'.")
          return
        }

        const roles = response.data.country
        const labels = roles.map((r: any) => r.country)
        const data = roles.map((r: any) => parseFloat(r.count))
        const colors = ['#FE5833', '#345081', '#FF9F8A', '#C4CCDA']

        setChartData({
          labels,
          datasets: [{ data, backgroundColor: colors }]
        })
      })
      .catch((error) => console.error('Error fetching data:', error))
  }, [token])

  return (
    <div style={{ width: '164px', height: '164px' }}>
      <Pie
        data={chartData}
        options={{
          plugins: {
            legend: { display: false },
            datalabels: {
              color: '#fff',
              font: { size: 12, weight: 'bold' },
              formatter: (value: number) => `${value}%`
            }
          },
          maintainAspectRatio: false
        }}
      />
    </div>
  )
}
