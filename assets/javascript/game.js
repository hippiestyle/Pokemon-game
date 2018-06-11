
var isFirstGuess = 0;

$("#pikachu").on("click", function() {

    if (isFirstGuess === 0) {

        $(".item1").removeClass(".item1").addClass("item5");
        isFirstGuess++; 
        $("#lede").html("Now Choose Your Enemy!");
        $("#pikachuSound")[0].play();



    } else {
        $(".item1").removeClass("item1").addClass("item6");
        $("#lede").html("FIGHT");
        $(".item7").css("visibility", "visible");
        $("#pikachuSound")[0].play();


        } 
    
});

$("#onyx").on("click", function() {

    if (isFirstGuess === 0) {

    $(".item2").removeClass("item2").addClass("item5");
    isFirstGuess++; 
    $("#lede").html("Now Choose Your Enemy!");
    $("#onyxSound")[0].play();
    


} else  {
    $(".item2").removeClass("item2").addClass("item6");
    $(".item7").css("visibility", "visible");
    $("#lede").html("FIGHT!");  
    isFirstGuess++; 

}

    });

$("#magnemite").on("click", function() {

    if (isFirstGuess === 0) {

   $(".item3").removeClass("item3").addClass("item5");
    $("#lede").html("Now Choose Your Enemy!");
    isFirstGuess++; 
    $("#magnemiteSound")[0].play();

    } else {
        $(".item3").removeClass("item3").addClass("item6");
        $(".item7").css("visibility", "visible");
        $("#lede").html("FIGHT!");
        $("#magnemiteSound")[0].play();
        isFirstGuess++; 
        }
    });


$("#ivysaur").on("click", function() {


    if (isFirstGuess === 0) {

    $(".item4").removeClass("item4").addClass("item5");
    $("#lede").html("Now Choose Your Enemy!");
    isFirstGuess++; 
    $("#ivysaurSound")[0].play();


    } else {
        $(".item4").removeClass("item4").addClass("item6");
        $("#lede").html("FIGHT!");
        $(".item7").css("visibility", "visible");
        isFirstGuess++; 
        $("#ivysaurSound")[0].play();

    }


    });



 





