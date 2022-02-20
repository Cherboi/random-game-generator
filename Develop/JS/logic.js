

var btnChoiceEl = document.querySelector(".btn-container");
var btnSingleEl = document.querySelector(".btn-sngl");
var btnMultiEl = document.querySelector(".btn-multi");
var gameListEl = document.querySelector(".game-list");
var mainContainer = document.querySelector(".cardsEl");


// call api to get games
var getListOfGames = function (event) {

    const rawgApiKey = "ad7969f5577647f8b8809a70ca6cecd4";

    // request singleplayer games
    if (event.target.matches(".btn-sngl")) {

        var rawgUrl = `https://api.rawg.io/api/games?key=${rawgApiKey}&tags=singleplayer`;

        //URL Games request
        fetch(rawgUrl).then(function (response) {
            response.json().then(function (data) {
                console.log(data);

                // loop through data and return 8 titles from object 
                for (var i = 0; i < 8; i++) {
                    console.log(data.results[i].name);

                    //  creates div container for cards
                    var cardContainer = document.createElement("div");
                    cardContainer.className = "row";

                    // creates div element for cards
                    var colContainer = document.createElement("div");
                    colContainer.className = "col s12 m7 game-card";

                    //  appends conatiner to main for cards
                    cardContainer.appendChild(colContainer);

                    // creates div element
                    var card = document.createElement("div");
                    card.className = "card";


                    // append to container for card.
                    colContainer.appendChild(card);

                    // creates conatiner element for image
                    var cardImageEl = document.createElement("div");
                    cardImageEl.className = "card-image";

                    //  creates image
                    var cardImg = document.createElement("img");
                    cardImg.setAttribute("src", data.results[i].background_image);
                    cardImg.setAttribute("sameSite", "None");

                    // creates card title
                    var cardTitle = document.createElement("span");
                    cardTitle.className = "card-title yellow-text";
                    cardTitle.textContent = data.results[i].name;

                    // creates container for game descriptions
                    var cardContentEl = document.createElement("div");
                    cardContentEl.className = "card-content";

                    // release info
                    var release = document.createElement("p");
                    release.className = "description";
                    release.textContent = "Released: " + data.results[i].released;

                    // esrb info(rating)
                    var esrb = document.createElement("p");
                    esrb.className = "description";
                    esrb.textContent = "Rating: " + data.results[i].esrb_rating.name;

                    //  genre info
                    var genre = document.createElement("p");
                    genre.className = "description";
                    genre.textContent = "Genre: " + data.results[i].genres[0].name + "/" + data.results[i].genres[1].name;

                    // favorites button generate
                    var favorite = document.createElement("div");
                    favorite.className = "favorites";

                    var favBtn = document.createElement("button");
                    favBtn.className = "favorite-button"
                    favBtn.textContent = 'Favorite';
                    //document.querySelectorAll(".game-card").addEventListener("click",function(){
                    //console.log("favBtn")
                    //});
                    favorite.appendChild(favBtn);

                    // append information to content div
                    cardContentEl.appendChild(release);
                    cardContentEl.appendChild(esrb);
                    cardContentEl.appendChild(genre);
                    cardContentEl.appendChild(favorite);

                    cardImageEl.appendChild(cardImg);
                    cardImageEl.appendChild(cardTitle);

                    card.appendChild(cardImageEl);
                    card.appendChild(cardContentEl);

                    mainContainer.appendChild(cardContainer);



                    // var gamebtnEl = document.createElement("div");
                    // var games = document.createElement("button");
                    // games.textContent = data.results[i].name;

                    // gamebtnEl.appendChild(games);
                    // gameListEl.appendChild(gamebtnEl)

                };

                //returns first game title
                //console.log(data.results[0].name);
                //btnCheck();
                document.addEventListener("click", function (event) {
                    console.log(event)
                    if (event.target.classList[0] === "favorite-button") {
                        localStorage.setItem("game", JSON.stringify(card))
                        console.log("click")
                    }
                })
            });
            //.then(function (data)

        });
    }
    // request multiplayer games 
    else if (event.target.matches(".btn-multi")) {

        var rawgUrl = `https://api.rawg.io/api/games?key=${rawgApiKey}&tags=multiplayer`;

        // URL Games request
        fetch(rawgUrl).then(function (response) {
            response.json().then(function (data) {
                console.log(data);

                // loop through data and return 8 titles from object 
                for (var i = 0; i < 8; i++) {
                    console.log(data.results[i].name);

                    //  creates div container for cards
                    var cardContainer = document.createElement("div");
                    cardContainer.className = "row";

                    // creates div element for cards
                    var colContainer = document.createElement("div");
                    colContainer.className = "col s12 m7";

                    //  appends conatiner to main for cards
                    cardContainer.appendChild(colContainer);

                    // creates div element
                    var card = document.createElement("div");
                    card.className = "card";


                    // append to container for card.
                    colContainer.appendChild(card);

                    // creates conatiner element for image
                    var cardImageEl = document.createElement("div");
                    cardImageEl.className = "card-image";

                    //  creates image
                    var cardImg = document.createElement("img");
                    cardImg.setAttribute("src", data.results[i].background_image);
                    cardImg.setAttribute("sameSite", "none");

                    // creates card title
                    var cardTitle = document.createElement("span");
                    cardTitle.className = "card-title yellow-text";
                    cardTitle.textContent = data.results[i].name;

                    // creates container for game descriptions
                    var cardContentEl = document.createElement("div");
                    cardContentEl.className = "card-content";

                    // release info
                    var release = document.createElement("p");
                    release.className = "description";
                    release.textContent = "Released: " + data.results[i].released;

                    // esrb info(rating)
                    var esrb = document.createElement("p");
                    esrb.className = "description";
                    esrb.textContent = "Rating: " + data.results[i].esrb_rating.name;

                    //  genre info
                    var genre = document.createElement("p");
                    genre.className = "description";
                    genre.textContent = "Genre: " + data.results[i].genres[0].name + "/" + data.results[i].genres[1].name;

                    // favorites button generate
                    var favorite = document.createElement("div");
                    favorite.className = "favorites";

                    var favBtn = document.createElement("button");
                    favBtn.className = "favorite-button"
                    favBtn.textContent = 'Favorite';


                    favorite.appendChild(favBtn);


                    // append information to content div
                    cardContentEl.appendChild(release);
                    cardContentEl.appendChild(esrb);
                    cardContentEl.appendChild(genre);
                    cardContentEl.appendChild(favorite);


                    cardImageEl.appendChild(cardImg);
                    cardImageEl.appendChild(cardTitle);

                    card.appendChild(cardImageEl);
                    card.appendChild(cardContentEl);

                    mainContainer.appendChild(cardContainer);

                    // var gamebtnEl = document.createElement("div");
                    // var games = document.createElement("button");
                    // games.textContent = data.results[i].name;

                    // gamebtnEl.appendChild(games);
                    // gameListEl.appendChild(gamebtnEl)


                };
            });
        });
    };
};

// event listener for single & multiplayer buttons
btnChoiceEl.addEventListener("click", getListOfGames);

//var getTrailers = function (event) {

    //key = "AIzaSyA8LgKPxEYWyEcZYk8ZLWOnIi7a_VlDh3E";

    //var btnCheck = function (event) {
        console.log(document.querySelectorAll(".game-card"))
//    }