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

export const PieChart = ({ chartData }: { chartData: ChartData }) => {
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
