//#################################################################################################
var ary
var unique
var x
var z = Array[5]
var v
var cartDatapointsArray 
var DataPointsArray = new Array()
//#################################################################################################
//FUNCTIONS
/*
function aryBlank(dt){
  for (i = 0; i < dt.length; i++){
    for (j = 0; j < 1; i++){
      ary[i][j] = ""
    };
  };
}

function uniqueArray(dt,dim){
  var tmp
  for (i = 0; i < dt.length; i++){
    tmp[i] = dt[i][dim]
  };
  unique = jQuery.unique(tmp);
}
*/

function screenWidthPercent(p){
	return screen.width / 100 * p
}
//#################################################################################################
/*
	webDevObjects[0].charts[i][5].length
*/




function datapointsArray(i){
		
return [chartBarDatasets2(i),chartBarDatasets3(i),chartBarDatasets4(i),chartBarDatasets5(i)]
}


function addChartBar(i){
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
			
				DataPointsArray[1],
			],
			labels: webDevObjects[0].charts[0][9],
		},
		
			
		
		
	});
}

//	beginAtZero: true,
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
function chartBarDataset(i,j){

	try {
		z = [{
			label: webDevObjects[0].charts[i][6][i],
			data: webDevObjects[0].charts[i][5][i],
			backgroundColor: webDevObjects[0].charts[i][7][i],
			borderColor: webDevObjects[0].charts[i][8][i],
			borderWidth: 1,
			order: 1,
		
		}]
		
		return z
	}
	catch(err) {}
} 
function addCharts(){
	for (i = 0; i < webDevObjects[0].charts.length; i++){
		
		
		for (j = 1; j < webDevObjects[0].charts[i][5].length; j++){
			chartBarDataset(i,j)//Done for Data Points, Now need to do for -label,data,backgroundColor,borderColor
			//Best to create a multidimensional array
			DataPointsArray[j-1] = z[0].data
		}
		
		
		
		if(webDevObjects[0].charts[i][2] == 'pie'){addChartPie(i)}
		if(webDevObjects[0].charts[i][2] == 'bar'){addChartBar(i)}

	}

}


function addMeasure() {
	for (i = 0;i < webDevObjects[0].measures.length ;i++){
		x = document.getElementById(webDevObjects[0].measures[i][0])
		x.innerHTML += `
		<div align='center'>
			<button type='button' class='btn ${webDevObjects[0].measures[i][1]}' style='${webDevObjects[0].measures[i][3]}</span>${webDevObjects[0].measures[i][6]} ; width:${webDevObjects[0].measures[i][5]}px;margin:5px ;'>
				${webDevObjects[0].measures[i][2]} <span class='badge badge-light'>${webDevObjects[0].measures[i][3]}</span>${webDevObjects[0].measures[i][4]}
			</button>
		</div>
		
		`
		//<div class="container-fluid" align="center" style='width:${screenWidthPercent(webDevObjects[0].measures[i][5])}'>
		//</div>
	}
}


function createInnerTable(k,i){
	var rc = ""
	//Does the table have headers
	if (i == 2) {
		//First Row
		if (webDevObjects[0].tables[k][1][1] == "yes") {
		
			//Table Headers
			for (j = 0; j < webDevObjects[0].tables[k][2].length; j++){
				rc += `
					<th> ${webDevObjects[0].tables[k][2][j]}</th>
				`
			};
		} else {
	
			//Table Body
			for (j = 0; j < webDevObjects[0].tables[k][2].length; j++){
				
				rc += `
					<td>${webDevObjects[0].tables[k][i][j]}</td>
				`
			};
		};
	} else { 
	//Not First Row
		for (j = 0; j < webDevObjects[0].tables[k][2].length; j++){
				rc += `
					<td>${webDevObjects[0].tables[k][i][j]}</td>
				`
			};
	}

	return rc
}
function createTableRow(k){
	//Create Rows
	var rw = ""
	for (i = 2; i < webDevObjects[0].tables[k].length; i++){
		rw += `
			<tr>
				${createInnerTable(k,i)}
			</tr>	
		`
	};
	return rw
}
function createTable(k){
	//Create Table
	tableWidth = screenWidthPercent(webDevObjects[0].tables[k][1][2])
	tableStyles = (webDevObjects[0].tables[k][1][3])
	DivClass = (webDevObjects[0].tables[k][1][4])
	txt = `
	<div style='width:${tableWidth}px;padding:5px; ${tableStyles}' class='${DivClass}'>
		<table class='${webDevObjects[0].tables[k][1][0]}' align='center'> 
			${createTableRow(k)}
		</table>	
	</div>
	`
	x = document.getElementById(webDevObjects[0].tables[k][0])
	x.innerHTML += txt
	//document.getElementById("main").innerHTML = txt
}

function selectTables(){
	//Select Table
	for (k = 0; k < webDevObjects[0].tables.length; k++){
		createTable(k)
	};
}
//#################################################################################################
function navBarLinks(i){
	let txt = ""
	i = i + 1
	for (j = 0; j < webDevObjects[0].navBar[1].length; j++){
		txt += `
			<a class="dropdown-item" href='${webDevObjects[0].navBar[i][j][1]}' target="none">${webDevObjects[0].navBar[i][j][0]}</a>
		`
	}
	return txt
}
function navBarDropdown(){
	let txt = ""
	for (i = 0; i < webDevObjects[0].navBar[0][0].length; i++){
		txt += `
		<li class="nav-item dropdown">
			<a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                ${webDevObjects[0].navBar[0][0][i]}
                </a>
			<div class="dropdown-menu">
				${navBarLinks(i)}
			</div>
		`
	}
	return txt
}
function navBar(){
	
	return `
			<nav class='navbar navbar-expand-sm bg-dark navbar-dark' style="margin-top:-20px;position:fixed;width:100%;color:white;font-weight:bold;'>
			<a class='navbar-brand' href='https://www.allform.tech' target="none" id='navBarTitle'>${webDevObjects[0].pageDetails.navBarTitle} &nbsp; &nbsp; </a>
			<ul class="navbar-nav" id="navBar">
                    <li class="nav-item dropdown">
                        ${navBarDropdown()}
                      </li>
                </ul>
            </nav>
			</nav>
		`
}
//#################################################################################################
function innerMasterTable(i) {
	let txt = ""
	for (j = 0; j < 20; j++){
		txt += `
			<td id='r${i}-c${j}'></td>
		`
	}
	return txt
}
function createMasterTable(){
	let txt = ""
		for (i = 0; i < 50; i++){
			txt +=  `
		<table style="width:100%" id="r${i}" align='center'>
					<tr>
						${innerMasterTable(i)}
					</tr>
				</table>
		`
		}
  return txt
}
//#################################################################################################
function main() {
		x = document.getElementById("main")
		x.innerHTML += navBar()
		x.innerHTML += "<br><br>"
		x.innerHTML += createMasterTable()
		selectTables()
		addMeasure()
		addCharts()
	}
//#################################################################################################
$(document).ready(main());
