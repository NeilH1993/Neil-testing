function guessingGame(guessNumber) {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  let attempts = 0;
  
  while (guessNumber !== randomNumber) {
    if (guessNumber < randomNumber) {
      console.log("Too High");
     return;
      
    }
  
    else if (guessNumber > randomNumber) {
      console.log("Too low");
      return attempts++
    }
    else {
     console.log("Correct");
     return `Congratiolations, you sucsseed in ${attempts} attempts`; 
    }
    
  }
}
console.log(guessingGame(2));
