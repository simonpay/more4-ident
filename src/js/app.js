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

	// get el
	// clone el in loop and add classes
	// set color of svg
	// console.log($tri);
	var $tri = $(".svg-tri");
	$tri
		.clone()
		.attr("class", "svg-tri svg-tri--1")
		.appendTo( ".svg-container" )
		.clone()
		.attr("class", "svg-tri svg-tri--2")
		.appendTo( ".svg-container" );
		// .end();


});