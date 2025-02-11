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
      .get(
        'http://localhost:8002/api/v1/admin/stats?filters=role,country,membership',
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      )
      .then((response) => {
        console.log('Respuesta de la API:', response.data)

        if (!response.data.role || !Array.isArray(response.data.role)) {
          console.warn("No hay datos disponibles en 'role'.")
          return
        }

        const roles = response.data.role
        const labels = roles.map((r: any) => r.role)
        const data = roles.map((r: any) => parseFloat(r.percentage))
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
