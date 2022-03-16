

//const optionButtonsElement = document.getElementById('button-options')


function selectOption() {

    //Call the beginning of the game
    updateChatLog('../Functions/Chapter1/chapter1callscript.txt','//START//');

    document.getElementById("1").innerHTML="Waterfall Room"
    document.getElementById("BUTTONTESTING").innerHTML="Search Around You"
    document.getElementById("3").innerHTML="Test3"
    document.getElementById("4").innerHTML="Combat"

    document.getElementById("1").addEventListener("click", function(event) {
        //Change photo

    });
    
    document.getElementById("BUTTONTESTING").addEventListener("click", function(event) {
        updateChatLog('../Functions/Chapter1/Chapter 1 Script.txt','//START//');
    });

    document.getElementById("4").addEventListener("click", function(event) {
        document.getElementById("container3").style.display = "none"
        document.getElementById("container4").style.display = "inline-block"
    });

    
}
