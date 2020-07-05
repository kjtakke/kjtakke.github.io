//#############
//ARRAYS - seprate file
const pageDetails = [
  {
   pageTitle : "My page"
   navBarTitle : "My nav bar"
   headingText : "My heading"
   headingClass : "alert alert-info"
   
  }
];

const charts = [
  {
   chartTitle : "My Title",
   chartIndex : 1,
   chartValued: 2,
   chartType : "pie",
   chartSufex : ""
   chartPrefix : "",
   chartLegend : true
   position : "chart1-1"
   chartHeight : 400
   chart:Width : "25%"
  },
  {
   chartTitle : "My Title",
   chartIndex : 1,
   chartValued: 2,
   chartType : "bar",
   chartSufex : ""
   chartPrefix : "",
   chartLegend : true
   position : "chart1-2"
   chartHeight : 400
   chart:Width : "75%"
  },
];

const measures = [
  {
   measureClass : "btn-warning",
   measureText : "Qty",
   measureNumber: 2,
   measureSufix: ""
  },
  {
   measureClass : "btn-warning",
   measureText : "Qty",
   measureNumber: 2,
   measureSufix: ""
  },
];

const navBar = [
  {
   navBarLinkText : "Link"
   navBarLinkURL : "#"
  },
  {
   navBarLinkText : "Link"
   navBarLinkURL : "#"
  },
  {
   navBarLinkText : "Link"
   navBarLinkURL : "#"
  },
];

const tables = [
  {
   table : [
    ["Name","Age","Gender","DoB"],
    ["Kris",36,"M","12/3/1990"],
    ["Tim",28,"M","4/12/1987"],
    ["Jane",32,"F","3/10/200"],
   ]
  },
  {
   table : [
    ["Name","Age","Gender","DoB"],
    ["Kris",36,"M","12/3/1990"],
    ["Tim",28,"M","4/12/1987"],
    ["Jane",32,"F","3/10/200"],
   ]
  },
];

   
//#############

//#############
//VARIABLES
var ary
var unique
var x


//#############

//#############
//FUNCTIONS
function aryBlank(dt){
  for (i = 0; i < dt.length; i++){
    for (j = 0; j < 1; i++){
      ary[i][j] = ""
    };
  };
};

function uniqueArray(dt,dim){
  var tmp
  for (i = 0; i < dt.length; i++){
    tmp[i] = dt[i][dim]
  }
  unique = jQuery.unique(tmp);
};

function navBarLinks()
  var nvLen = navBar.length
  var txt = ""
  for (i = 0; i < nvLen; i++){
    txt += "<li class='nav-item'>" +
    "<a class='nav-link' href='" + 
    navBar[i].navBarLinkURL +
    "'>" +
    navBar[i].navBarLinkText +   
    "</a>" +
    "</li>"
  }
  return txt
}
//#############

//#############
//HTML
   /*
   pageTitle : "My page"
   navBarTitle : "My nav bar"
   headingText : "My heading"
   headingClass : "alert alert-info"
   */
x = document.getElementById(pTitle)
x.innerHTML = pageDetails[0].pageTitle

x = document.getElementById(pHead)
x.innerHTML = pageDetails[0].headingText
x.className = pageDetails[0].headingClass

x = document.getElementById(nvTitle)
x.innerHTML = pageDetails[0].navBarTitle

x = document.getElementById(nvLinks)
x.innerHTML = navBarLinks()


//#############

//#############
//ON load
   /*
   chartTitle : "My Title",
   chartIndex : 1,
   chartValued: 2,
   chartType : "bar",
   chartSufex : ""
   chartPrefix : "",
   chartLegend : true
   position : "chart1-2"
   chartHeight : 400
   chart:Width : "75%"
   */



window.onload = function() {
 if (charts.length > -1){
 var CN = charts.length
 var CX
 var CID
 var CC
 for (i = 0; i < CN; i++){
   CX = charts[i]
   CID = CX.position
   CC = "chartContainer" + i
   x = document.getElementById(CID)
   x.innerHTML = "<div id='" + CC + "' style='height: " + CX.chartHeight "px; width: " + CX.chartWidth + "';></div>"
   
  var chart = new CanvasJS.Chart(CC, 
     ....
  chart.render();
  });  //Chart
 };    //Loop
};     //If statment
};     //On load



//#############
