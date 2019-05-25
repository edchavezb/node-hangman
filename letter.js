
function Letter(value) {
  this.value = value,
  this.guessed = false,
  this.guessDisplay = function(){
    if (this.guessed){
      return this.value
    }
    else{
      return "_"
    }
  }
  this.guessCheck = function(guess){
    //console.log(guess + " vs " + this.value);
    var match = false;
    if (guess === this.value){
      match = true;
      this.guessed = true;
    }
    //console.log("Match: " + match);
    //console.log("Guessed before: " + this.guessed);
    return match;
  }
}

module.exports = Letter;