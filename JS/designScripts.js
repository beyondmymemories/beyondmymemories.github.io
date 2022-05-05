// JavaScript Document
// This is for any design scripts that may be used
//Currently has, overlay script 

function statsOn() {
    document.getElementById("statsOverlay").style.display = "block";
}
function statsOff() {
    document.getElementById("statsOverlay").style.display = "none";
}
function nextPage() {
    document.getElementById("nextPage").style.display = "block";
    document.getElementById("nextPageAgain").style.display = "none";

}
function nextPageAgain() {
    document.getElementById("nextPageAgain").style.display = "block";
    document.getElementById("nextPage").style.display = "none";
}
function JournalOn() {

    document.getElementById("JournalOverlay").style.display = "block";
}
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
function journalstats() {
    var charStats = loadVar("character")
    console.log(charStats);
    if (charStats == "Wizard") {
        document.getElementById("CharStatsy").innerHTML = "Wizard Stats<br>Str:-1<br>Dex:2<br>Con:0<br>Int:4<br>Wis:3<br>Chr:1";
    }
    if (charStats == "Barbarian") {
        document.getElementById("CharStatsy").innerHTML = "Barbarian Stats<br>Str:4<br>Dex:0<br>Con:3<br>Int:-1<br>Wis:1<br>Chr:2";
    }
    if (charStats == "Bard") {
        document.getElementById("CharStatsy").innerHTML = "Bard Stats<br>Str:0<br>Dex:3<br>Con:2<br>Int:-1<br>Wis:1<br>Chr:4";
    }
    if (charStats == "Rogue") {
        document.getElementById("CharStatsy").innerHTML = "Rogue Stats<br>Str:1<br>Dex:4<br>Con:0<br>Int:-1<br>Wis:3<br>Chr:2";
    }
    return;
}