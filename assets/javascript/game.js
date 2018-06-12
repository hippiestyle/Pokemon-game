
var isFirstGuess = 0;

var userPokemon; 
var compPokemon; 


var pikachu = {
    HP: 150, 
    AP: 25, 
    CA: 25
}

var onyx = {
    HP: 220, 
    AP: 25,
    CA: 25 
}

var magnemite = {
    HP: 75, 
    AP: 25,
    CA: 25 
}

var ivysaur = {
    HP: 200, 
    AP: 25,
    CA: 25 
}

$("#pikachuHP").text(pikachu.HP);
console.log(pikachu.HP);
console.log(pikachu.AP); 


$("#pikachu").on("click", function() {

    

    if (isFirstGuess === 0) {
        
        userPokemon = "pikachu";
        $(".item1").removeClass(".item1").addClass("item5");
        isFirstGuess++; 
        $("#lede").html("Now Choose Your Enemy!");
        // $("#pikachuSound")[0].play();
        $("#user-HP").html(userPokemon.HP);
        $("#user-AP").html(userPokemon.AP);
        $("#user-CA").html(userPokemon.CA);



    } else {

        compPokemon = "pikachu";
        $(".item1").removeClass("item1").addClass("item6");
        $("#lede").html("FIGHT");
        $(".item7").css("visibility", "visible");
        $("#pikachuSound")[0].play();
        $("#comp-HP").text(compPokemon.HP);
        $("#comp-AP").text(compPokemon.AP);
        $("#comp-CA").text(compPokemon.CA);

        } 
    
});

$("#onyx").on("click", function() {

    if (isFirstGuess === 0) {

    $(".item2").removeClass("item2").addClass("item5");
    isFirstGuess++; 
    $("#lede").html("Now Choose Your Enemy!");
    $("#onyxSound")[0].play();
    $("")
    


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



 





