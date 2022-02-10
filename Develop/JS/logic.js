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


// ask user if they want to play a single player game or multiplayer game
// list single player games if user chooses single player
// list multiplayer game if user chooses multiplayer
// randomly generate 8 games from use choice
// add choices to wheel
//spin wheel
// when wheel lands on game. give info about game
// if player wants to spin again repeat process