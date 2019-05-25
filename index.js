var inquirer = require("inquirer");
var Word = require("./word");

var guitarModels = ["Stratocaster", "Mustang", "Telecaster", "Jaguar", "Supersonic"];

function gameLogic(){
  var wordToGuess;
  var wordObject;
  var guessLeft = 5;

  chooseWord();
  
  function chooseWord(){
    wordToGuess = guitarModels[Math.floor(Math.random() * guitarModels.length)]
    wordObject = new Word (wordToGuess.toLowerCase());
    wordObject.fillArray();
    //console.log(wordObject.letterArray);
    wordObject.renderWord();
    promptInput();
  }

  function promptInput(){
    if (guessLeft > 0){
      inquirer.prompt ([
        {
        type: "input",
        name: "letter",
        message: "Enter a letter",
        },
      ])
      .then(function(inquirerResponse) {
        var myGuess = inquirerResponse.letter.toLowerCase();
        console.log(myGuess);
        var checkResult = wordObject.guessCheckAll(myGuess);
        console.log("Matches found: " + checkResult);
        if (!checkResult){
          guessLeft--;
        }
        //console.log(wordObject.letterArray);
        console.log("You have " + guessLeft + " guesses left")
        wordObject.renderWord();
        promptInput();
      });
    }
    else{
      console.log("You lose! The word is " + wordToGuess)
      inquirer.prompt ([
        {
        type: "confirm",
        name: "playAgain",
        message: "Would you like to play again?",
        },
      ])
      .then(function(inquirerResponse) {
        var choice = inquirerResponse.playAgain;
        if(choice){
          guessLeft = 5;
          chooseWord();
        }
        else{
          console.log("Bye!")
        }
      });
      
    }
  }
}

gameLogic();




