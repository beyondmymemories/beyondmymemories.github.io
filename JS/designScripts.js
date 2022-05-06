// JavaScript Document
// This is for any design scripts that may be used
//Currently has, overlay scripts, journal scripts, various character choice scripts. 

//turn on stats overlay in character selection
function statsOn() {
    document.getElementById("statsOverlay").style.display = "block";
}
//turn off stats overlay in character selection
function statsOff() {
    document.getElementById("statsOverlay").style.display = "none";
}
//go to next page of journal 
function nextPage() {
    document.getElementById("nextPage").style.display = "block";
    document.getElementById("nextPageAgain").style.display = "none";

}
//go to second page of journal 
function nextPageAgain() {
    document.getElementById("nextPageAgain").style.display = "block";
    document.getElementById("nextPage").style.display = "none";
}
//turn the journal on
function JournalOn() {

    document.getElementById("JournalOverlay").style.display = "block";
}
//turn the journal off
function JournalOff() {
    document.getElementById("nextPage").style.display = "none";
    document.getElementById("nextPageAgain").style.display = "none";
    document.getElementById("JournalOverlay").style.display = "none";
}


//Write a Function that changes Icon based on chosen character

function iconPicker() {
    var characterChoice = loadVar("character")
    console.log(characterChoice);
    if (characterChoice == "Wizard") {
        document.getElementById("charIcon").src = "Functions/Art/Chapter1/wizardChar.png";
    }//end of switching icon for a wizard
    if (characterChoice == "Barbarian") {
        document.getElementById("charIcon").src = "Functions/Art/Chapter1/barbarianChar.png";
    }//end of choosing Barbiarian
    if (characterChoice == "Bard") {
        document.getElementById("charIcon").src = "Functions/Art/Chapter1/bardChar.png";
    }//end of Bard choice
    if (characterChoice == "Rogue") {
        document.getElementById("charIcon").src = "Functions/Art/Chapter1/rogueChar.png";
    }//end of Rogue Choice
    return;
}

//Function to display character stats in the journal 
function journalstats() {
    var charStats = loadVar("character")
    console.log(charStats);
    if (charStats == "Wizard") {
        document.getElementById("CharStatsy").innerHTML = "Wizard Stats<br>Strength:-1<br>Dexterity:2<br>Constitution:0<br>Intelligence:4<br>Wisdom:3<br>Charisma:1";
    }
    if (charStats == "Barbarian") {
        document.getElementById("CharStatsy").innerHTML = "Barbarian Stats<br>Strength:4<br>Dexterity:0<br>Constitution:3<br>Intelligence:-1<br>Wisdom:1<br>Charisma:2";
    }
    if (charStats == "Bard") {
        document.getElementById("CharStatsy").innerHTML = "Bard Stats<br>Strength:0<br>Dexterity:3<br>Constitution:2<br>Intelligence:-1<br>Wisdom:1<br>Charisma:4";
    }
    if (charStats == "Rogue") {
        document.getElementById("CharStatsy").innerHTML = "Rogue Stats<br>Strength:1<br>Dexterity:4<br>Constitution:0<br>Intelligence:-1<br>Wisdom:3<br>Charisma:2";
    }
    return;
}