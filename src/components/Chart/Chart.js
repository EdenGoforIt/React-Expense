import React from 'react';
import ChartBar from './ChartBar/ChartBar';
import './Chart.css';

const Chart = (props) => {
	const dataPointValue = props.dataPoints.map((x) => x.value);
	const totalMaximum = Math.max(...dataPointValue);

	return (
		<div className='chart'>
			{props.dataPoints.map((dataPoint) => (
				<ChartBar
					key={dataPoint.id}
					value={dataPoint.value}
					maxValue={totalMaximum}
					label={dataPoint.label}
				/>
			))}
		</div>
	);
};

export default Chart;
