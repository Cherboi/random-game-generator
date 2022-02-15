

var btnChoiceEl = document.querySelector(".btn-container");
var btnSingleEl = document.querySelector(".btn-sngl");
var btnMultiEl = document.querySelector(".btn-multi");
var gameListEl = document.querySelector(".game-list");
     


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

           

          // loop through data and return 8 titles from object 
           for(var i = 0 ; i < 8; i++) {
               console.log(data.results[i].name);
               
                var gamebtnEl = document.createElement("div");
                var games = document.createElement("button");
                games.textContent = data.results[i].name;

                gamebtnEl.appendChild(games);
                gameListEl.appendChild(gamebtnEl)

           };

           //returns first game title
           //console.log(data.results[0].name);
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

            // loop through data and return 8 titles from object 
           for(var i = 0; i < 8; i++) {
            console.log(data.results[i].name);

            var gamebtnEl = document.createElement("div");
            var games = document.createElement("button");
            games.textContent = data.results[i].name;

            gamebtnEl.appendChild(games);
            gameListEl.appendChild(gamebtnEl)
            
            
         };
        });
     });
    };


};


// event listener for single & multiplayer buttons
btnChoiceEl.addEventListener("click", getListOfGames);