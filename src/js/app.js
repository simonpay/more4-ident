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
                delay: "500", 
                flipCards: [
                    {
                        color: "ham"
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
                        color: "plum flip-card--dont-animate",
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
                delay: "750", 
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
                delay: "1000", 
                flipCards: [
                    {
                        color: "mandarin"
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
                delay: "250", 
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
                delay: "1250", 
                letter: "O", 
                flipCards: [
                    {
                        color: "apple"
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
                delay: "750", 
                letter: "R", 
                flipCards: [
                    {
                        color: "citron"
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
                delay: "250", 
                letter: "E", 
                flipCards: [
                    {
                        color: "elephant"
                    },
                    {
                        color: "elephant"
                    },
                    {
                        color: "elephant"
                    },
                    {
                        color: "elephant"
                    },
                    {
                        color: "elephant"
                    },
                    {
                        color: "elephant",
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
        // console.log($(this).parent().parent().hasClass( "delay-250" ));

        var $flipContainer = $(this).parent().parent();

        // if parent flipcard el does NOT have class of "hasLetter", remove letter svg/polygon etc
        if(!$flipContainer.hasClass( "hasLetter" )) {
            $(this).remove();
        }else{
            // var letter = $flipContainer.attr("class");
            if($flipContainer.hasClass( "hasLetter--M" )) {

                // console.log($flipContainer.find(".letter-left--letter-o"));

                // remove O, R, E
                // console.log($flipContainer.find("letter-left--letter-o"));
                // console.log($(this).attr("class"));
                // console.log($flipContainer);

                // if($flipContainer.find(".letter-left--letter-o")) {
                if($(this).hasClass("letter-left--letter-o")) {
                    // console.log($flipContainer.find(".letter-left--letter-o"));
                    // console.log("GO REMOVE");
                    // $(this).remove();
                }

                // if $(this) (the current letter svg path) has a class of "letter-left--letter-o", remove $(this)
                if ($(this).hasClass("letter-left--letter-o")) {
                    // console.log($(this).attr("class"));
                    // $(this).remove();
                }
                // $flipContainer.find("letter-left--letter-o, letter-right--letter-o, letter-left--letter-r, letter-right--letter-r, letter-left--letter-e, letter-right--letter-e")
                //     .remove();
            }
        }
        



        // remove triangle svg from E flip-card
        // not used as we ned the triangle to be there to create the visual animation flip of the letter E
        if($flipContainer.hasClass( "flip-container--4-3" )) {
            // $(this).remove();
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

                // var flipCardFirstClass;
                // if (i===0 || i===2) {
                //     flipCardFirstClass = "flip-card--first-reverse";
                // }else{
                //     flipCardFirstClass = "flip-card--first";
                // }

                // clone a single flip-card for the first part of the flip
                // $flipCard
                //     .clone()
                //     .appendTo( ".flip-container--" + aryFlipContainers[i].positionID )
                //     .attr("class", "flip-card " + flipCardFirstClass + " " + aryFlipContainers[i].flipCards[0].color)
                //     .find(".letter-left, .letter-right")
                //     .each(removeLetters);

                for (var j = 0; j < aryFlipContainers[i].flipCards.length; j++) {


                    var dontAnimateClass;
                    if (aryFlipContainers[i].flipCards[j].dontAnimate) {
                        dontAnimateClass = " flip-card--dont-animate";
                    }else{
                        dontAnimateClass = "";
                    }
                    // now clone the rest of the flip-cards
                    $flipCard
                        .clone()
                        .appendTo( ".flip-container--" + aryFlipContainers[i].positionID )
                        // .attr("class", "flip-card flip-card--" + (j+1) + " " + aryFlipContainers[i].flipCards[j].color)
                        .attr("class", "flip-card flip-card--" + (j+1) + dontAnimateClass)
                            .find(".triangle")
                            .attr("class", "triangle " + aryFlipContainers[i].flipCards[j].color)
                            .end()
                                .find(".letter-left, .letter-right")
                                .each(removeLetters);
                }
            }
            $flipCard.remove();
    }
    
    $flipContainer.remove();

    var selectorString = "",
        word = "MORE";

    // for (var k = 0; k < word.length; k++) {
    //     selectorString += ".hasLetter--" + word.substring(k, k+1) + " .letter-left--letter-o, .hasLetter--" + word.substring(k, k+1) + " .letter-right--letter-o, ";
    // }
    // console.log("selectorString = " + selectorString);

    // TODO - make this dynamic using a loop
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

    // setTimeout(function(){
    //  $(".flip-card").show();
    // }, 2000);


    $(".flip-card--first-reverse").bind('oanimationend animationend webkitAnimationEnd', function() { 
        // console.log("animation ended");
        // console.log(this);
        // console.log($(this).parent().find(".flip-card:not(.flip-card--first-reverse)"));
        $(this)
            .parent()
                .find(".flip-card")
                    // .show()
                    // .parent()
                    // .find(".flip-card--first-reverse")
                            // .hide()
                            // .css("-webkit-animation-play-state", "running")
                            // .find(".letter-right")
                            //     .css("-webkit-animation-play-state", "running")
                            ;

    });

    $(".flip-card--first").bind('oanimationend animationend webkitAnimationEnd', function() { 
        $(this)
            .parent()
                .find(".flip-card:not(.flip-card--first)")
                    // .show()
                    // .find(".letter-right")
                    //     .css("-webkit-animation-play-state", "running")
                        ;

    });

});