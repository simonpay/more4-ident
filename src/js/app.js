window.onload=function() {
	// // Get the Object by ID
	// var a = document.getElementById("test-tri"); // this is the id on the object tag
	// // Get the SVG document inside the Object tag
	// var svgDoc = a.contentDocument;
	// // Get one of the SVG items by ID;
	// var svgItem = svgDoc.getElementById("path-test");
	// // Set the colour to something else
	// svgItem.setAttribute("fill", "#00b538");






};



$(function(){

	var $flipContainer = $(".flip-container");
	$flipContainer
		.clone()
		.appendTo( ".viewport" )
		.css({
			"top": "0%",
			"left": "25%"
		})
		.clone()
		.appendTo( ".viewport" )
		.css({
			"top"		: "25%",
			"left"		: "25%",
			"transform"	: "rotate(-180deg)"
		})
		.clone()
		.appendTo( ".viewport" )
		.css({
			"top"		: "50%",
			"left"		: "50%",
			"transform"	: "rotate(-180deg)"
		})
		.clone()
		.appendTo( ".viewport" )
		.css({
			"top"		: "0%",
			"left"		: "50%",
			"transform"	: "rotate(-180deg)"
		})
		.clone()
		.appendTo( ".viewport" )
		.css({
			"top"		: "25%",
			"left"		: "50%",
			"transform"	: "rotate(-180deg)"
		});


	var $flipCard = $(".flip-card");
	$flipCard
		.clone()
		.attr("class", "flip-card flip-card--1")
		.prependTo( ".flip-container" )
		.clone()
		.attr("class", "flip-card flip-card--2")
		.prependTo( ".flip-container" );





});