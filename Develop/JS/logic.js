

var btnChoiceEl = document.querySelector(".btn-container");
var btnSingleEl = document.querySelector(".btn-sngl");
var btnMultiEl = document.querySelector(".btn-multi");

           

function rotateFunction() {
    var min = 1024;
    var max = 9999;
    var deg = Math.floor(Math.random() * (max - min)) + min;
    document.getElementById('box').style.transform = "rotate(" + deg + "deg)";
}
var element = document.getElementById('mainbox');
element.classList.remove('animate');

setTimeout(function () {
    element.classList.add('animate');
}, 5000);


// <<<<<<< feature/modal
// ask user if they want to play a single player game or multiplayer game
// list single player games if user chooses single player
// list multiplayer game if user chooses multiplayer
// randomly generate 8 games from use choice
// add choices to wheel
//spin wheel
// when wheel lands on game. give info about game
// if player wants to spin again repeat process

// call api to get games
var getListOfGames = function(event) {

    const rawgApiKey = "ad7969f5577647f8b8809a70ca6cecd4";

   // request singleplayer games
    if(event.target.matches(".btn-sngl")) {

        var rawgUrl = `https://api.rawg.io/api/games?key=${rawgApiKey}&tags=singleplayer`;

    //URL Games request
    fetch(rawgUrl).then(function(response) {
       response.json().then(function(data) {
           console.log(data);
       });
    });
    }
    // request multiplayer games 
   else if(event.target.matches(".btn-multi")) {
     
    var rawgUrl = `https://api.rawg.io/api/games?key=${rawgApiKey}&tags=multiplayer`;

    // URL Games request
    fetch(rawgUrl).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        });
     });
    };

    
    


// display 8 games randomly to choose from. 
// ?genres= blah blah bla (userInput)
// ?tags= single or multiplayer (userInput)
};

//listOfGames();
//<<<<<<< feature/games-api

// event listener for single & multiplayer buttons
btnChoiceEl.addEventListener("click", getListOfGames);
=======
// >>>>>>> main
//>>>>>>> main
