/*
    This function expects a value, telling it what function/area the user is in
    It should call that function.

*/

var funcState

function load_function(characterChoice) {

    document.getElementById("container2").style.display = "none"
    document.getElementById("container3").style.display = "inline-block"

    //IF funcState == '//START//'

    //get character value (should late be set to larger value than chapter 1)
    testStart(characterChoice);

    //ELSE 


} //end of function