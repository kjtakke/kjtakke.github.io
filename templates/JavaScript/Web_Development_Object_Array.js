webDevObjects = [
	{
		pageDetails :
		  {
		   pageTitle : "My page",							//webDevObjects[0].pageDetails.pageTitle = "My page"
		   navBarTitle : "Allform Software Solutions",	
		   headingText : "My heading",
		   headingClass : "alert alert-info",
		  },
		  
		charts : 
		[
			["r2-c1", "My Title",1,2,"pie","","",true,"chart1-1",400,"25%"], //Chart Details		webDevObjects[0].charts[0][3] = "pie"
			["r3-c2", "My Title",1,2,"pie","","",true,"chart1-1",400,"25%"], //Chart Details
		],
		  
		measures :
		[
			["r1-c1","btn-warning","Qty",2,""],  //Measure Details				webDevObjects[0].measures[0][1] = "Qty"
			["r1-c1","btn-warning","Qty",2,""],  //Measure Details
		],
		  
		navBar :
		[
			
			[
				["Heading 1","Heading 2"], //NavBar Dropdown Headings	webDevObjects[0].navBar[0][0][0] = "Heading 1"
			],
			[
				["Heading 1 Link 1","#"], //NavBar Dropdown Link		webDevObjects[0].navBar[1][0][0] = "Heading 1 Link 1"
				["Heading 1 Link 2","#"], //NavBar Dropdown Link		webDevObjects[0].navBar[1][1][1] = "#"
			],
			[
				["Heading 2 Link 1","#"], //NavBar Dropdown Link
				["Heading 2 Link 2","#"], //NavBar Dropdown Link
			],

		],	
		
		tables :
		[
			["r3-c1", 													//webDevObjects[0].tables[0][0] = "r11-c0"
				
					["Name","Age","Gender","DoB"], 	//Table Header 			webDevObjects[0].tables[0][1][0] = "Name"
					["Kris",36,"M","12/3/1990"],	//Table body Row 1		webDevObjects[0].tables[0][2][2] = "M"
					["Tim",28,"M","4/12/1987"],		//Table body Row 2		webDevObjects[0].tables[0][3][1] = 28
					["Jane",32,"F","3/10/200"],		//Table body Row 3
			],
			["r3-c2", 													//webDevObjects[0].tables[1][0] = "r11-c1"
				
					["Name","Age","Gender","DoB"], 	//Table Header 			webDevObjects[0].tables[1][1][0] = "Name"
					["Kris",36,"M","12/3/1990"],	//Table body Row 1		webDevObjects[0].tables[1][2][0] = "Kris"
					["Tim",28,"M","4/12/1987"],		//Table body Row 2		webDevObjects[0].tables[1][3][1]  = 28
					["Jane",32,"F","3/10/200"],		//Table body Row 3
			],
		],
		
		//More Elements/Objects Here
		
	}
];
