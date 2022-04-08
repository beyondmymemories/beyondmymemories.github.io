/*
    This function expects a value, telling it what function/area the user is in
    It should call that function.

*/

/*
Function saveCharacter: called when the click the button with their character
Inputs:                 a string value with the character choice
Does:                   Saves the funcState to be the beginning state 
Outputs:                nothing, calls a load_function
*/
function saveCharacter(characterChoice) {

    //save the character choice that was picked
    saveVar("character", characterChoice);

    //save the function state
    saveVar("funcState", '//START//');

    //Set the chapter to 1
    //setChapter(1);

    //start the game
    load_function();

} //end of saveCharacter



function load_function() {

    document.getElementById("container2").style.display = "none"
    document.getElementById("container3").style.display = "inline-block"

    //IF funcState == '//START//'

    if(loadVar("funcState") == "//START//") {
        //get character value (should late be set to larger value than chapter 1)

        StartChapter1();
    } //end 
    //ELSE 
    else {
        printChatNode(loadVar("funcState"), true);
    } //end 

    iconPicker()
} //end of function