import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class PieChartWithCustomization extends Component {
	render() {
		const options = {
			theme: "Dark3",
			animationEnabled: true,
			exportFileName: "New Year Resolutions",
			exportEnabled: true,
			title:{
				text: "Overall Practice Breakdown"
			},
			data: [{
				type: "pie",
				showInLegend: true,
				legendText: "{label}",
				toolTipContent: "{label}: <strong>{y}%</strong>",
				indexLabel: "{y}%",
				indexLabelPlacement: "inside",
				dataPoints: [
					{ y: 32, label: "Scales" },
					{ y: 22, label: "Etude" },
					{ y: 15, label: "Baroque" },
					{ y: 19, label: "Classical" },
					{ y: 5, label: "Contemprary" },
					{ y: 7, label: "Other" }
				]
			}]
		}
		
		return (
		<div className ="chart">
			
			<CanvasJSChart options = {options} 
			
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default PieChartWithCustomization;