//Global variables used to choose which dice to roll and how many times to roll 
var diceResult;
var d20=20;
var d12=12;
var d10=10;
var d8=8;
var d6=6;
var d4=4;

timesRolled=1;
// Function diceRoll is used to generate a random number from a specific dice type and number of rolls.
function diceRoll(rollNumber, diceType) {
    var diceResult = 0;
    
    // Generates a random number based on dice type. Adds the numbers from multiple rolls if needed.
    for(let i = 0; i < rollNumber; i++){
        diceResult += Math.round(Math.random() * (diceType - 1) + 1);
    } // end of for
    
    return diceResult;
} // end of diceRoll

//prints out the dice number when rolled
function printpls(rollNumber, diceType, tobeat, sucess, fail){

     var returnedDiceResult

     document.getElementById("Theyseemerollin").addEventListener("click", function() {

        returnedDiceResult = diceRoll(rollNumber,diceType);

        document.getElementById('Theyseemerollin').style.display = 'none';
        document.getElementById('diceNum').innerHTML = returnedDiceResult

         if (returnedDiceResult >= tobeat) {
             //we suceeded - chatnode to suceeed
             printChatNode(sucess, false)
         }
         else if (returnedDiceResult < tobeat) {
             //fails - chatnode to fail
             printChatNode(fail, false)
         }
         else 
             alert("FAILED!")
     }); //end of eventlistener
}

//turns on the overlay
function overlayOn(){

    document.getElementById("diceOverlay").style.display="block";

    document.getElementById("Theyseemerollin").style.display = 'inline';

    document.getElementById("Theyseemerollin").style.width = 'auto';
    document.getElementById("Theyseemerollin").style.height = '200px';

}

//turns off the overlay
function overlayOff(){

    document.getElementById("diceNum").innerHTML = "";

    document.getElementById("diceOverlay").style.display="none";
}
