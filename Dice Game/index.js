var randomNumber1 = 0;
var randomNumber2 = 0;

document.querySelector(".img1").addEventListener("click", function() {
      randomNumber1 = Math.floor(Math.random() * 6) + 1;
      document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
      
});

document.querySelector(".img2").addEventListener("click", function() {
      randomNumber2 = Math.floor(Math.random() * 6) + 1;
      document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
      checkWinner();
});

function checkWinner() {
      if (randomNumber1 > randomNumber2) {
            document.querySelector("h1").innerHTML = "Player 1 Wins!";
      } 
      else if (randomNumber1 < randomNumber2) {
            document.querySelector("h1").innerHTML = "Player 2 Wins!";
      }
      else {
            document.querySelector("h1").innerHTML = "Draw!";
      }
}

function resetGame() {
      document.querySelector(".img1").setAttribute("src", "images/dice6.png");
      document.querySelector(".img2").setAttribute("src", "images/dice6.png");
      document.querySelector("h1").innerHTML = "Refresh Me!";
}

document.querySelector(".btn").addEventListener("click", resetGame);