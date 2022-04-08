// JavaScript Document
// This is for any design scripts that may be used
//Currently has, overlay script 

function statsOn(){
    document.getElementById("statsOverlay").style.display="block";
}
function statsOff(){
    document.getElementById("statsOverlay").style.display="none";
}

//Write a Function that changes Icon based on chosen character

function iconPicker(){
    var characterChoice=loadVar("character")
    console.log(characterChoice);
    if(characterChoice=="Wizard"){
        document.getElementById(charIcon).src=="../Functions/Art/Chapter1/wizardChar.png";
    }//end of switching icon for a wizard
    if(characterChoice=="Barbarian"){

    }//end of choosing Barbiarian
    if(characterChoice=="Bard"){

    }//end of Bard choice
    if(characterChoice=="Rogue"){

    }//end of Rogue Choice
}