
var Letter = require("./letter");

function Word(chosenWord) {
  this.letterArray = [];
  this.fillArray = function() {
    for(var i = 0; i < chosenWord.length; i++){
      var newLetter = new Letter(chosenWord[i]);
      this.letterArray.push(newLetter);
    }
  }
  this.renderWord = function(){
    var wordRender = " ";
    for(var i = 0; i < this.letterArray.length; i++){
      wordRender += this.letterArray[i].guessDisplay() + " ";
    }
    console.log(wordRender)
  }
  this.guessCheckAll = function(guess){
    var foundMatches = 0;
    for(var i = 0; i < this.letterArray.length; i++){
      if (this.letterArray[i].guessCheck(guess)){
        foundMatches++;
      }
    }
    if (foundMatches === 0){
      return false;
    }
    else{
      return true;
    }
  }
}

module.exports = Word;