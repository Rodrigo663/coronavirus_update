// GLOBAL CASES CHART

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Year", "Cases"],
    // January

    ["Jan 1", 100],
    ["Jan 7", 250],
    ["Jan 14", 400],w
    ["Jan 21", 580],

    // February
    ["Feb 1", 14553],
    ["Feb 7", 34876],
    ["Feb 14", 67100],
    ["Feb 21", 77673],

    // March


    
    ["Mar 1", 88585],
    ["Mar 7", 106099],
    ["Mar 14", 156477],
    ["Mar 21", 305202],

    // Abril

    ["Abr 1", 940523],
    ["Abr 7", 1429982],
    ["Abr 14", 1992903],
    ["Abr 21", 2556720],

    // May

    ["May 1", 3394153],
    ["May 7", 3912156],
    ["May 14", 4522009],
    ["May 21", 5190456],
  ]);

  var options = {
    title: "",
    curveType: "function",
    colors: ['#28b485'],
    legend: { position: "none" },
    titleTextStyle: {

       
        

      
    }
   
  };

  var chart = new google.visualization.LineChart(
    document.getElementById("curve_chart")
  );

  chart.draw(data, options);
}




// GLOBAL DEATHS CHART



google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart2);

function drawChart2() {
  var data = google.visualization.arrayToDataTable([
    ["Year", "Cases"],
    // January

    ["Jan 1", 0],
    ["Jan 7", 0],
    ["Jan 14",1],
    ["Jan 21", 9],

    // February
    ["Feb 1", 304],
    ["Feb 7", 724],
    ["Feb 14", 1526],
    ["Feb 21", 2360],

    // March

    ["Mar 1", 3050],
    ["Mar 7", 3598],
    ["Mar 14", 5841],
    ["Mar 21", 13101],

    // Abril

    ["Abr 1", 49233],
    ["Abr 7", 86033],
    ["Abr 14", 132601],
    ["Abr 21", 180561],

    // May

    ["May 1", 239447],
    ["May 7", 270426],
    ["May 14", 303463],
    ["May 21", 334173],
  ]);

  var options = {
    title: "",
    curveType: "function",
    colors: ['#a10909'],
    legend: { position: "none" },
    titleTextStyle: {

       
        
      
      
    }
   
  };

  var chart2 = new google.visualization.LineChart(
    document.getElementById("curve_chart-2")
  );

  chart2.draw(data, options);
}


// GLOBAL RECOVERED CHART
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart3);

function drawChart3() {
  var data = google.visualization.arrayToDataTable([
    ["Year", "Cases"],
    // January

    ["Jan 1", 0],
    ["Jan 7", 0],
    ["Jan 14",1],
    ["Jan 21", 9],

    // February
    ["Feb 1", 504],
    ["Feb 7", 2083],
    ["Feb 14", 8196],
    ["Feb 21", 20895],

    // March

    ["Mar 1", 45122],
    ["Mar 7", 60172],
    ["Mar 14", 75925],
    ["Mar 21", 95498],

    // Abril

    ["Abr 1", 194216],
    ["Abr 7", 302218],
    ["Abr 14", 478594],
    ["Abr 21", 694012],

    // May

    ["May 1", 1088683],
    ["May 7", 1353488],
    ["May 14", 1702394],
    ["May 21", 2081196],
  ]);

  var options = {
    title: "",
    curveType: "function",
    colors: ['#7ed56f'],
    legend: { position: "none" },
    titleTextStyle: {

       
        
      
      
    }
   
  };

  var chart3 = new google.visualization.LineChart(
    document.getElementById("curve_chart-3")
  );

  chart3.draw(data, options);
}



var table = new Tabulator("#example-table", {
	data:tabledata,           //load row data from array
	layout:"fitColumns",      //fit columns to width of table
	responsiveLayout:"hide",  //hide columns that dont fit on the table
	tooltips:true,            //show tool tips on cells
	addRowPos:"top",          //when adding a new row, add it to the top of the table
	history:true,             //allow undo and redo actions on the table
	pagination:"local",       //paginate the data
	paginationSize:7,         //allow 7 rows per page of data
	movableColumns:true,      //allow column order to be changed
	resizableRows:true,       //allow row order to be changed
	initialSort:[             //set the initial sort order of the data
		{column:"name", dir:"asc"},
	],
	columns:[                 //define the table columns
		{title:"Name", field:"name", editor:"input"},
		{title:"Task Progress", field:"progress", hozAlign:"left", formatter:"progress", editor:true},
		{title:"Gender", field:"gender", width:95, editor:"select", editorParams:{values:["male", "female"]}},
		{title:"Rating", field:"rating", formatter:"star", hozAlign:"center", width:100, editor:true},
		{title:"Color", field:"col", width:130, editor:"input"},
		{title:"Date Of Birth", field:"dob", width:130, sorter:"date", hozAlign:"center"},
		{title:"Driver", field:"car", width:90,  hozAlign:"center", formatter:"tickCross", sorter:"boolean", editor:true},
	],
});