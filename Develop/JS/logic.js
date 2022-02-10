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


// call api to get games
var listOfGames = function() {
    var rawgApiKey = "ad7969f5577647f8b8809a70ca6cecd4";
    var rawgUrl = `https://api.rawg.io/api/games?key=${rawgApiKey}`;

    //fetch(rawgUrl);


// display 8 games randomly to choose from. 
// ?genres= blah blah bla (userInput)
// ?tags= single or multiplayer (userInput)
};

//listOfGames();
