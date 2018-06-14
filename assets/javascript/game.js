
var isFirstGuess = 0;
var userActiveIndex; 
var enemyActiveIndex = 0; 


var userPokemonIndex = NaN; 
var enemyPokemonIndex = NaN; 

var pokemonList = [
    
    {
        // 0 
       name: "pikachu",
       HP: 150,
       AP: 8,
       CA: 25,
       compounder: 8 
    },

    {
        // 1
       name: "onyx",
       HP: 250,
       AP: 10,
       CA: 25,
       compounder: 10 
    },
    
    {
        // 2
       name: "magnemite",
       HP: 100,
       AP: 5,
       CA: 25,
       compounder: 5
    },
    
    {
        // 3
       name: "ivysaur",
       HP: 300,
       AP: 15,
       CA: 25,
       compounder: 15 
    }
];

function displayUserStats() {
$("#user-HP").html(pokemonList[userPokemonIndex].HP);
 $("#user-AP").html(pokemonList[userPokemonIndex].AP);
 $("#user-CA").html(pokemonList[userPokemonIndex].CA);
}

function displayEnemyStats () {
    $("#comp-HP").html(pokemonList[enemyPokemonIndex].HP);
    $("#comp-AP").html(pokemonList[enemyPokemonIndex].AP);
    $("#comp-CA").html(pokemonList[enemyPokemonIndex].CA);
}


$("#pikachu").on("click", function() {

    if (isNaN(userPokemonIndex) ) {
        
        userPokemonIndex = 0;
        $(".item1").removeClass(".item1").addClass("item5");
        isFirstGuess++; 
        $("#lede").html("Now Choose Your Enemy!");
        // $("#pikachuSound")[0].play();
        displayUserStats(); 
   
    } else {

        enemyPokemonIndex = 0;
        $(".item1").removeClass("item1").addClass("item6");
        $("#lede").html("FIGHT");
        $(".item7").css("visibility", "visible");
        // $("#pikachuSound")[0].play();
         displayEnemyStats(); 


        } 
    
});

$("#onyx").on("click", function() {

    if (isNaN(userPokemonIndex)) {

    userPokemonIndex = 1;
    $(".item2").removeClass("item2").addClass("item5");
    isFirstGuess++; 
    $("#lede").html("Now Choose Your Enemy!");
    $("#onyxSound")[0].play();
    displayUserStats(); 

} else  {
    
    enemyPokemonIndex = 1;
    $(".item2").removeClass("item2").addClass("item6");
    $(".item7").css("visibility", "visible");
    $("#lede").html("FIGHT!");  
    isFirstGuess++; 
    displayEnemyStats();
}

});

$("#magnemite").on("click", function() {

    if (isNaN(userPokemonIndex)) {

    userPokemonIndex = 2;
    $(".item3").removeClass("item3").addClass("item5");
    $("#lede").html("Now Choose Your Enemy!");
    isFirstGuess++; 
    $("#magnemiteSound")[0].play();
    displayUserStats(); 

    } else {

        enemyPokemonIndex = 2;
        $(".item3").removeClass("item3").addClass("item6");
        $(".item7").css("visibility", "visible");
        $("#lede").html("FIGHT!");
        $("#magnemiteSound")[0].play();
        isFirstGuess++; 
        displayEnemyStats(); 
        
        }

});


$("#ivysaur").on("click", function() {


    if (isNaN(userPokemonIndex)) {

    userPokemonIndex = 3;
    $(".item4").removeClass("item4").addClass("item5");
    $("#lede").html("Now Choose Your Enemy!");
    isFirstGuess++; 
    $("#ivysaurSound")[0].play();
    displayUserStats();


    } else {


        enemyPokemonIndex = 3;         
        $(".item4").removeClass("item4").addClass("item6");
        $("#lede").html("FIGHT!");
        $(".item7").css("visibility", "visible");
        isFirstGuess++; 
        $("#ivysaurSound")[0].play();
        displayEnemyStats(); 

    }


    });


    $("#attackButton").on("click", function() {
// if enemy is dead - 
       if (pokemonList[enemyPokemonIndex].HP < 1) {
           // remove class 
        $("#" + pokemonList[enemyPokemonIndex].name).addClass("dead");   


    } else if (pokemonList[userPokemonIndex].HP < 1) {
        $("#lede").html("You Lose!");
    }
       

        //USER 
        //attack on user from enemy
        pokemonList[userPokemonIndex].HP -= pokemonList[enemyPokemonIndex].CA;
        console.log("pokemon HP:" + pokemonList[userPokemonIndex].HP); 

        //compound user attack points
        pokemonList[userPokemonIndex].AP += pokemonList[userPokemonIndex].compounder 
        console.log("pokemon increased AP: " + pokemonList[userPokemonIndex].AP);

        //ENEMY
        //attack on enemy from user 
        pokemonList[enemyPokemonIndex].HP -= pokemonList[userPokemonIndex].AP;
        console.log("comp pokemon HP hit:" + pokemonList[enemyPokemonIndex].HP);

        pokemonList[userPokemonIndex].AP += pokemonList[userPokemonIndex].AP;
        console.log("comp pokemon AP hit:" + pokemonList[enemyPokemonIndex].HP);
       

    //    console.log(pokemonList[userPokemonIndex].HP);

    // LOOGGGGGINNNNNGGG

        $("#user-HP").html(pokemonList[userPokemonIndex].HP);
        console.log("user HP: " + pokemonList[userPokemonIndex].HP);

        $("#comp-HP").html(pokemonList[enemyPokemonIndex].HP);
        console.log("comp HP: " + pokemonList[enemyPokemonIndex].HP);
        $("#user-AP").html(pokemonList[userPokemonIndex.AP]);
        console.log("user AP: " + pokemonList[userPokemonIndex].compounder);
     
        if (pokemonList[enemyPokemonIndex].HP < 1) {
            $("#" + pokemonList[enemyPokemonIndex].name).addClass("dead");   
        }
    

    });


 

