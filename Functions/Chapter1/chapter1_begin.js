

//const optionButtonsElement = document.getElementById('button-options')


function selectOption() {


    document.getElementById("1").innerHTML="Test1"
    document.getElementById("BUTTONTESTING").innerHTML="Search Around You"
    document.getElementById("3").innerHTML="Test3"
    document.getElementById("4").innerHTML="Test4"

    //document.getElementById("2").('onclick', updateChatLog('Chapter 1 Script.txt','//START//'));
    //document.getElementById("BUTTONTESTING").onclick = updateChatLog('../Functions/Chapter1/Chapter 1 Script.txt','//START//');
    document.getElementById("BUTTONTESTING").addEventListener("click", function(event) {
        updateChatLog('../Functions/Chapter1/Chapter 1 Script.txt','//START//');
    });


    //Testing to call start information
//<button class="chatbtndemo" onclick="updateChatLog('testingScript.txt','//1.1.1//')">Sit and Wait</button>

    //updateChatLog('../Functions/Chapter1/Chapter 1 Script.txt','//START//');
    
}