import React, { useState, useEffect } from 'react'
import Chart from 'react-apexcharts'
import { AiOutlineInfoCircle } from 'react-icons/ai'
// Legend:
// data --> array
// categories --> array
// on the top chart there is three div whith percentage--> indice1/pronostic1, indice2/pronostic2 and indice3/pronostic3
// indice1 --> string
// pronostic1 --> number
// indice2 --> string
// pronostic2 --> number
// indice3 --> string
// pronostic3 --> number
export const ChartBar = ({
  categories,
  data,
  title,
  indice1,
  indice2,
  indice3,
  pronostic1,
  pronostic2,
  pronostic3,
}) => {
  const [chartType, setChartType] = useState('bar')
  const [chartData, setChartData] = useState({ categories: [], series: [] })

  //   update 'data' and 'categories'
  useEffect(() => {
    setChartData({ categories, series: [{ data }] })
  }, [categories, data])

  //   console.log(data)
  //   console.log(categories)
  //   console.log(title)

  const options = {
    legend: {
      position: 'top',
    },
    tooltip: {
      enabled: true,
      enabledOnSeries: undefined,
      shared: true,
      followCursor: true,
      intersect: false,
      inverseOrder: false,
      custom: undefined,
      fillSeriesColor: false,
      theme: true,
      style: {
        fontSize: '14px',
        fontFamily: undefined,
        background: '#000',
        color: '#000',
      },
      onDatasetHover: {
        highlightDataSeries: false,
      },
      x: {
        show: true,
        format: 'dd MMM',
        formatter: undefined,
      },
      y: {
        formatter: value => {
          return new Intl.NumberFormat('en-US', {
            style: 'decimal',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }).format(value)
        },
      },
      z: {
        formatter: undefined,
        title: 'Size: ',
      },
      marker: {
        show: true,
      },
      items: {
        display: 'flex',
      },
      fixed: {
        enabled: false,
        position: 'topRight',
        offsetX: 0,
        offsetY: 0,
      },
    },
    stroke: {
      curve: 'smooth',
    },
    theme: {
      mode: 'light',
      palette: 'palette5',
      monochrome: {
        enabled: false,
        color: '#000',
        shadeTo: 'dark',
        shadeIntensity: 0.65,
      },
    },
    chart: {
      id: 'basic-bar',
      foreColor: '#374151',
      fontFamily: 'Amenable',
      toolbar: {
        show: false,
      },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
      zoom: {
        enabled: true,
        type: 'xy',
        autoScaleYaxis: true,
        zoomedArea: {
          fill: {
            color: '#90CAF9',
            opacity: 0.4,
          },
          stroke: {
            color: '#0D47A1',
            opacity: 0.4,
            width: 1,
          },
        },
      },
    },
    xaxis: {
      categories: categories,
      labels: {
        style: {
          colors: '#000',
          fontSize: '20px',
          fontFamily: 'Amenable',
        },
      },
    },
    yaxis: {
      show: false,
      labels: {
        style: {
          colors: '#9CA3AF',
        },
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '12px',
        fontWeight: 'bold',
        color: ['#000'],
      },
      background: {
        enabled: true,
        foreColor: '#000',
        borderRadius: 2,
        padding: 8,
        opacity: 0.9,
        borderWidth: 1,
        borderColor: '#fff',
      },
    },
    grid: {
      borderRadius: 30,
      padding: {
        top: 0,
        right: 50,
        bottom: 0,
        left: 50,
      },
      row: {
        colors: ['#e5e5e5', 'transparent'],
        opacity: 1,
      },
      column: {
        colors: ['#f8f8f8', 'transparent'],
      },
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
  }
  // 'series' on the axis 'y'. the data is an array
  const series = [
    {
      name: 'Max Rate',
      data: data,
    },
  ]
  // handle the state ChartType for will change the chart type
  const handleChartTypeChange = event => {
    console.log(event.target.value)
    setChartType(event.target.value)
  }
  // chart types for use in switch by will change the chart
  const chartTypes = [
    { value: 'bar', label: 'Bar' },
    { value: 'line', label: 'Line' },
    { value: 'area', label: 'Area' },
    { value: 'heatmap', label: 'Heatmap' },
    { value: 'scatter', label: 'Scatter' },
  ]
  // dropdown
  const chartOptions = chartTypes.map(chartType => (
    <option key={chartType.value} value={chartType.value}>
      {chartType.label}
    </option>
  ))

  // the logic for the change chart
  let chart
  switch (chartType) {
    case 'bar':
      chart = (
        <Chart
          key="bar"
          options={options}
          series={series}
          type="bar"
          width="100%"
        />
      )
      break
    case 'line':
      chart = (
        <Chart
          key="line"
          options={options}
          series={series}
          type="line"
          width="100%"
        />
      )
      break
    case 'area':
      chart = (
        <Chart
          key="area"
          options={options}
          series={series}
          type="area"
          width="100%"
        />
      )
      break
    case 'heatmap':
      chart = (
        <Chart
          key="heatmap"
          options={options}
          series={series}
          type="heatmap"
          width="100%"
        />
      )
      break
    case 'scatter':
      chart = (
        <Chart
          key="scatter"
          options={options}
          series={series}
          type="scatter"
          width="100%"
        />
      )
      break
    default:
      chart = (
        <Chart
          key="bar"
          options={options}
          series={series}
          type="bar"
          width="100%"
        />
      )
  }

  return (
    <div className="hover:shadow-xs m-2 rounded-3xl bg-opacity-90 px-8 py-4 text-black shadow-sm shadow-black backdrop-blur-2xl backdrop-filter hover:shadow-gulf-stream">
      <div className="mb-4 flex items-center justify-end">
        <label htmlFor="chart-type" className="mr-2 text-lg font-semibold">
          Graficos:
        </label>
        <select
          id="chart-type"
          value={chartType}
          onChange={handleChartTypeChange}
          className="rounded-2xl px-3 py-2 text-center outline-none hover:bg-gray-900 hover:bg-opacity-90 hover:text-white focus:shadow-md focus:shadow-black"
        >
          {chartOptions}
        </select>
      </div>
      {/* when we recieved props indice1 will render the follow div. 'indice1' is the first div on the chart top */}
      {indice1 && (
        <div className="gap-x-1 sm:flex sm:w-full sm:justify-start md:flex md:w-full md:justify-start lg:flex lg:w-3/6 lg:justify-start">
          <div className="m-1 flex w-2/6 flex-grow flex-col items-start rounded-3xl p-4 hover:bg-gulf-stream hover:bg-opacity-5 hover:shadow-sm hover:shadow-white">
            <h1 className="flex w-full items-center justify-stretch font-semibold xs:text-lg sm:text-lg md:text-lg lg:text-xl">
              {pronostic1}{' '}
              <AiOutlineInfoCircle className="bg-opacity-70 text-lg text-gray-900" />
            </h1>
            <strong className="font-bold text-blue-whale xs:text-4xl sm:text-4xl md:text-4xl lg:text-5xl ">{`${indice1}%`}</strong>
          </div>
          <div className="m-1 flex w-2/6 flex-grow flex-col items-start rounded-3xl p-4 hover:bg-gulf-stream hover:bg-opacity-5 hover:shadow-sm hover:shadow-white">
            <h1 className="flex w-full items-center justify-stretch font-semibold xs:text-lg sm:text-lg md:text-lg lg:text-xl">
              {pronostic2}{' '}
              <AiOutlineInfoCircle className="bg-opacity-70 text-lg text-gray-900" />
            </h1>
            <strong className="font-bold text-blue-whale xs:text-4xl sm:text-4xl md:text-4xl lg:text-5xl ">{`${indice2}%`}</strong>
          </div>
          <div className="m-1 flex w-2/6 flex-grow flex-col items-start rounded-3xl p-4 hover:bg-gulf-stream hover:bg-opacity-5 hover:shadow-sm hover:shadow-white">
            <h1 className="flex w-full items-center justify-stretch font-semibold xs:text-lg sm:text-lg md:text-lg lg:text-xl">
              {pronostic3}{' '}
              <AiOutlineInfoCircle className="bg-opacity-70 text-lg text-gray-900" />
            </h1>
            <strong className="font-bold text-blue-whale xs:text-4xl sm:text-4xl md:text-4xl lg:text-5xl ">{`${indice3}%`}</strong>
          </div>
        </div>
      )}
      <div className="easeout transition delay-150 duration-500 hover:shadow-sm hover:shadow-gulf-stream">
        {chart}
      </div>
    </div>
  )
}
