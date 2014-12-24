$(function(){

	var $flipContainer = $(".flip-container"),
		aryFlipContainers = [
		    { 
		    	positionID: "2-1", 
		    	delay: "250", 
		    	flipCards: [
		    		{
		    			className: "light-blue"
		    		},
		    		{
		    			className: "peach"
		    		},
		    		{
		    			className: "maroon"
		    		},
		    		{
		    			className: "green"
		    		},
		    		{
		    			className: "grey"
		    		},
		    	]
		    },
		    { 
		    	positionID: "3-1", 
		    	delay: "500", 
		    	flipCards: [
		    		{
		    			className: "peach"
		    		},
		    		{
		    			className: "mint-green"
		    		},
		    		{
		    			className: "blue"
		    		},
		    		{
		    			className: "peach"
		    		},
		    		{
		    			className: "maroon flip-card--dont-animate"
		    		},
		    	]
		    },
		    { 
		    	positionID: "1-2", 
		    	delay: "1000", 
		    	flipCards: [
		    		{
		    			className: "yellow"
		    		},
		    		{
		    			className: "pink"
		    		},
		    		{
		    			className: "dark-blue"
		    		},
		    		{
		    			className: "light-blue"
		    		},
		    		{
		    			className: "orange"
		    		},
		    	]
		    },
		    { 
		    	positionID: "2-2", 
		    	delay: "750", 
		    	// delay: "1",
		    	flipCards: [
		    		{
		    			className: "light-blue"
		    		},
		    		{
		    			className: "blue"
		    		},
		    		{
		    			className: "yellow"
		    		},
		    		{
		    			className: "maroon"
		    		},
		    		{
		    			className: "green"
		    		},
		    		{
		    			className: "light-blue flip-card--dont-animate"
		    		},
		    	]
		    },
		    { 
		    	positionID: "3-2", 
		    	delay: "1000", 
		    },
		    { 
		    	positionID: "1-3", 
		    	delay: "250", 
		    },
		    { 
		    	positionID: "2-3", 
		    	delay: "1250", 
		    },
		    { 
		    	positionID: "3-3", 
		    	delay: "750", 
		    },
		    { 
		    	positionID: "3-4", 
		    	delay: "250", 
		    },
		];


	// var cloneFlipContainerDelay = function (flipContainerIndex, positionID, delay) {

	// 	setTimeout(function(){

	// 		console.log("called: " + flipContainerIndex);

	// 		$flipContainer
	// 			.clone()
	// 			.appendTo( ".viewport" )
	// 			.addClass( "flip-container--" + positionID + " delay-" + delay);

	// 			var $flipCard = $(".flip-container--" + positionID + " .flip-card");

	// 			if (aryFlipContainers[flipContainerIndex].flipCards) {

	// 				for (var j = 0; j < aryFlipContainers[flipContainerIndex].flipCards.length; j++) {

	// 					// setTimeout(cloneFlipContainerDelay(j, positionID, aryFlipContainers[flipContainerIndex].flipCards[j].className), 5000);

	// 					$flipCard
	// 						.clone()
	// 						.appendTo( ".flip-container--" + positionID )
	// 						.attr("class", "flip-card flip-card--" + (j+1) + " " + aryFlipContainers[flipContainerIndex].flipCards[j].className);

	// 				}
	// 			}

	// 			$flipCard.remove();


	// 	}, delay);

	// };


	for (var i = 0; i < aryFlipContainers.length; i++) {

		// var cloneFlipContainerDelay = function (flipContainerIndex, positionID, delay) {
		// cloneFlipContainerDelay(i, aryFlipContainers[i].positionID, aryFlipContainers[i].delay);
		
		$flipContainer
			.clone()
			.appendTo( ".viewport" )
			.addClass( "flip-container--" + aryFlipContainers[i].positionID + " delay-" + aryFlipContainers[i].delay);

					 
			var $flipCard = $(".flip-container--" + aryFlipContainers[i].positionID + " .flip-card");

			if (aryFlipContainers[i].flipCards) {

				for (var j = 0; j < aryFlipContainers[i].flipCards.length; j++) {

					// setTimeout(cloneFlipContainerDelay(j, aryFlipContainers[i].positionID, aryFlipContainers[i].flipCards[j].className), 5000);

					$flipCard
						.clone()
						.appendTo( ".flip-container--" + aryFlipContainers[i].positionID )
						.attr("class", "flip-card flip-card--" + (j+1) + " " + aryFlipContainers[i].flipCards[j].className);

				}
			}

			$flipCard.remove();

	}
	
	$flipContainer.remove();

});