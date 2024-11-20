


var object = document.getElementById("molkky");

const button1 = document.querySelector('#button1');
const p2Button = document.querySelector('#button2');
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');

let p1Score = 0;
let p2Score = 0;




button1.addEventListener('click',function() {
    p1Score += 1;
    player1.textContent = p1Score;
}) 

button2.addEventListener('click',function() {
    p2Score += 1;
    player2.textContent = p2Score;
}) 






