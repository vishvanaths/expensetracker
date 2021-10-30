import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css'

const Chart = (props) => {
    const maxValue = Math.max(...props.dataPoints.map(dataPoint => dataPoint.value))
    return (
        <div className='chart'>
            {props.dataPoints.map(dataPoint => <ChartBar label={dataPoint.label} value={dataPoint.value} maxValue={maxValue}/>)}
        </div>
    )
}

export default Chart
