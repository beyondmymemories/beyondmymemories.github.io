// Function diceRoll is used to generate a random number from a specific dice type and number of rolls.
function diceRoll(rollNumber, diceType) {
    var diceResult = 0;
    
    // Generates a random number based on dice type. Adds the numbers from multiple rolls if needed.
    for(let i = 0; i < rollNumber; i++){
        diceResult += Math.round(Math.random() * (diceType - 1) + 1);
    } // end of for
    
    return diceResult;
} // end of diceRoll