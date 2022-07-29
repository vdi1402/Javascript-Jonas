// document.querySelector('.message').textContent = 'yeah! Correct'

//document.querySelector('.guess').value = 10
let checkEnteredValue = document.querySelector(".guess").value;

let number = Math.trunc(Math.random() * 20);

let score = 20;
document.querySelector(".score").textContent = score;
let highScore = 0;
// now i just want to console the enterterd value in input when clicked the check button


// function for change message content so we dont need to repeat same code again n again

displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
}




document.querySelector(".check").addEventListener("click", function () {
  let guesssedNumber = Number(document.querySelector(".guess").value);
  //  console.log(checkEnteredValue)
  console.log(typeof guesssedNumber);

  //tried if else
  // if(document.querySelector('.guess').value > 20 ){

  //} else {
  //document.querySelector('.message').textContent = 'wrong guess'
  //}
  if (guesssedNumber === number) {
    document.querySelector(".number").textContent = number;
    document.body.style.background = "#00ab41";
    document.querySelector(".number").style.width = "30rem";
  }
  if (!guesssedNumber) {
  //  document.querySelector(".message").textContent = "oops not a number 🥸 ";
  displayMessage( "oops not a number 🥸 ")


} else if (guesssedNumber === number) {
displayMessage("yeah! Correct🍾")
  }

  //when guess is wrong
  else if (guesssedNumber !== number) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guesssedNumber > number ? "too high.." : "too low..";
      score--;
      document.querySelector(".score").textContent = score;
    } else {

      //document.querySelector(".message").textContent = "you lost the game";
      displayMessage( "you lost the game")
      document.querySelector(".score").textContent = 0;
    }
  }

  /* refactored it above
  
  else if (guesssedNumber >= number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "too high";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lost the game";
      document.querySelector(".score").textContent = 0;
    }

    //implementig highscore logic
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

  }  */
  /*else if (guesssedNumber <= number) {
    if (score > 0) {
      document.querySelector(".message").textContent = "too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lost the game";
      document.querySelector(".score").textContent = 0;
    }
  } */
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".number").textContent = "?";
 // document.querySelector(".message").textContent = "start guessing...";
displayMessage('start guessing...')
  document.querySelector(".score").textContent = 20;
  document.querySelector(".guess").value = " ";
  number = Math.trunc(Math.random() * 20) + 1;
  document.body.style.background = "#222";
});

//refactoring the above code
