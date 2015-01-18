$(function(){

    var $flipContainer = $(".flip-container"),
        aryFlipContainers = [
            { 
                index: "1", 
                positionID: "2-1", 
                delay: "250", 
                flipCards: [
                    {
                        color: "sky"
                    },
                    {
                        color: "ham"
                    },
                    {
                        color: "plum"
                    },
                    {
                        color: "parsley"
                    },
                    {
                        color: "dusk"
                    },
                ]
            },
            { 
                index: "2", 
                positionID: "3-1", 
                delay: "250", 
                flipCards: [
                    {
                        // color: "ham"
                        color: "plum"
                    },
                    {
                        color: "aqua"
                    },
                    {
                        color: "ocean"
                    },
                    {
                        color: "ham"
                    },
                    {
                        color: "plum",
                        dontAnimate: true
                    },
                ]
            },
            { 
                index: "3", 
                positionID: "1-2", 
                delay: "1000", 
                flipCards: [
                    {
                        color: "citron"
                    },
                    {
                        color: "pink"
                    },
                    {
                        color: "waves"
                    },
                    {
                        color: "sky"
                    },
                    {
                        color: "mandarin"
                    },
                ]
            },
            { 
                index: "4", 
                positionID: "2-2", 
                delay: "500", 
                flipCards: [
                    {
                        color: "sky"
                    },
                    {
                        color: "ocean"
                    },
                    {
                        color: "citron"
                    },
                    {
                        color: "plum"
                    },
                    {
                        color: "parsley"
                    },
                    {
                        color: "sky",
                        dontAnimate: true
                    },
                ]
            },
            { 
                index: "5", 
                positionID: "3-2", 
                delay: "250", 
                flipCards: [
                    {
                        // color: "mandarin"
                        color: "citron"
                    },
                    {
                        color: "kite"
                    },
                    {
                        color: "parsley"
                    },
                    {
                        color: "plum"
                    },
                    {
                        color: "navy"
                    },
                    {
                        color: "citron",
                        dontAnimate: true
                    },
                ]
            },
            { 
                index: "6", 
                positionID: "1-3", 
                delay: "750", 
                letter: "M", 
                flipCards: [
                    {
                        color: "rose"
                    },
                    {
                        color: "apple"
                    },
                    {
                        color: "aqua"
                    },
                    {
                        color: "kite"
                    },
                    {
                        color: "rose",
                        dontAnimate: true
                    },
                ]
            },
            { 
                index: "7", 
                positionID: "2-3", 
                delay: "250", 
                letter: "O", 
                flipCards: [
                    {
                        // color: "apple"
                        color: "aqua"
                    },
                    {
                        color: "dusk"
                    },
                    {
                        color: "citron"
                    },
                    {
                        color: "waves"
                    },
                    {
                        color: "aqua",
                        dontAnimate: true
                    },
                ]
            },
            { 
                index: "8", 
                positionID: "3-3", 
                // delay: "750", 
                letter: "R", 
                flipCards: [
                    {
                        // color: "citron"
                        color: "ocean"
                    },
                    {
                        color: "apple"
                    },
                    {
                        color: "sky"
                    },
                    {
                        color: "apple"
                    },
                    {
                        color: "ocean",
                        dontAnimate: true
                    },
                ]
            },
            { 
                index: "9", 
                positionID: "4-3", 
                delay: "500", 
                letter: "E", 
                flipCards: [
                    {
                        color: "match-background"
                    },
                    {
                        color: "match-background"
                    },
                    {
                        color: "match-background"
                    },
                    {
                        color: "match-background"
                    },
                    {
                        color: "match-background"
                    },
                    {
                        color: "match-background",
                        dontAnimate: true
                    },
                ]
            },
            { 
                index: "10", 
                positionID: "3-4", 
                delay: "250", 
                flipCards: [
                    {
                        color: "kite"
                    },
                    {
                        color: "dusk"
                    },
                    {
                        color: "parsley"
                    },
                    {
                        color: "plum"
                    },
                    {
                        color: "hibiscus"
                    },
                ]
            },
        ];


    var removeLetters = function () {

        var $flipContainer = $(this).parent().parent();

        // if parent flipcard el does NOT have class of "hasLetter", remove letter svg/polygon etc
        if(!$flipContainer.hasClass( "hasLetter" )) {
            $(this).remove();
        }

        // remove triangle svg from E flip-card
        // not used as we ned the triangle to be there to create the visual animation flip of the letter E
        if($flipContainer.hasClass( "flip-container--4-3" )) {
            if($flipContainer.find(".triangle")){
                // console.log("has triangle");
                // $flipContainer.find(".triangle").remove();
            }
            // console.log("TRUE");
        }
    };


    for (var i = 0; i < aryFlipContainers.length; i++) {

        var letter, hasLetter;
        if (aryFlipContainers[i].letter) {
            letter = aryFlipContainers[i].letter;
            hasLetter = " hasLetter hasLetter--" + letter;
        } else {
            hasLetter = "";
        }

        $flipContainer
            .clone()
            .appendTo( ".viewport" )
            .addClass( "flip-container--" + aryFlipContainers[i].positionID + " delay-" + aryFlipContainers[i].delay + hasLetter);

            var $flipCard = $(".flip-container--" + aryFlipContainers[i].positionID + " .flip-card");

            if (aryFlipContainers[i].flipCards) {

                // first part
                // clone a single flip-card for the first part of the flip 
                if (i!==0 && i!==2 && i!==9) {
                    $flipCard
                        .clone()
                        .appendTo( ".flip-container--" + aryFlipContainers[i].positionID )
                        .attr("class", "flip-card flip-card--first")
                            .find(".triangle")
                            .attr("class", "triangle " + aryFlipContainers[i].flipCards[0].color)
                            .end()
                                .find(".letter-left, .letter-right")
                                .each(removeLetters);
                }

                // second part
                // determine the correct color to use
                var numColorFromEndOfArray;
                if (i===0 || i===2 || i===9) {
                    numColorFromEndOfArray = 1;
                }else{
                    numColorFromEndOfArray = 2;
                }

                // clone a single flip-card for the second part of the flip (the end of this animation fires off the main flips)
                // console.log(aryFlipContainers[i].flipCards[aryFlipContainers[i].flipCards.length - numColorFromEndOfArray].color);
                $flipCard
                    .clone()
                    .appendTo( ".flip-container--" + aryFlipContainers[i].positionID )
                    .attr("class", "flip-card flip-card--second")
                        .find(".triangle")
                        .attr("class", "triangle " + aryFlipContainers[i].flipCards[aryFlipContainers[i].flipCards.length - numColorFromEndOfArray].color)
                        .end()
                            .find(".letter-left, .letter-right")
                            .each(removeLetters);


                for (var j = 0; j < aryFlipContainers[i].flipCards.length; j++) {

                    var dontAnimateClass;
                    if (aryFlipContainers[i].flipCards[j].dontAnimate) {
                        dontAnimateClass = " flip-card--dont-animate";
                    }else{
                        dontAnimateClass = "";
                    }

                    var halfFlipClass;
                    if (i===0 || i===2 || i===9) {
                        halfFlipClass = " flip-card--half-flip";
                    }else{
                        halfFlipClass = "";
                    }

                    // now clone the rest of the flip-cards
                    $flipCard
                        .clone()
                        .appendTo( ".flip-container--" + aryFlipContainers[i].positionID )
                        .attr("class", "flip-card flip-card--" + (j+1) + dontAnimateClass + halfFlipClass)
                            .find(".triangle")
                            .attr("class", "triangle " + aryFlipContainers[i].flipCards[j].color)
                            .end()
                                .find(".letter-left, .letter-right")
                                .each(removeLetters);
                }
            }
            // remove the original flip card
            $flipCard.remove();
    }
    // remove the original flip container
    $flipContainer.remove();


    var selectorString = "";

    // TODO - make this dynamic using a loop somehow - see below start
    // var word = "MORE";
    // for (var k = 0; k < word.length; k++) {
    //     selectorString += ".hasLetter--" + word.substring(k, k+1) + " .letter-left--letter-o, .hasLetter--" + word.substring(k, k+1) + " .letter-right--letter-o, ";
    // }
    // console.log("selectorString = " + selectorString);
    // M
    selectorString += ".hasLetter--M .letter-left--letter-o, .hasLetter--M .letter-right--letter-o, ";
    selectorString += ".hasLetter--M .letter-left--letter-r, .hasLetter--M .letter-right--letter-r, ";
    selectorString += ".hasLetter--M .letter-left--letter-e, .hasLetter--M .letter-right--letter-e, ";
    // O
    selectorString += ".hasLetter--O .letter-left--letter-m, .hasLetter--O .letter-right--letter-m, ";
    selectorString += ".hasLetter--O .letter-left--letter-r, .hasLetter--O .letter-right--letter-r, ";
    selectorString += ".hasLetter--O .letter-left--letter-e, .hasLetter--O .letter-right--letter-e, ";
    // R
    selectorString += ".hasLetter--R .letter-left--letter-m, .hasLetter--R .letter-right--letter-m, ";
    selectorString += ".hasLetter--R .letter-left--letter-o, .hasLetter--R .letter-right--letter-o, ";
    selectorString += ".hasLetter--R .letter-left--letter-e, .hasLetter--R .letter-right--letter-e, ";
    // E
    selectorString += ".hasLetter--E .letter-left--letter-m, .hasLetter--E .letter-right--letter-m, ";
    selectorString += ".hasLetter--E .letter-left--letter-o, .hasLetter--E .letter-right--letter-o, ";
    selectorString += ".hasLetter--E .letter-left--letter-r, .hasLetter--E .letter-right--letter-r";
    $(selectorString).remove();


    $(".flip-card--second").bind('oanimationend animationend webkitAnimationEnd', function() { 
        // console.log("animation ended");
        // console.log($(this).attr("class"));

        $(this)
            .parent()
                .find(".flip-card")
                    .show()
                        .parent()
                        .find(".flip-card--second")
                        .end()
                            .parent()
                            .find(".flip-card")
                            .css("-webkit-animation-play-state", "running")
                            ;

    });

    $(".flip-card--first").bind('oanimationend animationend webkitAnimationEnd', function() { 
        $(this)
            .parent()
                .find(".flip-card")
                    .show()
                        .parent()
                        .find(".flip-card--first")
                        .remove()
                        .end()
                            .parent()
                            // this is targetting all flip card letters inc the ones in the second flip which we dnt want to target
                            // TODO - find a way to exclude the second flip letters 
                            // .find(".flip-card .letter-left:not(.flip-card--second .letter-left), .flip-card .letter-right:not(.flip-card--second .letter-right))")
                            .find(".flip-card--1 .letter-left, .flip-card--1 .letter-right, .flip-card--2 .letter-left, .flip-card--2 .letter-right, .flip-card--3 .letter-left, .flip-card--3 .letter-right, .flip-card--4 .letter-left, .flip-card--4 .letter-right, .flip-card--5 .letter-left, .flip-card--5 .letter-right, .flip-card--6 .letter-left, .flip-card--6 .letter-right, .flip-card--7 .letter-left, .flip-card--7 .letter-right")
                            .css("-webkit-animation-play-state", "running")
                            ;

    });

});