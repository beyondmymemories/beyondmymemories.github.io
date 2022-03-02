// Function updateChatLog is used to update the text within the chatlog box.
function updateChatLog(scriptName, key) {

    // Used to fetch data.
    const xhttp = new XMLHttpRequest();
  
    // Processes the response what we receive.
    xhttp.onload = function() {
        var text = '' + this.responseText;
        var mySubString = text.substring(text.indexOf(key) + key.length, text.lastIndexOf(key));
        
        document.getElementById("chatLog").innerHTML = document.getElementById("chatLog").innerHTML + mySubString;
    } // end of function
    
    // Initializes a newly-created request, or re-initializes an existing one.
    xhttp.open("GET", scriptName, true);
    
    // Sends the request.
    xhttp.send();  
} // end of updateChatLog