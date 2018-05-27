/**
 * scrollVis - encapsulates 
 * all the code for the visualization
 * using reusable charts pattern:
 * http://bost.ocks.org/mike/chart/
 */
var padding=0;
var scrollVis = function() {
  // constants to define the size
  // and margins of the vis area.

  var width = window.innerWidth,
    height = window.innerHeight;

  var margin = {
    top: 10,
    left: 20,
    bottom: 80,
    right: 10
  };

  // Keep track of which visualization
  // we are on and which was the last
  // index activated. When user scrolls
  // quickly, we want to call all the
  // activate functions that they pass.
  var lastIndex = -1;
  var activeIndex = 0;

  // main svg used for visualization
  var svg = null;

  // d3 selection that will be used
  // for displaying visualizations
  var g = null; 

  // When scrolling to a new section
  // the activation function for that
  // section is called.
  var activateFunctions = [];
  // If a section has an update function
  // then it is called while scrolling
  // through the section with the current
  // progress through the section.
  var updateFunctions = [];
 var div = d3.select("body").append("div").attr("class", "tooltip");

var formatComma = d3.format(",");
	
var countt;
var counttt;
var countttt;
  
  /**
   * chart
   *
   * @param selection - the current d3 selection(s)
   *  to draw the visualization in. For this
   *  example, we will be drawing it in #vis
   */
  var chart = function(selection) {
    selection.each(function() {
      setupSections();
    });
  };

  /**
   * setupVis - creates initial elements for all
   * sections of a visualization.
   */
  setupVis = function() {};

  /**
   * setupSections - each section is activated
   * by a separate function. Here we associate
   * these functions to the sections based on
   * the section's index.
   *
   */
  setupSections = function() {
    // activateFunctions are called each
    // time the active section changes

    activateFunctions[0] = showTitle0;
    activateFunctions[1] = showTitle1;
    activateFunctions[2] = showTitle2;
    activateFunctions[3] = showTitle3;
    activateFunctions[4] = showTitle4;
    activateFunctions[5] = showTitle5;
    activateFunctions[6] = showTitle6;
    activateFunctions[7] = showTitle7;
    activateFunctions[8] = showTitle8;
    activateFunctions[9] = showTitle9;
    activateFunctions[10] = showTitle10;
    activateFunctions[11] = showTitle11;
    activateFunctions[12] = showTitle12;
    activateFunctions[13] = showTitle13;

    activateFunctions[14] = showTitle14;
    activateFunctions[15] = showTitle15;
    activateFunctions[16] = showTitle16;
    activateFunctions[17] = showTitle17;
    activateFunctions[18] = showTitle18;

    activateFunctions[19] = showTitle19;
    activateFunctions[20] = showTitle20;
    activateFunctions[21] = showTitle21;
    activateFunctions[22] = showTitle22;
    activateFunctions[23] = showTitle23;

    // updateFunctions are called while
    // in a particular section to update
    // the scroll progress in that section.
    // Most sections do not need to be updated
    // for all scrolling and so are set to
    // no-op functions.
    for (var i = 0; i < 24 + 1; i++) {
 //////   for (var i = 0; i < window.slides.length + 1; i++) {
      updateFunctions[i] = function() {};
    }

      };

  /**
   * ACTIVATE FUNCTIONS
   *
   * These will be called their
   * section is scrolled to.
   *
   * General pattern is to ensure
   * all content for the current section
   * is transitioned in, while hiding
   * the content for the previous section
   * as well as the next section (as the
   * user may be scrolling up or down).
   *
   */

  /**
   *
   */
   function showTitle0() {
    //////////////
    ////////////
    /////////

    ////////////////////////////////////////////
    ///////// SET INITIAL CONTAINER VISIBILITY
    ////////////////////////////////////////////

    
    var logobar = document.getElementById("logobar");
    logobar.setAttribute("style", "display:none; ");

 
    var logoOpener = document.getElementById("logoOpener");
    logoOpener.setAttribute("style", "display:inline-block; ");


     
 

    ////////////////////////////////////////////
    ////////////////////////////////////////////
    /////////////////////////////

    ///////////
    ///////////
  }

  /**
   *
   */
  function showTitle1() {
    ////////////////////////////////////////////
    ////////// Video item to turn off
    //////////
    ///////// var videoplay = document.getElementById('bgvid0');
    ///////// videoplay.setAttribute("style", "display:none; ");
    ///////////////////////////////////////////

    ////////////////////////////////////////////
    ////////// Scroll prompt image turned off
    var scrollimg = document.getElementById("scrollimg");
    scrollimg.setAttribute("style", "display:none; ");


    var logobar = document.getElementById("logobar");
    logobar.setAttribute("style", "display:block; ");

    var logoOpener = document.getElementById("logoOpener");
    logoOpener.setAttribute("style", "display:none; ");



  
 
  }

  /**
   *
   *
   */
   
   
  function showTitle2() {}

  /////////////
  //////////

  /**
   *
   */
  function showTitle3() {
  
  
  
   d3.select("body").selectAll(".bgbg")
      .style('display', 'inline-block');
  
  d3.select("#vis").select("svg").remove();
d3.select("#vis").select("g").remove();

    
        var vis = document.getElementById("vis");
    vis.setAttribute("style", "display:none !important; ");
    vis.setAttribute("style", "visibility:hidden; ");
   
	  
	  
	  div.style("display", "none");

     
        var fnA = document.getElementById("fnA");
    fnA.setAttribute("style", "display:none !important; ");
 
  
  }

  ///////
  ///////

  /**
   *
   *
   */
  function showTitle4() {
         
  ////////  var bgimage = document.getElementsByClassName("bgbg");
   /*  

   d3.select("body").selectAll(".bgbg")
      .style('display', 'none');

  ///////////////bgimage.setAttribute("style", "display:none; ");

  d3.select("#vis").select("svg").remove();
d3.select("#vis").select("g").remove();

  
  
        var vis = document.getElementById("vis");
    vis.setAttribute("style", "display:inline-block !important; ");
    vis.setAttribute("style", "visibility:visible; ");
    
 */
   
    
  
        var fnA = document.getElementById("fnA");
    fnA.setAttribute("style", "display:inline-block !important; ");
 
	       var fnB = document.getElementById("fnB");
    fnB.setAttribute("style", "display:none !important; ");
     
	  
	  
         var data=[
           {"date":2000, "value": 59247},
            {"date":2001, "value": 65105},
            {"date":2002, "value": 70590},   
            {"date": 2003, "value": 73139},
           {"date": 2004, "value": 77530},
            {"date": 2005, "value": 80507},
            {"date": 2006, "value": 82043},   
            {"date": 2007, "value": 82630},
            {"date": 2008, "value": 82287},
            {"date": 2009, "value": 81419},
           {"date": 2010, "value": 83544},
            {"date": 2011, "value": 84100},
            {"date": 2012, "value": 87862},   
            {"date": 2013, "value": 90623},
            {"date": 2014, "value": 91479} 
         
         
         ];
            
            
  
	  
	  
	  
  

   d3.select("body").selectAll(".bgbg")
      .style('display', 'none');

  ///////////////bgimage.setAttribute("style", "display:none; ");

  d3.select("#vis").select("svg").remove();
d3.select("#vis").select("g").remove();

  
  
        var vis = document.getElementById("vis");
    vis.setAttribute("style", "display:inline-block !important; ");
    vis.setAttribute("style", "visibility:visible; ");
    
 
    var axisMargin = 20,
            margin = 10,
            valueMargin = 1,
            labelWidth = 20;
    
     var padding=10;
    
       var x_domain = d3.extent(data, function(d) { return d.date; }),
            y_domain = d3.extent(data, function(d) { return d.value; });
        
    
  
///////  var data = [59247,65105,70590,73139,77530,80507,82043,82630,82287,81419,83544,84100,87862,90623,91479];
    
    //////////////    var max = d3.max(data, function(d) { return d.a; });
        var max = 91479;


  var wwwidth= (window.innerWidth-70+"px");
  var wwwwidth= (window.innerWidth-70);
  var wwidth= window.innerWidth;
var hhheight= (window.innerHeight-100+"px");
/////    var hhheight= (window.innerHeight-100);
  var hheight= window.innerHeight;
    
var width = wwidth, height = hheight;
var range = [];
 
    var countt = (wwwwidth/15+"px");
     
    /*
    var width = 500, height = 500;
    */
    
 var x = d3.scale.linear()
    .range([0, width])
 .domain([0, data.length]) ;
 ///////  .domain([2000, 2014])
 ///////	  .range([padding, wwwidth - padding * 2]);


 var y = d3.scale.linear()
    .range([height, 0])
    .domain([40000, 105000]);
	 
 

/*
	  
var xScale = d3.scale.linear()
 .domain([0, d3.max(data, function(d, i) { return d.date; })])
 /////////////////////    .domain([0, data.length])
/////   .domain([2000, 2014])

	  .range([padding, wwwidth - padding * 2]);

var yScale = d3.scale.linear()
.domain([0, d3.max(data, function(d) { return d.value; })])
//////.domain([40000, 100000])
	  .range([hhheight - padding, padding]);
*/
	  
	        var yScale = d3.scale.linear()
	        .domain(y_domain).nice()   // make axis end in round number
		.range([hhheight - padding, padding]);   // map these to the chart height, less padding.  In this case 300 and 100
  
	  
	  
	
     var scale = d3.scale.linear()
            .domain([2000, 2014])
///////        .range([0, width - margin*4 - labelWidth]);
        .range([0, width - margin*4 - labelWidth]);
///////        .range([0, wwwidth]);
  ///?           .range([0, width]);
  
	  
	  
	  
	  
	  var xAxis = d3.svg.axis()
         //////   .scale(scale)
            .scale(scale)
	  .ticks(7)
       ////////     .tickSize(-height + 4*margin + axisMargin)
  .tickFormat(d3.format("d.date"))
   .orient("bottom");
    
    
	/*   
	    
	  
var xAxis = d3.svg.axis()
    .scale(x)
  .tickFormat(d3.format("d.date"))
    .orient("bottom");
 */
	  
var yAxis = d3.svg.axis()
 .scale(y)
 /////      .scale(yScale)
    .orient("left");

    
    
    
    
    

var line = d3.svg.area()
    .x(function(d, i) { return x(i); })
    .y1(function(d) { return y(d.value); })
    .y0(height)
    .interpolate('cardinal');

	  
	  
	  
	  
var svg = d3.select("#vis").append("svg")
    .attr("width", wwwidth)
    .attr("height", hhheight)
    .append("g")
  ////////////  .attr("transform", "translate(50, 10)")
    .attr("transform", "translate(80, -50)")

 

  svg.append("path")
      .datum(data)
      .attr("class", "line")
      .attr("d", line);
	  
 /*
svg.append("g")
      .attr("class", "x axis")
  ///////////    .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

 */
/////////////////////////////////// 

	  

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
 

	  
	  
	  
	      svg.append("g")
            .attr("class", "x axis")  // two classes, one for css formatting, one for selection below
     ////       .attr("transform", "translate(0," + (height - padding) + ")")
            .attr("transform", "translate(0," + (height + (padding/4)) + ")")
            .call(xAxis);
	  
  /*	  
 
      // draw x axis with labels and move to the bottom of the chart area
        svg.append("g")
            .attr("class", "xaxis axis")  // two classes, one for css formatting, one for selection below
     .attr("transform", "translate(0," + (height - padding) + ")")
    /////               .attr("transform", "translate(0," + (height) + ")")
            .call(xAxis);

	
  // draw y axis with labels and move in from the size by the amount of padding
      svg.append("g")
  	.attr("class", "y axis")
   	.attr("transform", "translate("+padding+",0)")
            .call(yAxis)  

	/*
  
	  
	  
  // draw y axis with labels and move in from the size by the amount of padding
        svg.append("g")
        	.attr("class", "axis")
            .attr("transform", "translate("+padding+",0)")
            .call(yAxis)
	  
	*/   

///////////////////////////////////    
	  
	  
	  
        // now rotate text on x axis
        // solution based on idea here: https://groups.google.com/forum/?fromgroups#!topic/d3-js/heOBPQF3sAY
        // first move the text left so no longer centered on the tick
        // then rotate up to get 45 degrees.
        svg.selectAll(".xaxis text")  // select all the text elements for the xaxis
                .attr("text-anchor", "start")  
  		.attr("transform", function(d) {
             return "translate(" + this.getBBox().height*-2 + "," + this.getBBox().height + ")rotate(-45)";
         });
    
        // now add titles to the axes
        svg.append("text")
            .attr("text-anchor", "middle")  // this makes it easy to centre the text as the transform is applied to the anchor
            .attr("transform", "translate(-60,"+(height/2)+")rotate(-90)")  // text is drawn off the screen top left, move down and out and rotate
            .text("Total Delay (1000s of person-hours) ")
                    .attr("id", "legendtext")  ;

        svg.append("text")
            .attr("text-anchor", "middle")  // this makes it easy to centre the text as the transform is applied to the anchor
   ////////         .attr("transform", "translate("+ (width/2) +","+(height-(padding*3))+")")  // centre below axis
            .attr("transform", "translate("+ (width/2) +","+(height+(45))+")")  // centre below axis
            .text("Year")
                    .attr("id", "legendtext")  ;

	  
	  
	  
    /*
    // Add the scatterplot
     svg.selectAll("rect")
 /////    svg.selectAll("dot")
        .data(data)
      .enter().append("text")

  ////////////////         .attr("x", function(d, i) { return y(d.date); })
     .attr("x", function(d, i) { return x(i); })
        .attr("y", function(d) { return y(d.value); })
       .attr("transform", "translate(0,50)")
.attr("class", "highlight")
           .text(function(d) {
            if (d == 65105) {return "T-REX Starts"}
            else 	{  }

                 if (d == 82043) {return "T-REX Completed"}
            else 	{  }

     
                 if (d == 82287) {return "Congestion Hits Pre- Construction Levels"}
            else 	{  }

     
     })
    
     
    
    */
    
    
    
    
    // Add the scatterplot
/////    svg.selectAll("dot")
    svg.selectAll("rect")
        .data(data)
 ////////     .enter().append("circle")
      .enter().append("rect")
//////////////        .attr("r", 12.3)
     /////   .attr("r", 12.3)
        .attr("class", "plotter")
	

           .attr('height', hhheight)
	   .attr('width', countt)
           
////////// .attr('width', function(d) { return d * 2; }) // data point * 2 pixels wide 
					     
  	      .attr("transform", "translate(0, 50)")

	  
	     .attr("x", function(d, i) { return x(i); })
 
	  
	/*  
	  
    .attr("cx", function(d, i) { return x(i); })
   ////////////////////    .attr("cx", function(d, i) { return x(d.date); })
        .attr("cy", function(d) { return y(d.value); })

     */
   
    

 .on("mousemove", function(d){
      /*      div.style("left", d3.event.pageX-23+"px");
            div.style("top", (d3.event.pageY)-45+"px");
          div.style("position", "absolute");*/
            div.style("position", "fixed"); 
           div.style("display", "inline-block");

	    div.attr("class", "fixedtooltip");

             div.html("<h4>Denver-Aurora delayed</h4>"+formatComma(d.value)+",000<h4>hours annually in</h4>"+(d.date)+"");
         })

        .on("mouseout", function(d){
            div.style("display", "none");
        })
  
  
    
    
   
    
    
    
    
	  
	  
	  
	  
	  
    ///
    ///
    ////
  
  }

  /////
  ////////

  /**
   *
   */
  function showTitle5() {
  
              div.style("display", "none");

    
    
   d3.select("body").selectAll(".bgbg")
      .style('display', 'none');
    
     
  
  d3.select("#vis").select("svg").remove();
d3.select("#vis").select("g").remove();

  
        var fnA = document.getElementById("fnA");
    fnA.setAttribute("style", "display:none !important; ");
     
	  
        var fnB = document.getElementById("fnB");
    fnB.setAttribute("style", "display:inline-block !important; ");
	  
	  
	  
        var fnC = document.getElementById("fnC");
    fnC.setAttribute("style", "display:none !important; ");
     
    ///
    ////
    ////
    
   
     
    
    var datasetset = [
      
      {year: "2000",
        pop: "4338785"
}, {
    year: "2001",
        pop: "4444513"
}, {
    year: "2002",
        pop: "4504709"
}, {
    year: "2003",
        pop: "4555084"

}, {
    year: "2004",
        pop: "4608811"
}, {
    year: "2005",
        pop: "4662534"
}, {
    year: "2006",
        pop: "4745660"
}, {
    year: "2007",
        pop: "4821784"

}, {
    year: "2008",
        pop: "4901938"
}, {
    year: "2009",
        pop: "4976853"
}, {
    year: "2010",
        pop: "5049935"
}, {
    year: "2011",
        pop: "5119538"

}, {
    year: "2012",
        pop: "5191086"
}, {
    year: "2013",
        pop: "5268413"
}, {
    year: "2014",
        pop: "5350118"
}, {
    year: "2015",
        pop: "5448055"

}, {
    year: "2016",
        pop: "5538180"
}, {
    year: "2017",
        pop: "5630987"
}, {
    year: "2018",
        pop: "5722618"
}, {
    year: "2019",
        pop: "5814810"

}, {
    year: "2020",
        pop: "5907198"
}, {
    year: "2021",
        pop: "5999526"
}, {
    year: "2022",
        pop: "6094505"
}, {
    year: "2023",
        pop: "6191834"

}, {
    year: "2024",
        pop: "6290361"
}, {
    year: "2025",
        pop: "6391239"
}, {
    year: "2026",
        pop: "6493758"
}, {
    year: "2027",
        pop: "6596551"

}, {
    year: "2028",
        pop: "6697517"
}, {
    year: "2029",
        pop: "6795627"
}, {
    year: "2030",
        pop: "6892192"
}, {
    year: "2031",
        pop: "6987094"

}, {
    year: "2032",
        pop: "7080671"
}, {
    year: "2033",
        pop: "7172969"
}, {
    year: "2034",
        pop: "7263730"
}, {
    year: "2035",
        pop: "7352841"

}, {
    year: "2036",
        pop: "7440617"
}, {
    year: "2037",
        pop: "7526725"
}, {
    year: "2038",
        pop: "7611347"
}, {
    year: "2039",
        pop: "7693013"

}, {
    year: "2040",
        pop: "7773481"
}, {
    year: "2041",
        pop: "7851186"
}, {
    year: "2042",
        pop: "7924338"
}, {
    year: "2043",
        pop: "7995903"

}, {
    year: "2044",
        pop: "8065959"
}, {
    year: "2045",
        pop: "8134846"
}, {
    year: "2046",
        pop: "8201706"
}, {
    year: "2047",
        pop: "8267672"

}, {
    year: "2048",
        pop: "8332833"
}, {
    year: "2049",
        pop: "8397333"
} , {
    year: "2050",
        pop: "8461295"
}   ];
   
   
 //// var data = [4338785, 4444513, 4504709, 4555084, 4608811, 4662534, 4745660, 4821784, 4901938, 4976853, 5049935, 5119538, 5191086, 5268413, 5350118, 5448055, 5538180];

    var wwidth= window.innerWidth;
  var hheight= window.innerHeight;
    
 
	
  var wwwidth= (window.innerWidth-70+"px");
  var wwwwidth= (window.innerWidth-70);  
	var hhheight= (window.innerHeight-50+"px");
    var counttt = (wwwwidth/50+"px");
        
var width = wwidth, height = hheight;  
    
        var axisMargin = 1,
            margin = 10,
            valueMargin = 1,
            labelWidth = 50,
                padding = 10; // space around the chart, not including labels
        
            
    /*
    var width = 500, height = 500;
    */

        var x_domain = d3.extent(datasetset, function(d) { return d.year; }),
            y_domain = d3.extent(datasetset, function(d) { return d.pop; });
        
    
    
 var max = d3.max(datasetset, function(d) { return d.year; });
    /*   */ 
    var max = 2050;
    
  
	  
	         var xScale = d3.time.scale()
	        .domain(x_domain)    // values between for month of january
		    .range([padding, wwwidth - padding]);   // map these sides of the chart, in this case 100 and 600

	  
	     // define the y scale  (vertical)
        var yScale = d3.scale.linear()
	        .domain(y_domain).nice()   // make axis end in round number
		.range([hhheight - padding, padding]);   // map these to the chart height, less padding.  In this case 300 and 100
                 //REMEMBER: y axis range has the bigger number first because the y value of zero is at the top of chart and increases as you go down.
		    
	  
	  
          var  date_format = d3.time.format("%Y");
    
 var x = d3.scale.linear()
    .range([0, width])
 ////  .domain([0, datasetset.length -1]); 
   .domain([0, datasetset.length]); 
///////     .domain([2000, 2024]);

 /* */   
 var y = d3.scale.linear()
    .range([height, 0])
    .domain([4000000, 9000000]); 

  
     var scale = d3.scale.linear()
            .domain([2000, 2050])
      ///////     .range([0, width - margin*2 - labelWidth]);
	  
///////////////////////  	   .range([padding, wwwidth - padding]); 
////////////////          .range([0, width - margin*4 - labelWidth]);
          .range([0, width - labelWidth]);
   //////         .range([0, wwwidth]);

	  
	  
	  
   var xAxis = d3.svg.axis()
   ///////     .scale(xScale)
   	.ticks(5)
   	.scale(scale)
   ////////////       .tickSize(-height + 4*margin + axisMargin)
 	.tickFormat(d3.format("d.year"))
   	.orient("bottom");


 
  var formatValue = d3.format(".2s");
 

var yAxis = d3.svg.axis()
    .scale(y)
	////////  .ticks(5)

.tickFormat(function(d) { return formatValue(d)})
    .orient("left");

    
    
    
var line = d3.svg.area()
    .x(function(d, i) { return x(i); })
    .y1(function(d) { return y(d.pop); })
    .y0(height)
    .interpolate('cardinal'); 

	  
	  
	  
	  
	  
	  
var svg = d3.select("#vis").append("svg")
    .attr("width", wwwidth)
    .attr("height", hhheight)
    .append("g")
  ////////////  .attr("transform", "translate(50, 10)")
    .attr("transform", "translate(70, -50)")



/*
var svg = d3.select("#vis").append("svg")
    .attr("width", wwwidth)
    .attr("height", height)
    .append("g")
  ////////////  .attr("transform", "translate(50, 10)")
    .attr("transform", "translate(80, -50)")

svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
*/
  svg.append("path")
      .datum(datasetset)
      .attr("class", "line")
      .attr("d", line);


  

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
 

      // draw x axis with labels and move to the bottom of the chart area
        svg.append("g")
            .attr("class", "x axis")  // two classes, one for css formatting, one for selection below
            .attr("transform", "translate(0," + (height + padding/4) + ")")
            .call(xAxis);
    /*        
  // draw y axis with labels and move in from the size by the amount of padding
        svg.append("g")
        	.attr("class", "axis")
            .attr("transform", "translate("+padding+",0)")
            .call(yAxis)
*/
               // now rotate text on x axis
        // solution based on idea here: https://groups.google.com/forum/?fromgroups#!topic/d3-js/heOBPQF3sAY
        // first move the text left so no longer centered on the tick
        // then rotate up to get 45 degrees.
        svg.selectAll(".xaxis text")  // select all the text elements for the xaxis
                .attr("text-anchor", "start")  
  		.attr("transform", function(d) {
             return "translate(" + this.getBBox().height*-2 + "," + this.getBBox().height + ")rotate(-45)";
         });
    
        // now add titles to the axes
        svg.append("text")
            .attr("text-anchor", "middle")  // this makes it easy to centre the text as the transform is applied to the anchor
            .attr("transform", "translate(-50,"+(height/2)+")rotate(-90)")  // text is drawn off the screen top left, move down and out and rotate
            .text("Population (in Millions) ")
                    .attr("id", "legendtext")  ;

        svg.append("text")
            .attr("text-anchor", "middle")  // this makes it easy to centre the text as the transform is applied to the anchor
   ////////         .attr("transform", "translate("+ (width/2) +","+(height-(padding*3))+")")  // centre below axis
            .attr("transform", "translate("+ (width/2) +","+(height+(45))+")")  // centre below axis
            .text("Year")
                    .attr("id", "legendtext")  ;

	  
	  

	  
	  
	  
    
    // Add the scatterplot
/////    svg.selectAll("dot")
    svg.selectAll("rect")
        .data(datasetset)
 ////////     .enter().append("circle")
      .enter().append("rect")
//////////////        .attr("r", 12.3)
     /////   .attr("r", 12.3)
        .attr("class", "plotter")
	

           .attr('height', hhheight)
	   .attr('width', counttt)
           
////////// .attr('width', function(d) { return d * 2; }) // data point * 2 pixels wide 
					     
            ///////  .attr("transform", "translate("0",(height+(100))))   
	      .attr("transform", "translate(0, 50)")

	     .attr("x", function(d, i) { return x(i); })
 
	  
	/*  
	  
	  
	  
  
    // Add the scatterplot
    svg.selectAll("dot")
        .data(datasetset)
      .enter().append("circle")
        .attr("r", 12.3)
        .attr("class", "plotter")
      .attr("cx", function(d, i) { return x(i); })
        .attr("cy", function(d) { return y(d.pop); }) 
      */
      .on("mousemove", function(d){
      /*      div.style("left", d3.event.pageX-23+"px");
            div.style("top", (d3.event.pageY)-45+"px");
          div.style("position", "absolute");*/
            div.style("position", "fixed"); 
           div.style("display", "inline-block");

	    div.attr("class", "fixedtooltip");
            div.html(formatComma(d.pop)+"<h4> Colorado Residents in </h4>"+(d.year));
         })

        .on("mouseout", function(d){
            div.style("display", "none");
        })
    
    ///
    ///
    ////
  
  }

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle6() {
  
	  
	  
	   
        var fnC = document.getElementById("fnC");
    fnC.setAttribute("style", "display:inline-block !important; ");
 
	       var fnB = document.getElementById("fnB");
    fnB.setAttribute("style", "display:none !important; ");
 	  
	  
	  
	  
	  
        div.style("display", "none");

    
    
   d3.select("body").selectAll(".bgbg")
      .style('display', 'none');
    
    
   
  d3.select("#vis").select("svg").remove();
d3.select("#vis").select("g").remove();

  var data_tax = [
{a:"1993 Real revenue",b:372},
{a:"2015 Real revenue",b:351} 
];
    
////////////////////////////////
/////// drawHBarChart(data_tax);

   
	  
	  
	  
    var wwidth= window.innerWidth;
  var hheight= window.innerHeight;
    
 
	
  var wwwidth= (window.innerWidth-70+"px");
  var wwwwidth= (window.innerWidth-70);  
	var hhheight= (window.innerHeight-50+"px");
    var counttt = (wwwwidth/50+"px");
        
var width = wwidth, height = hheight;  
    
        var axisMargin = 1,
            margin = 10,
            valueMargin = 1,
            labelWidth = 50,
                padding = 10; // space around the chart, not including labels
        
	  
	  
	  
	  
	  


    var barHeight = (height-axisMargin-margin*4)* 0.4/data_tax.length,
            barPadding = (height-axisMargin-margin*2)*0.2/data_tax.length,
            data, bar, svg, scale, xAxis, labelWidth = 0;

    max = d3.max(data_tax, function(d) { return d.b; });



var chart = d3.select("#vis").append("svg")
///////////////var chart = d3.select("#"+name)
          ////  .attr("width", width+"px")
	      .attr("width", wwwidth)
    .attr("height", hhheight)
     .attr("transform", "translate(10, 20)")
        ////   .style("margin-right", "80px")

	  
   ////////////  .attr("transform", "translate(50, 10)")

	  
	  
	  

    bar = chart.selectAll("g")
            .data(data_tax)
            .enter()
            .append("g");

    bar.attr("class", "thing-0")
            .attr("cx",0)
            .attr("transform", function(d, i) {
  /////       return "translate(" + margin + "," + (i * (barHeight + barPadding) + barPadding) + ")";
 return "translate(" + margin + "," + (i * (barHeight + barPadding) + barPadding) + ")";
            });

    bar.append("text")
            .attr("class", "bartexth")
            .attr("y", barHeight / 2)
            .attr("dy", ".35em") //vertical align middle
            .text(function(d){
             /////////////////   return d.a;
            }).each(function() {
        labelWidth = Math.ceil(Math.max(labelWidth, this.getBBox().width));
    });

    scale = d3.scale.linear()
            .domain([330, 375])
            .range([0, width - margin*4 - labelWidth]);

    xAxis = d3.svg.axis()
            .scale(scale)
        //////////    .tickSize(-height + 4*margin + axisMargin)
            .orient("bottom");

 var y = d3.scale.linear()
    .range([height, 0]); 
	  

var yAxis = d3.svg.axis()
    .scale(y)
	  .ticks(0)

    .orient("left");
	  
	  
	  
    bar.append("rect")





 .on("mousemove", function(d){
   /*        div.style("left", d3.event.pageX+10+"px");
            div.style("top", (d3.event.pageY)-45+"px");
            div.style("position", "absolute"); */
            div.style("display", "inline-block");
                  div.attr("class", "fixedtooltip");

       /////////////     div.html((d.a)+"<h4>"+(d.b)+"</h4>");
         })

        .on("mouseout", function(d){
            div.style("display", "none");
        })





            .attr("transform", "translate("+labelWidth+", 0)")
            .attr("height", barHeight)
          ///  .attr("width", function(d){
        ///        return (width*((d.b*+".01")));
      ////      }) 

      .attr("width", function(d){
                return scale(d.b);
            });
 
;

    bar.append("text")
            .attr("class", "bartexth")
             .attr("y", barHeight / 2)
       /////////////     .attr("dx", -valueMargin + labelWidth) //margin right
            .attr("x", 15) //margin right
            .attr("dy", ".35em") //vertical align middle
            .attr("text-anchor", "start")
            .text(function(d){
                return (d.a+": $"+d.b+"M");
            })
       ////////// .attr("x", function(d){
          ///////      var width = this.getBBox().width;
      ///////////          return Math.max(width + valueMargin, scale(d.b));
      ///////////      });

 
          ////////////////////////////////////////////////////////////
/////// the real xAxis here: taken out because this chart doesn't need it but can turn back on here
  
 ////   chart.append("g")
  ////          .attr("class", "x axis")
         /////   .attr("transform", "translate(" + (margin + labelWidth) + ","+ (height - axisMargin - margin)+")")
    ///        .attr("transform", "translate(" + (margin + labelWidth) + ","+ ((height - margin)-50)+")")
    ////        .call(xAxis);


 

  chart.append("g")
      .attr("class", "y axis")
            .attr("transform", "translate(10,-20)")
      .call(yAxis);
 

    
    
  
  }

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle7() {
  
    
	  
	  
	  
        var fnC = document.getElementById("fnC");
    fnC.setAttribute("style", "display:none !important; ");
 
	       var fnD = document.getElementById("fnD");
    fnD.setAttribute("style", "display:none !important; ");
 	  
	  
	  
	  
	  
	  
 
   d3.select("body").selectAll(".bgbg")
      .style('display', 'inline-block');
    
    
  d3.select("#vis").select("svg").remove();
d3.select("#vis").select("g").remove();

  
  
  }


  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle8() {
      div.style("display", "none");

    
	       var fnD = document.getElementById("fnD");
    fnD.setAttribute("style", "display:inline-block !important; ");
 	  
	  
   
  d3.select("#vis").select("svg").remove();
d3.select("#vis").select("g").remove();

  
  

   d3.select("body").selectAll(".bgbg")
      .style('display', 'none');

  ///////////////bgimage.setAttribute("style", "display:none; ");

/*  d3.select("#vis").select("svg").remove();
d3.select("#vis").select("g").remove();
*/
  
  
        var vis = document.getElementById("vis");
    vis.setAttribute("style", "display:inline-block !important; ");
    vis.setAttribute("style", "visibility:visible; ");
    
 
    var axisMargin = 20,
            margin = 10,
            valueMargin = 1,
            labelWidth = 50;
    
    var padding=10;
   
    
         var data=[
           {"date":2000, "value": .81},
            {"date":2001, "value": .84},
            {"date":2002, "value": .83},   
            {"date": 2003, "value": .85},
           {"date": 2004, "value": .86},
            {"date": 2005, "value": .92},
            {"date": 2006, "value": .71},   
            {"date": 2007, "value": .76},
            {"date": 2008, "value": .78},
            {"date": 2009, "value": .8},
           {"date": 2010, "value": .89},
            {"date": 2011, "value": .9},
            {"date": 2012, "value": .93},   
            {"date": 2013, "value": .92} 
         
         
         ];
            
            
  
    
  
     
    //////////////    var max = d3.max(data, function(d) { return d.a; });
       var max = 91479;

 
	
  var wwidth= (window.innerWidth);
  var wwwidth= (window.innerWidth-70+"px");
  var wwwwidth= (window.innerWidth-70);  
	var hhheight= (window.innerHeight-50+"px");
  var hheight= window.innerHeight;
    
var width = wwidth, height = hheight;
var range = [];
 
       var countttt = (wwwwidth/13+"px");
 
     
    /*
    var width = 500, height = 500;
    */
    
 var x = d3.scale.linear()
    .range([0, width])
//////////  .domain([0, data.length -1]);
  .domain([0, data.length]);
 /////////////////////     .domain([2000, 2014]);
 
    
var y = d3.scale.linear()
    .range([height, 0])
    .domain([.5, 1.1]);

	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	   
	
     var scale = d3.scale.linear()
            .domain([2000, 2013])
///////        .range([0, width - margin*4 - labelWidth]);
        .range([0, width - margin*4 - labelWidth]);
///////        .range([0, wwwidth]);
  ///?           .range([0, width]);
  
	  
	  
	  
	  
	  var xAxis = d3.svg.axis()
         //////   .scale(scale)
            .scale(scale)
	  	  .ticks(6)

       ////////     .tickSize(-height + 4*margin + axisMargin)
  .tickFormat(d3.format("d.date"))
   .orient("bottom");
    
    
	/*   
	    
	  
var xAxis = d3.svg.axis()
    .scale(x)
  .tickFormat(d3.format("d.date"))
    .orient("bottom");
 */
	  
var yAxis = d3.svg.axis()
 .scale(y)
 /////      .scale(yScale)
    .orient("left");

    
    
    
    
    

var line = d3.svg.area()
    .x(function(d, i) { return x(i); })
    .y1(function(d) { return y(d.value); })
    .y0(height)
    .interpolate('cardinal');

	  
	  
	  
	  
var svg = d3.select("#vis").append("svg")
    .attr("width", wwwidth)
    .attr("height", hhheight)
    .append("g")
  ////////////  .attr("transform", "translate(50, 10)")
    .attr("transform", "translate(50, -50)")




/*
var svg = d3.select("#vis").append("svg")
    .attr("width", width - 210)
    .attr("height", height - 210)
    .append("g")
   ///////// .attr("transform", "translate(50, 10)")
    .attr("transform", "translate(100, -20)")
*/


  svg.append("path")
      .datum(data)
      .attr("class", "line")
      .attr("d", line);
	  
 /*
svg.append("g")
      .attr("class", "x axis")
  ///////////    .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

 */
/////////////////////////////////// 

	  

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
 

	  
	  
	  
	      svg.append("g")
            .attr("class", "x axis")  // two classes, one for css formatting, one for selection below
     ////       .attr("transform", "translate(0," + (height - padding) + ")")
            .attr("transform", "translate(0," + (height + (padding/2)) + ")")
            .call(xAxis);
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  /*
     var scale = d3.scale.linear()
            .domain([2000, 2013])
            .range([0, width - margin*4 - labelWidth]);

	  var xAxis = d3.svg.axis()
            .scale(scale)
   .tickFormat(d3.format("d.date"))
   .orient("bottom");
     

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

    
    
    
    
     
	  

    
    
    

var line = d3.svg.area()
    .x(function(d, i) { return x(i); })
    .y1(function(d) { return y(d.value); })
    .y0(height)
    .interpolate('cardinal');

	  
var svg = d3.select("#vis").append("svg")
    .attr("width", wwwidth)
    .attr("height", height)
    .append("g")
  ////////////  .attr("transform", "translate(50, 10)")
    .attr("transform", "translate(50, -50)")



  svg.append("path")
      .datum(data)
      .attr("class", "line")
      .attr("d", line);
 
	  
	  
      // draw x axis with labels and move to the bottom of the chart area
        svg.append("g")
            .attr("class", "xaxis axis")  // two classes, one for css formatting, one for selection below
            .attr("transform", "translate(0," + (height - padding) + ")")
            .call(xAxis);
            
  // draw y axis with labels and move in from the size by the amount of padding
        svg.append("g")
        	.attr("class", "axis")
            .attr("transform", "translate("+padding+",0)")
            .call(yAxis)
	  
	  
	  */

        // now rotate text on x axis
        // solution based on idea here: https://groups.google.com/forum/?fromgroups#!topic/d3-js/heOBPQF3sAY
        // first move the text left so no longer centered on the tick
        // then rotate up to get 45 degrees.
        svg.selectAll(".xaxis text")  // select all the text elements for the xaxis
                .attr("text-anchor", "start")  
  		.attr("transform", function(d) {
             return "translate(" + this.getBBox().height*-2 + "," + this.getBBox().height + ")rotate(-45)";
         });
    
        // now add titles to the axes
        svg.append("text")
            .attr("text-anchor", "middle")  // this makes it easy to centre the text as the transform is applied to the anchor
            .attr("transform", "translate(-50,"+(height/2)+")rotate(-90)")  // text is drawn off the screen top left, move down and out and rotate
            .text("Avg Volume/Capacity Ratio")
                    .attr("id", "legendtext")  ;

        svg.append("text")
            .attr("text-anchor", "middle")  // this makes it easy to centre the text as the transform is applied to the anchor
   ////////         .attr("transform", "translate("+ (width/2) +","+(height-(padding*3))+")")  // centre below axis
            .attr("transform", "translate("+ (width/2) +","+(height+(45))+")")  // centre below axis
            .text("Year")
                    .attr("id", "legendtext")  ;

	  
	  
    
	  
	  
	  
	  
    
    
    // Add the scatterplot text
     svg.selectAll("rect")
        .data(data)
      .enter().append("text")

        .attr("x", function(d, i) { return x(i); })
        .attr("y", function(d) { return y(d.value); })
       .attr("transform", "translate(0,50)")
.attr("class", "highlight")
           .text(function(d) {
            if (d.value == .84) {return "T-REX Starts"}
            else 	{  }

                 if (d.value == .71) {return "T-REX Completed"}
            else 	{  }

     
                 if (d.value == .8) {return "Congestion Hits Pre- Construction Levels"}
            else 	{  }

     
     })
    
     
    
    
    
     
    
    
    
      
    
    // Add the scatterplot
/////    svg.selectAll("dot")
    svg.selectAll("rect")
        .data(data)
 ////////     .enter().append("circle")
      .enter().append("rect")
//////////////        .attr("r", 12.3)
     /////   .attr("r", 12.3)
        .attr("class", "plotter")
	

           .attr('height', hhheight)
	   .attr('width', countttt)
           
////////// .attr('width', function(d) { return d * 2; }) // data point * 2 pixels wide 
					     
  
	  
	     .attr("x", function(d, i) { return x(i); })
 
	  
	/*  
	    
  
    
    
    
    
    // Add the scatterplot
    svg.selectAll("dot")
        .data(data)
      .enter().append("circle")
        .attr("r", 6.3)
        .attr("class", "plotter")
      .attr("cx", function(d, i) { return x(i); })
        .attr("cy", function(d) { return y(d.value); })

     
    */
     
    
    
 /*   

 .on("mousemove", function(d){
            div.style("left", d3.event.pageX-23+"px");
            div.style("top", (d3.event.pageY)-45+"px");
            div.style("display", "inline-block");
            div.style("position", "absolute");
                        div.attr("class", "fixedtooltip");

             div.html("<h4>"+(d.value)+" Volume / Capacity Ratio </h4>");
         })

        .on("mouseout", function(d){
            div.style("display", "none");
        })
  
  
    
    */
   
    
    
    
    
    
    
  
  }

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle9() {
  
  
	       var fnD = document.getElementById("fnD");
    fnD.setAttribute("style", "display:none !important; ");
 	  
  
  
  d3.select("#vis").select("svg").remove();
d3.select("#vis").select("g").remove();

    d3.select("#vis").style('display', 'none');
 
  

   d3.select("body").selectAll(".bgbg")
      .style('display', 'inline-block');

  
  
  
  }

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle10() {}

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle11() {}

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle12() {}

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle13() {}

  ////////////////
  /////////////////////////
  ///////////////////////


  function showTitle14() {}

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle15() {}

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle16() {}

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle17() {}

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle18() {}

  ////////////////
  /////////////////////////
  ///////////////////////



  function showTitle19() {}

  ////////////////
  /////////////////////////
  ///////////////////////


  function showTitle20() {}

  ////////////////
  /////////////////////////
  ///////////////////////


  function showTitle21() {}

  ////////////////
  /////////////////////////
  ///////////////////////


  function showTitle22() {

         
        var titleCloser = document.getElementById("titleCloser");
    titleCloser.setAttribute("style", "display:none; ");


  }

 ////////////////
  /////////////////////////
  ///////////////////////


  function showTitle23() {
 

        var titleCloser = document.getElementById("titleCloser");
    titleCloser.setAttribute("style", "display:inline-block; ");



  }

  ////////////////
  /////////////////////////
  ///////////////////////








  ////////////////
  /////////////////////////
  ///////////////////////
  /**
   * UPDATE FUNCTIONS
   *
   * These will be called within a section
   * as the user scrolls through it.
   *
   * We use an immediate transition to
   * update visual elements based on
   * how far the user has scrolled
   *
   */

  /**



  /**
   * DATA FUNCTIONS
   *
   * Used to coerce the data into the
   * formats we need to visualize
   *
   */

  /**
   * activate -
   *
   * @param index - index of the activated section
   */
  chart.activate = function(index) {
    activeIndex = index;
    var sign = activeIndex - lastIndex < 0 ? -1 : 1;
    var scrolledSections = d3.range(lastIndex + sign, activeIndex + sign, sign);
    scrolledSections.forEach(function(i) {
      activateFunctions[i]();
    });
    lastIndex = activeIndex;
  };

  /**
   * update
   *
   * @param index
   * @param progress
   */
  chart.update = function(index, progress) {
    updateFunctions[index](progress);
  };

  // return chart function
  return chart;
};

/**
 * display - called once data
 * has been loaded.
 * sets up the scroller and
 * displays the visualization.
 *
 * @param data - loaded tsv data
 */
function display() {
  // create a new plot and
  // display it
  var plot = scrollVis();
  d3.select("#vis")
    ////  .datum(data)
    .call(plot);

  // setup scroll functionality
  var scroll = scroller().container(d3.select("#graphic"));

  // pass in .step selection as the steps
  scroll(d3.selectAll(".step"));

  // setup event handling
  scroll.on("active", function(index) {
    // highlight current step text
    for (var i = 0; i < window.slides.length; i++) {
      var slide = window.slides[i];
      if (i + 1 === index) {
        slide.show();
        console.log("show");
      } else {
        slide.hide();
        console.log("hide");
      }
    }

    ////////////////document.body.style.backgroundImage = "url("+index+".jpg)";

    d3.selectAll("#container" + index).style("display", function(d, i) {
      return i == index ? "none" : "inline-block";
    });

    d3.selectAll("#container" + (index - 1)).style("display", function(d, i) {
      return i == index ? "inline-block" : "none";
    });

    d3.selectAll("#container" + (index + 1)).style("display", function(d, i) {
      return i == index ? "inline-block" : "none";
    });

    ///////////var getBG = document.getElementById( 'container'+index );
    ///////    getBG.setAttribute("style", "background-image:url("+index+".jpg); "  );

    ///////// console.log(index);

    // activate current section
    plot.activate(index);
  });

  scroll.on("progress", function(index, progress) {
    plot.update(index, progress);
  });
}

// load data and display
document.addEventListener("DOMContentLoaded", function() {
  display();
});

window.addEventListener("resize", onResize);

function onResize(h) {
  var height = window.windowHeight;
  var width = window.windowWidth;

  var eBG = document.getElementById("bg" + h);
  /////eBG.style.height = eBG.parentElement.clientHeight;
}
