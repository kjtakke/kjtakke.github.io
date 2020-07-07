//######################################################################
//BAR CHARTS

function addChartBar1(i){
	x = document.getElementById(webDevObjects[0].charts[i][0])
	CID = `Chart${[i]}`
	x.innerHTML = `
	<div align='center'>
		<div style='width:${screenWidthPercent(webDevObjects[0].charts[i][3])}px; height:${webDevObjects[0].charts[i][4]};'>
			<canvas id='${CID}' width='width:${screenWidthPercent(webDevObjects[0].charts[i][3])}px' height='${webDevObjects[0].charts[i][4]}px'></canvas>
		</div>
	</div>
	`
	var ctx = document.getElementById(CID).getContext('2d');
	var myChart = new Chart(ctx, {
		type: webDevObjects[0].charts[i][2],
		options: {
			legend: {
				display: true,
			},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true,
					},
				}]
			},
		},
		data: {

			labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
			datasets: [{
				label: webDevObjects[0].charts[i][6][0],
				data: webDevObjects[0].charts[i][5][0],
				backgroundColor: webDevObjects[0].charts[i][7][0],
				borderColor: webDevObjects[0].charts[i][8][0],
				borderWidth: 1,
				order: 1,
			},
			],
			labels: webDevObjects[0].charts[0][9],
		},
	});
}



function addChartBar2(i){
	x = document.getElementById(webDevObjects[0].charts[i][0])
	CID = `Chart${[i]}`
	x.innerHTML = `
	<div align='center'>
		<div style='width:${screenWidthPercent(webDevObjects[0].charts[i][3])}px; height:${webDevObjects[0].charts[i][4]};'>
			<canvas id='${CID}' width='width:${screenWidthPercent(webDevObjects[0].charts[i][3])}px' height='${webDevObjects[0].charts[i][4]}px'></canvas>
		</div>
	</div>
	`
	var ctx = document.getElementById(CID).getContext('2d');
	var myChart = new Chart(ctx, {
		type: webDevObjects[0].charts[i][2],
		options: {
			legend: {
				display: true,
			},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true,
					},
				}]
			},
		},
		data: {

			labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
			datasets: [{
				label: webDevObjects[0].charts[i][6][0],
				data: webDevObjects[0].charts[i][5][0],
				backgroundColor: webDevObjects[0].charts[i][7][0],
				borderColor: webDevObjects[0].charts[i][8][0],
				borderWidth: 1,
				order: 1,
			},

				DataPointsArray[0]
			],
			labels: webDevObjects[0].charts[0][9],
		},
	});
}




function addChartBar3(i){
	x = document.getElementById(webDevObjects[0].charts[i][0])
	CID = `Chart${[i]}`
	x.innerHTML = `
	<div align='center'>
		<div style='width:${screenWidthPercent(webDevObjects[0].charts[i][3])}px; height:${webDevObjects[0].charts[i][4]};'>
			<canvas id='${CID}' width='width:${screenWidthPercent(webDevObjects[0].charts[i][3])}px' height='${webDevObjects[0].charts[i][4]}px'></canvas>
		</div>
	</div>
	`
	var ctx = document.getElementById(CID).getContext('2d');
	var myChart = new Chart(ctx, {
		type: webDevObjects[0].charts[i][2],
		options: {
			legend: {
				display: true,
			},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true,
					},
				}]
			},
		},
		data: {

			labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
			datasets: [{
				label: webDevObjects[0].charts[i][6][0],
				data: webDevObjects[0].charts[i][5][0],
				backgroundColor: webDevObjects[0].charts[i][7][0],
				borderColor: webDevObjects[0].charts[i][8][0],
				borderWidth: 1,
				order: 1,
			},

				DataPointsArray[0],
        DataPointsArray[1]
			],
			labels: webDevObjects[0].charts[0][9],
		},
	});
}

function addChartBar4(i){
	x = document.getElementById(webDevObjects[0].charts[i][0])
	CID = `Chart${[i]}`
	x.innerHTML = `
	<div align='center'>
		<div style='width:${screenWidthPercent(webDevObjects[0].charts[i][3])}px; height:${webDevObjects[0].charts[i][4]};'>
			<canvas id='${CID}' width='width:${screenWidthPercent(webDevObjects[0].charts[i][3])}px' height='${webDevObjects[0].charts[i][4]}px'></canvas>
		</div>
	</div>
	`
	var ctx = document.getElementById(CID).getContext('2d');
	var myChart = new Chart(ctx, {
		type: webDevObjects[0].charts[i][2],
		options: {
			legend: {
				display: true,
			},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true,
					},
				}]
			},
		},
		data: {

			labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
			datasets: [{
				label: webDevObjects[0].charts[i][6][0],
				data: webDevObjects[0].charts[i][5][0],
				backgroundColor: webDevObjects[0].charts[i][7][0],
				borderColor: webDevObjects[0].charts[i][8][0],
				borderWidth: 1,
				order: 1,
			},

				DataPointsArray[0],
        DataPointsArray[1],
        DataPointsArray[2]
			],
			labels: webDevObjects[0].charts[0][9],
		},
	});
}

function addChartBar5(i){
	x = document.getElementById(webDevObjects[0].charts[i][0])
	CID = `Chart${[i]}`
	x.innerHTML = `
	<div align='center'>
		<div style='width:${screenWidthPercent(webDevObjects[0].charts[i][3])}px; height:${webDevObjects[0].charts[i][4]};'>
			<canvas id='${CID}' width='width:${screenWidthPercent(webDevObjects[0].charts[i][3])}px' height='${webDevObjects[0].charts[i][4]}px'></canvas>
		</div>
	</div>
	`
	var ctx = document.getElementById(CID).getContext('2d');
	var myChart = new Chart(ctx, {
		type: webDevObjects[0].charts[i][2],
		options: {
			legend: {
				display: true,
			},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true,
					},
				}]
			},
		},
		data: {

			labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
			datasets: [{
				label: webDevObjects[0].charts[i][6][0],
				data: webDevObjects[0].charts[i][5][0],
				backgroundColor: webDevObjects[0].charts[i][7][0],
				borderColor: webDevObjects[0].charts[i][8][0],
				borderWidth: 1,
				order: 1,
			},

      DataPointsArray[0],
      DataPointsArray[1],
      DataPointsArray[2],
      DataPointsArray[3]
			],
			labels: webDevObjects[0].charts[0][9],
		},
	});
}

function addChartBar6(i){
	x = document.getElementById(webDevObjects[0].charts[i][0])
	CID = `Chart${[i]}`
	x.innerHTML = `
	<div align='center'>
		<div style='width:${screenWidthPercent(webDevObjects[0].charts[i][3])}px; height:${webDevObjects[0].charts[i][4]};'>
			<canvas id='${CID}' width='width:${screenWidthPercent(webDevObjects[0].charts[i][3])}px' height='${webDevObjects[0].charts[i][4]}px'></canvas>
		</div>
	</div>
	`
	var ctx = document.getElementById(CID).getContext('2d');
	var myChart = new Chart(ctx, {
		type: webDevObjects[0].charts[i][2],
		options: {
			legend: {
				display: true,
			},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true,
					},
				}]
			},
		},
		data: {

			labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
			datasets: [{
				label: webDevObjects[0].charts[i][6][0],
				data: webDevObjects[0].charts[i][5][0],
				backgroundColor: webDevObjects[0].charts[i][7][0],
				borderColor: webDevObjects[0].charts[i][8][0],
				borderWidth: 1,
				order: 1,
			},

      DataPointsArray[0],
      DataPointsArray[1],
      DataPointsArray[2],
      DataPointsArray[3],
      DataPointsArray[4],
			],
			labels: webDevObjects[0].charts[0][9],
		},
	});
}
function addChartBar7(i){
	x = document.getElementById(webDevObjects[0].charts[i][0])
	CID = `Chart${[i]}`
	x.innerHTML = `
	<div align='center'>
		<div style='width:${screenWidthPercent(webDevObjects[0].charts[i][3])}px; height:${webDevObjects[0].charts[i][4]};'>
			<canvas id='${CID}' width='width:${screenWidthPercent(webDevObjects[0].charts[i][3])}px' height='${webDevObjects[0].charts[i][4]}px'></canvas>
		</div>
	</div>
	`
	var ctx = document.getElementById(CID).getContext('2d');
	var myChart = new Chart(ctx, {
		type: webDevObjects[0].charts[i][2],
		options: {
			legend: {
				display: true,
			},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true,
					},
				}]
			},
		},
		data: {

			labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
			datasets: [{
				label: webDevObjects[0].charts[i][6][0],
				data: webDevObjects[0].charts[i][5][0],
				backgroundColor: webDevObjects[0].charts[i][7][0],
				borderColor: webDevObjects[0].charts[i][8][0],
				borderWidth: 1,
				order: 1,
			},

      DataPointsArray[0],
      DataPointsArray[1],
      DataPointsArray[2],
      DataPointsArray[3],
      DataPointsArray[4],
      DataPointsArray[5],
			],
			labels: webDevObjects[0].charts[0][9],
		},
	});
}

function addChartBar8(i){
	x = document.getElementById(webDevObjects[0].charts[i][0])
	CID = `Chart${[i]}`
	x.innerHTML = `
	<div align='center'>
		<div style='width:${screenWidthPercent(webDevObjects[0].charts[i][3])}px; height:${webDevObjects[0].charts[i][4]};'>
			<canvas id='${CID}' width='width:${screenWidthPercent(webDevObjects[0].charts[i][3])}px' height='${webDevObjects[0].charts[i][4]}px'></canvas>
		</div>
	</div>
	`
	var ctx = document.getElementById(CID).getContext('2d');
	var myChart = new Chart(ctx, {
		type: webDevObjects[0].charts[i][2],
		options: {
			legend: {
				display: true,
			},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true,
					},
				}]
			},
		},
		data: {

			labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
			datasets: [{
				label: webDevObjects[0].charts[i][6][0],
				data: webDevObjects[0].charts[i][5][0],
				backgroundColor: webDevObjects[0].charts[i][7][0],
				borderColor: webDevObjects[0].charts[i][8][0],
				borderWidth: 1,
				order: 1,
			},

      DataPointsArray[0],
      DataPointsArray[1],
      DataPointsArray[2],
      DataPointsArray[3],
      DataPointsArray[4],
      DataPointsArray[5],
      DataPointsArray[6],
			],
			labels: webDevObjects[0].charts[0][9],
		},
	});
}

function addChartBar9(i){
	x = document.getElementById(webDevObjects[0].charts[i][0])
	CID = `Chart${[i]}`
	x.innerHTML = `
	<div align='center'>
		<div style='width:${screenWidthPercent(webDevObjects[0].charts[i][3])}px; height:${webDevObjects[0].charts[i][4]};'>
			<canvas id='${CID}' width='width:${screenWidthPercent(webDevObjects[0].charts[i][3])}px' height='${webDevObjects[0].charts[i][4]}px'></canvas>
		</div>
	</div>
	`
	var ctx = document.getElementById(CID).getContext('2d');
	var myChart = new Chart(ctx, {
		type: webDevObjects[0].charts[i][2],
		options: {
			legend: {
				display: true,
			},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true,
					},
				}]
			},
		},
		data: {

			labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
			datasets: [{
				label: webDevObjects[0].charts[i][6][0],
				data: webDevObjects[0].charts[i][5][0],
				backgroundColor: webDevObjects[0].charts[i][7][0],
				borderColor: webDevObjects[0].charts[i][8][0],
				borderWidth: 1,
				order: 1,
			},

      DataPointsArray[0],
      DataPointsArray[1],
      DataPointsArray[2],
      DataPointsArray[3],
      DataPointsArray[4],
      DataPointsArray[5],
      DataPointsArray[6],
      DataPointsArray[7],
			],
			labels: webDevObjects[0].charts[0][9],
		},
	});
}

function addChartBar10(i){
	x = document.getElementById(webDevObjects[0].charts[i][0])
	CID = `Chart${[i]}`
	x.innerHTML = `
	<div align='center'>
		<div style='width:${screenWidthPercent(webDevObjects[0].charts[i][3])}px; height:${webDevObjects[0].charts[i][4]};'>
			<canvas id='${CID}' width='width:${screenWidthPercent(webDevObjects[0].charts[i][3])}px' height='${webDevObjects[0].charts[i][4]}px'></canvas>
		</div>
	</div>
	`
	var ctx = document.getElementById(CID).getContext('2d');
	var myChart = new Chart(ctx, {
		type: webDevObjects[0].charts[i][2],
		options: {
			legend: {
				display: true,
			},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true,
					},
				}]
			},
		},
		data: {

			labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
			datasets: [{
				label: webDevObjects[0].charts[i][6][0],
				data: webDevObjects[0].charts[i][5][0],
				backgroundColor: webDevObjects[0].charts[i][7][0],
				borderColor: webDevObjects[0].charts[i][8][0],
				borderWidth: 1,
				order: 1,
			},

      DataPointsArray[0],
      DataPointsArray[1],
      DataPointsArray[2],
      DataPointsArray[3],
      DataPointsArray[4],
      DataPointsArray[5],
      DataPointsArray[6],
      DataPointsArray[7],
      DataPointsArray[8],
			],
			labels: webDevObjects[0].charts[0][9],
		},
	});
}

//######################################################################
//PIE CHARTS

function addChartPie(i){
	x = document.getElementById(webDevObjects[0].charts[i][0])
	CID = `Chart${[i]}`
	x.innerHTML = `
	<div align='center'>
		<div style='width:${screenWidthPercent(webDevObjects[0].charts[i][3])}px; height:${webDevObjects[0].charts[i][4]};'>
			<canvas id='${CID}' width='width:${screenWidthPercent(webDevObjects[0].charts[i][3])}px' height='${webDevObjects[0].charts[i][4]}px'></canvas>
		</div>
	</div>
	`
	var ctx = document.getElementById(CID).getContext('2d');
	var myChart = new Chart(ctx, {
		type: webDevObjects[0].charts[i][2],
		data: {
			labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
			datasets: [{
				label: webDevObjects[0].charts[i][6][0],
				data: webDevObjects[0].charts[i][5][0],
				backgroundColor: webDevObjects[0].charts[i][7][0],
				borderColor: webDevObjects[0].charts[i][8][0],
				borderWidth: 1,
				order: 1,
			},

			],
			labels: webDevObjects[0].charts[0][9]
		},

	});
}
