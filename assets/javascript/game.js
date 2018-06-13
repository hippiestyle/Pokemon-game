
var isFirstGuess = 0;
var userActiveIndex; 
var enemyActiveIndex = 0; 

var pokemonList = [
    {
        // 0 
       name: "pikachu",
       HP: 150,
       AP: 55,
       CA: 25
    },

    {
        // 1
       name: "onyx",
       HP: 250,
       AP: 25,
       CA: 25
    },
    
    {
        // 2
       name: "magnemite",
       HP: 100,
       AP: 25,
       CA: 25
    },
    
    {
        // 3
       name: "ivysaur",
       HP: 300,
       AP: 25,
       CA: 25
    },

    {
        // 4 
       name: "user",
       HP: 0,
       AP: 0,
       CA: 0
    },

    {
        // 5 
       name: "enemy",
       HP: 0,
       AP: 0,
       CA: 0

    }
];

$("#pikachu").on("click", function() {

    if (isFirstGuess === 0) {
        
        userPokemon = "pikachu";
        $(".item1").removeClass(".item1").addClass("item5");
        isFirstGuess++; 
        $("#lede").html("Now Choose Your Enemy!");
        // $("#pikachuSound")[0].play();
        $("#user-HP").html(pokemonList[0].HP);
        $("#user-AP").html(pokemonList[0].AP);
        $("#user-CA").html(pokemonList[0].CA);
        pokemonList[4].HP = pokemonList[0].HP;
        pokemonList[4].HP = pokemonList[0].AP;
        pokemonList[4].HP = pokemonList[0].CA;

        userActiveIndex = 0; 


    } else {

        compPokemon = "pikachu";
        $(".item1").removeClass("item1").addClass("item6");
        $("#lede").html("FIGHT");
        $(".item7").css("visibility", "visible");
        // $("#pikachuSound")[0].play();
        isFirstGuess++;
      
        $("#comp-HP").html(pokemonList[0].HP);
        $("#comp-AP").html(pokemonList[0].AP);
        $("#comp-CA").html(pokemonList[0].CA);
        pokemonList[5].HP = pokemonList[0].HP;
        pokemonList[5].HP = pokemonList[0].AP;
        pokemonList[5].HP = pokemonList[0].CA;
        enemyActiveIndex = 0;  

        } 
    
});

$("#onyx").on("click", function() {

    if (isFirstGuess === 0) {

    userPokemon = "onyx";
    $(".item2").removeClass("item2").addClass("item5");
    isFirstGuess++; 
    $("#lede").html("Now Choose Your Enemy!");
    $("#onyxSound")[0].play();

    $("#user-HP").html(pokemonList[1].HP);
    $("#user-AP").html(pokemonList[1].AP);
    $("#user-CA").html(pokemonList[1].CA);
    pokemonList[4].HP = pokemonList[1].HP;
    pokemonList[4].HP = pokemonList[1].AP;
    pokemonList[4].HP = pokemonList[1].CA;

    userActiveIndex = 1; 


} else  {

    userPokemon = "onyx";
    $(".item2").removeClass("item2").addClass("item6");
    $(".item7").css("visibility", "visible");
    $("#lede").html("FIGHT!");  
    isFirstGuess++; 

    $("#comp-HP").html(pokemonList[1].HP);
    $("#comp-AP").html(pokemonList[1].AP);
    $("#comp-CA").html(pokemonList[1].CA);
    pokemonList[5].HP = pokemonList[1].HP;
    pokemonList[5].HP = pokemonList[1].AP;
    pokemonList[5].HP = pokemonList[1].CA;
    enemyActiveIndex = 1; 

}

});

$("#magnemite").on("click", function() {

    if (isFirstGuess === 0) {

    userPokemon = "magnemite";        
   $(".item3").removeClass("item3").addClass("item5");
    $("#lede").html("Now Choose Your Enemy!");
    isFirstGuess++; 
    $("#magnemiteSound")[0].play();

    $("#user-HP").html(pokemonList[2].HP);
    $("#user-AP").html(pokemonList[2].AP);
    $("#user-CA").html(pokemonList[2].CA);
    pokemonList[4].HP = pokemonList[2].HP;
    pokemonList[4].HP = pokemonList[2].AP;
    pokemonList[4].HP = pokemonList[2].CA;
    userActiveIndex = 2; 
    

    } else {

        userPokemon = "magnemite";
        $(".item3").removeClass("item3").addClass("item6");
        $(".item7").css("visibility", "visible");
        $("#lede").html("FIGHT!");
        $("#magnemiteSound")[0].play();
        isFirstGuess++; 

        $("#comp-HP").html(pokemonList[2].HP);
        $("#comp-AP").html(pokemonList[2].AP);
        $("#comp-CA").html(pokemonList[2].CA);
        pokemonList[5].HP = pokemonList[2].HP;
        pokemonList[5].HP = pokemonList[2].AP;
        pokemonList[5].HP = pokemonList[2].CA;
        enemyActiveIndex = 2;
        }

});


$("#ivysaur").on("click", function() {


    if (isFirstGuess === 0) {

    userPokemon = "ivysaur";
    $(".item4").removeClass("item4").addClass("item5");
    $("#lede").html("Now Choose Your Enemy!");
    isFirstGuess++; 
    $("#ivysaurSound")[0].play();
    userPokemonHP = ivysaurHP;
    userPokemonAP = ivysaurAP;
    userPokemonCA = ivysaurCA;
    $("#user-HP").html(pokemonList[3].HP);
    $("#user-AP").html(pokemonList[3].AP);
    $("#user-CA").html(pokemonList[3].CA);
    pokemonList[4].HP = pokemonList[3].HP;
    pokemonList[4].HP = pokemonList[3].AP;
    pokemonList[4].HP = pokemonList[3].CA;
    userActiveIndex = 3; 


    } else {


        userPokemon = "ivysaur";

        $(".item4").removeClass("item4").addClass("item6");
        $("#lede").html("FIGHT!");
        $(".item7").css("visibility", "visible");
        isFirstGuess++; 
        $("#ivysaurSound")[0].play();
        compPokemonHP = ivysaurHP;
        compPokemonAP = ivysaurAP;
        compPokemonCA = ivysaurCA;
        $("#comp-HP").html(pokemonList[3].HP);
        $("#comp-AP").html(pokemonList[3].AP);
        $("#comp-CA").html(pokemonList[3].CA);
        pokemonList[5].HP = pokemonList[3].HP;
        pokemonList[5].HP = pokemonList[3].AP;
        pokemonList[5].HP = pokemonList[3].CA;

        enemyActiveIndex = 3; 

    }


    });


    $("#attackButton").on("click", function() {
     
       pokemonList[4].HP -= pokemonList[5].AP;
        $("#user-HP").html(pokemonList[4].HP);


    });


 







