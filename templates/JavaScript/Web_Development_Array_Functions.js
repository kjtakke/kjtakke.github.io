//#################################################################################################
//VARIABLES
var ary
var unique
var x


//#################################################################################################

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
		<table style="width:100%" id="r${i}">
					<tr>
						${innerMasterTable(i)}
					</tr>
				</table>
		`
		}
  return txt
}

//#################################################################################################

//#################################################################################################
//HTML



//#################################################################################################

//#################################################################################################

x = document.getElementById("main")
x.innerHTML += navBar()
x.innerHTML += createMasterTable()



//#################################################################################################

//#################################################################################################
//EVENTS



//#################################################################################################
