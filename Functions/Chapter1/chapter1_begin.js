

const buttonOptionsElement = document.getElementById('button-options');

//array of variables for chapter1
let chapter1var = {}
var globalImg = "";

function StartChapter1() {

    chapter1var = { character: loadVar("character") }

    console.log(chapter1var.character);

    globalImg = "Functions/Art/Chapter1/smallerCave.png";

   // chapter1var = { character: characterChoice }
    printChatNode('//START//', false)
}

function printChatNode(chatNodeIndex, load_chapter1vars) {

    //if we're coming back to the website - refresh variables
    if (load_chapter1vars) {
        loadChapter1();
    } //end of if load chapter1vars

    //get the current chatNode/option to display
   const chatNode = chatNodes.find(chatNode => chatNode.id === chatNodeIndex)

    //display the chatoption with chatlog
    updateChatLog('../Functions/Chapter1/chapter1callscript.txt', chatNode.id);

    /*if combat != null

    result = combatfunct(chatnode.combat)
    
    if result = true -> succeed

        printChatNode()
    else -> they failed

    */

    //If the changeImage != null -> change background
    if (chatNode.changeImage != null) {

        console.log(chatNode.changeImage)

        globalImg = chatNode.changeImage;
    }

    document.getElementById("backgroundImage").src=globalImg;

    //did we die - restart from checkpoint
    if (chatNode.restartCheckPoint) {


        //display the correct buttons
        while (document.getElementById('button-options').firstChild) {
            document.getElementById('button-options').removeChild(document.getElementById('button-options').firstChild)
        }

        //loop through each buttons option to display them
        chatNode.options.forEach(option => {

        if (option.NextAutoChat != null) {
            //printChatNode(option.NextAutoChat);
        } 
        if (showOption(option)) {
            //create button
            const button = document.createElement('button')
    
            //display the button text
            button.innerText = option.text
    
            //add it to the correct css
            button.classList.add('options')
    
            //click event listener - load the load function for it
            button.addEventListener('click', () => selectOption(option))
    
            document.getElementById('button-options').appendChild(button)
            }
        })

        

    }
    //check if we need to roll dice here
    else if (chatNode.dicetype != null) {

        //test that overlay works
        overlayOn();

        //printpls(chatNode.rollnumber, chatNode.dicetype, chatNode.tobeat, chatNode.sucess, chatNode.fail);

        var returnedDiceResult

        document.getElementById("Theyseemerollin").addEventListener("click", function() {
   
           returnedDiceResult = diceRoll(chatNode.rollnumber,chatNode.dicetype);

           document.getElementById('Theyseemerollin').style.display = 'none';
           document.getElementById('diceNum').innerHTML = returnedDiceResult

            if (returnedDiceResult >= chatNode.tobeat) {
                //we suceeded - chatnode to suceeed
                printChatNode(chatNode.sucess, false)
            }
            else if (returnedDiceResult < chatNode.tobeat) {
                //fails - chatnode to fail
                printChatNode(chatNode.fail, false)
            }
            else 
                alert("FAILED!")
        }); //end of eventlistener

    
    } //if we have dice to roll! 
    else {
        //Save the state
        savechapter1(chatNodeIndex);

        //display the correct buttons
        while (document.getElementById('button-options').firstChild) {
            document.getElementById('button-options').removeChild(document.getElementById('button-options').firstChild)
        }

        //loop through each buttons option to display them
        chatNode.options.forEach(option => {

            if (option.NextAutoChat != null) {
                //printChatNode(option.NextAutoChat);
            } 
            if (showOption(option)) {
                //create button
                const button = document.createElement('button')

                //display the button text
                button.innerText = option.text

                //add it to the correct css
                button.classList.add('options')

                //click event listener
                button.addEventListener('click', () => selectOption(option))

                document.getElementById('button-options').appendChild(button)
            }
        })


    } //end of else


    //set the previous Node -> might be used later
    const previousChatNode = chatNodeIndex

} //end of function printChatNode

function showOption(option) {

    //do we have a required state/variable
    const test = (option.requiredVar == null) || option.requiredVar(chapter1var)

    console.log(test);

    return option.requiredVar == null || option.requiredVar(chapter1var) 
    //return true;
} //end of showOption

function selectOption(option) {
    
        //get next chatNode
        const nextChatNodeId = option.NextChat

        //update chapter1 var
        chapter1var = Object.assign(chapter1var, option.updateVars)

        //show next chatlog node
        printChatNode(nextChatNodeId, false)

} //end of selectOption

/*
SAVING FUNCTION
*/
function savechapter1(chatNodeIndex) {
   
    //Save where we are - chatnodeindex -> called function state
    saveVar("funcState", chatNodeIndex);

    //save the image for the background
    saveVar("backgroundImage", globalImg);

    //sstringify the object chapter1var
    const chapter1vars = JSON.stringify(chapter1var);

    //Load the "string"
    saveVar("chapter1vars", chapter1vars);


} //end of saving chapter 1

/*
Load function
*/
function loadChapter1() {
   
    //load chapter 1 function state
    loadVar("funcState");

    //load chapter1var
    chapter1var = JSON.parse(loadVar("chapter1vars"));

    //load image
    globalImg = loadVar("backgroundImage");

} //end of saving chapter 1





const chatNodes = [
    {
        id: '//START//',
        options: [
            {
                text: 'Sit and wait',
                NextChat: '//1.1.0//',
               // updateVars: { character: "Barbarian" }
            },
            {
                text: 'Search around you',
                NextChat: '//1.2.1//',
              //  updateVars: { character: "Barbarian" }
            }
        ]
    },
    {
        id: '//1.1.0//',
        options: [
            {
                text: 'Sit and wait',
                NextChat: '//1.1.1//'
            },
            {
                text: 'Search around you',
                NextChat: '//1.2.1//'
            }
        ]
    },
    {
        id: '//1.1.1//',
        options: [
            {
                text: 'Sit and wait',
                NextChat: '//1.1.2//'
            },
            {
                text: 'Search around you',
                NextChat: '//1.2.1//'
            }
        ]
    },
    {
        id: '//1.1.2//',
        options: [
            {
                text: 'Sit and wait',
                NextChat: '//1.1.3//'
            },
            {
                text: 'Search around you',
                NextChat: '//1.2.1//'
            }
        ]
    },
    {
        id: '//1.1.3//',
    },
    //1.2 ==> MAIN CAVE AND GENERAL CHATCALLS 
    {
        id: '//1.2.0//',
        changeImage: "Functions/Art/Chapter1/smallerCave.png",
        options: [
            {
                text: 'Warm and Bright Tunnel',
                NextChat: '//1.3.0//'
            },
            {
                text: 'Cold and Dark Tunnel',
                NextChat: '//1.4.0//'
            },
            {
                text: 'Tunnel with Waters Origin',
                NextChat:'//1.5.0//'
            }
        ]
    },
    {
        id: '//1.2.1//',
        options: [
            {
                text: 'Continue',
                NextChat: '//1.2.0//',
                NextAutoChat: '//1.2.0//'
            }
        ]
    },
    //DEFEAT MONSTER
    {
        id: '//1.2.2//',
    },
    //DEAD - RESTART
    {
        id: '//1.2.3//',
        restartCheckPoint: true,
        options: [
            {
                text: 'Reload from Checkpoint'
            }
        ]

    },
    //MERCHANT SHOP!
    {
        id: '//1.2.4//',
    },
    //1.3 ==> WARM AND BRIGHT TUNNEL
    {
        id: '//1.3.0//',
        options: [
            {
                text: 'Continue',
                NextChat: '//1.3.0a//',
                requiredVar: (currentVars) => !currentVars.metMerchant
            },
            {
                text: 'Continue',
                NextChat: '//1.3.0b//',
                requiredVar: (currentVars) => currentVars.metMerchant
            }
        ]
    },
    {
        id: '//1.3.0a//',
        options: [
            {
                text: 'Continue',
                NextChat: '//1.3.0b//'
            }
        ]
    },
    {
        id: '//1.3.0b//',
        options: [
            {
                text: 'Follow Sign to Merchant',
                NextChat: '//1.3.1//'
            },
            {
                text: 'Continue Down tunnel',
                NextChat: '//1.3.2//'
            }
        ]
    },
    {
        id: '//1.3.1//',
        options: [
            {
                text: 'Talk to Merchant',
                NextChat: '//1.2.4//',
                requiredVar: (currentVars) => currentVars.metMerchant
            },
            {
                text: 'Continue',
                NextChat: '//1.3.2//'
            }
        ]
    },
    {
        id: '//1.3.2//',
        rollnumber: 1,
        dicetype: d20,
        tobeat: 13,
        sucess: '//1.3.4//',
        fail: '//1.3.3a//'
    },
    {
        id: '//1.3.3a//',
        combat: 'fight1',
        options: [
            {
                text: 'Success',
                NextChat: '//1.3.5//'
            },
            {
                text: 'Fails',
                NextChat: '//1.2.3//'
            }
        ]
    },
    {
        id: '//1.3.3b//',
        options: [
            {
                text: 'Success',
                NextChat: '//1.2.2//',
                NextAutoChat: '//1.2.0//'
            },
            {
                text: 'Fails',
                NextChat: '//1.2.3//'
            }
        ]
    },
    {
        id: '//1.3.3c//',
        options: [
            {
                text: 'Return to Cave',
                NextChat: '//1.2.0//'
            },
            {
                text: 'Return To Merchant',
                NextChat: '//1.3.1//'
            }
        ]
    },
    {
        id: '//1.3.4//',
        options: [
            {
                text: 'Success',
                NextChat: '//1.3.5//'
            },
            {
                text: 'Fails',
                NextChat: '//1.2.3//'
            }
        ]
    },
    {
        id: '//1.3.5//',
        options: [
            {
                text: 'Shop',
                NextChat: '//1.2.4//',
                updateVars: { metmerchant: true }
            },
            {
                text: 'Return to Cave',
                NextChat: '//1.2.0//',
                updateVars: { metMerchant: true }
            }
        ]
    },
    //1.4 ==> COLD AND DARK TUNNEL
    {
        id: '//1.4.0//',
        options: [
            {
                text: 'Try to Sneak',
                NextChat: '//1.4.1//',
                requiredVar: (currentVars) => !currentVars.lootAdventurer

            },
            {
                text: 'Don\'t Sneak',
                NextChat: '//1.4.3a//',
                requiredVar: (currentVars) => !currentVars.lootAdventurer
            },
            {
                text: 'Continue',
                NextChat: '//1.4.3b//',
                requiredVar: (currentVars) => currentVars.lootAdventurer
            }
        ]
    },
    {
        id: '//1.4.1//',
        rollnumber: 1,
        dicetype: d20,
        tobeat: 13,
        sucess: '//1.4.2//',
        fails: '//1.4.3a//'
    },
    {
        id: '//1.4.2//',
        options: [
            {
                text: 'Success',
                NextChat: '//1.4.5//'
            },
            {
                text: 'Fails',
                NextChat: '//1.2.3//'
            }
        ]

    },
    {
        id: '//1.4.3a//',
        options: [
            {
                text: 'Continue',
                NextChat: '//1.4.3b//'
            }
        ]
    },
    {
        id: '//1.4.3b//',
        options: [
            {
                text: 'Sucess',
                NextChat: '//1.4.5//',
                NextAutoChat: '//1.4.5//',
                requiredVar: (currentVars) => !currentVars.lootAdventurer
            },
            {
                text: 'Sucess',
                NextChat: '//1.2.2//',
                NextAutoChat: '//1.2.0//',
                requiredVar: (currentVars) => currentVars.lootAdventurer
            },
            {
                text: 'Fails',
                NextChat: '//1.2.3//',
            }
        ]
    },
    {
        id: '//1.4.5//',
        updateVars: { lootAdventurer: true },
        options: [
            {
                text: 'Return to Cave',
                NextChat: '//1.2.0//'
            }
        ]
    },
    //1.5 ==> WATERFALL ROOM
    {
        id: '//1.5.0//',
        changeImage: 'Functions/Art/Chapter1/waterFallRoom.png',
        options: [
            {
                text: 'Continue',
                NextChat: '//1.5.0a//',
                requiredVar: (currentVars) => !currentVars.metCompanion
            },
            {
                text: 'Continue',
                NextChat: '//1.5.0b//',
                requiredVar: (currentVars) => !currentVars.metCompanion,
                requiredVar: (currentVars) => currentVars.foundDoor
            }
        ]
    },
    {
        id: '//1.5.0a//',
        options: [
            {
                text: 'Surprise the Creature!',
                NextChat: '//1.5.1a//',
                requiredVar: (currentVars) => currentVars.character == 'Wizard'
            },
            {
                text: 'Surprise the Creature!',
                NextChat: '//1.5.1b//',
                requiredVar: (currentVars) => currentVars.character == 'Rogue'
            },
            {
                text: 'Surprise the Creature!',
                NextChat: '//1.5.1c//',
                requiredVar: (currentVars) => currentVars.character == 'Barbarian'
            },
            {
                text: 'Surprise the Creature!',
                NextChat: '//1.5.1d//',
                requiredVar: (currentVars) => currentVars.character == 'Bard'
            },
            {
                text: 'Cautiously Approach',
                NextChat: '//1.5.2a//'
            }
        ]
    },
    {
        id: '//1.5.0b//',
        options: [
            {
                text: 'Continue',
                NextChat: '//1.5.0c//',
                requiredVar: (currentVars) => currentVars.metMerchant
            },
            {
                text: 'Continue',
                NextChat: '//1.5.0d//',
                requiredVar: (currentVars) => !currentVars.metMerchant
            },
        ]
    },
    {
        id: '//1.5.0c//',
        options: [
            {
                text: 'Continue',
                NextChat: '//1.5.0e//'
            }
        ]
        
    },
    {
        id: '//1.5.0d//',
        options: [
            {
                text: 'Continue',
                NextChat: '//1.5.0e//'
            }
        ]
    },
    {
        id: '//1.5.0e//',
        options: [
            {
                text: 'Return to Cave',
                NextChat: '//1.2.0//'
            },
            {
                text: 'Search around',
                NextChat: '//1.5.6a//',
                requiredVar: (currentVars) => !currentVars.foundDoor
            },
            {
                text: 'Try inserting key',
                NextChat: '//1.6.0a//',
                requiredVar: (currentVars) => currentVars.metMerchant
            }
        ]
    },
    {
        id: '//1.5.1a//',
        options: [
            {
                text: 'Continue',
                NextChat: '//1.5.1e//',
                NextAutoChat: '//1.5.1e//'
            }
        ]
    },
    {
        id: '//1.5.1b//',
        options: [
            {
                text: 'Continue',
                NextChat: '//1.5.1e//',
                NextAutoChat: '//1.5.1e//'
            }
        ]
    },
    {
        id: '//1.5.1c//',
        options: [
            {
                text: 'Continue',
                NextChat: '//1.5.1e//',
                NextAutoChat: '//1.5.1e//'
            }
        ]
    },
    {
        id: '//1.5.1d//',
        options: [
            {
                text: 'Continue',
                NextChat: '//1.5.1e//',
                NextAutoChat: '//1.5.1e//'
            }
        ]
    },
    {
        id: '//1.5.1e//',
        options: [
            {
                text: 'Shoo it off',
                NextChat: '//1.5.3//'
            },
            {
                text: 'Call it to you',
                NextChat: '//1.5.4a//'
            }
        ]
    },
    {
        id: '//1.5.2a//',
        options: [
            {
                text: 'Continue',
                NextChat: '//1.5.2b//',
                requiredVar: (currentVars) => currentVars.character == 'Wizard'
            },
            {
                text: 'Continue',
                NextChat: '//1.5.2c//',
                requiredVar: (currentVars) => currentVars.character == 'Rogue'
            },
            {
                text: 'Continue',
                NextChat: '//1.5.2d//',
                requiredVar: (currentVars) => currentVars.character == 'Barbarian'
            },
            {
                text: 'Continue',
                NextChat: '//1.5.2e//',
                requiredVar: (currentVars) => currentVars.character == 'Bard'
            }
        ]
    },
    {
        id: '//1.5.2b//',
        options: [
            {
                text: 'Continue',
                NextChat: '//1.5.2f//',
                NextAutoChat: '//1.5.2f//'
            }
        ]

    },
    {
        id: '//1.5.2c//',
        options: [
            {
                text: 'Continue',
                NextChat: '//1.5.2f//',
                NextAutoChat: '//1.5.2f//'
            }
        ]
    },
    {
        id: '//1.5.2d//',
        options: [
            {
                text: 'Continue',
                NextChat: '//1.5.2f//',
                NextAutoChat: '//1.5.2f//'
            }
        ]
    },
    {
        id: '//1.5.2e//',
        options: [
            {
                text: 'Continue',
                NextChat: '//1.5.2f//',
                NextAutoChat: '//1.5.2f//'
            }
        ]
    },
    {
        id: '//1.5.2f//',
        options: [
            {
                text: 'Step out and call to it',
                NextChat: '//1.5.4a//'
            },
            {
                text: 'Surprise the Creature!',
                NextChat: '//1.5.1a//',
                requiredVar: (currentVars) => currentVars.character == 'Wizard'
            },
            {
                text: 'Surprise the Creature!',
                NextChat: '//1.5.1b//',
                requiredVar: (currentVars) => currentVars.character == 'Rogue'
            },
            {
                text: 'Surprise the Creature!',
                NextChat: '//1.5.1c//',
                requiredVar: (currentVars) => currentVars.character == 'Barbarian'
            },
            {
                text: 'Surprise the Creature!',
                NextChat: '//1.5.1d//',
                requiredVar: (currentVars) => currentVars.character == 'Bard'
            }
        ]
    },
    {
        id: '//1.5.3//',
        options: [
            {
                text: 'Scare it off',
                NextChat: '//1.5.5//'
            },
            {
                text: 'Call it to you',
                NextChat: '//1.5.4a//'
            }
        ]
    },
    {
        id: '//1.5.4a//',
        options: [
            {
                text: 'Continue',
                NextChat: '//1.5.4b//',
                NextAutoChat: '//1.5.4b//',
                updateVars: { metCompanion: true, Companion: true },
                requiredVar: (currentVars) => currentVars.character != 'Barbarian'
            },
            {
                text: 'Continue',
                NextChat: '//1.5.4c//',
                NextAutoChat: '//1.5.4c//',
                updateVars: { metCompanion: true, Companion: true },
                requiredVar: (currentVars) => currentVars.character == 'Barbarian'
            }
        ]
    },
    {
        id: '//1.5.4b//',
        options: [
            {
                text: 'Continue',
                NextChat: '//1.5.4d//',
                NextAutoChat: '//1.5.4d//',
                //requiredVar: (currentVars) => currentVars.character != 'Barbarian'
            },
        ]
    },
    {
        id: '//1.5.4c//',
        options: [
            {
                text: 'Continue',
                NextChat: '//1.5.4d//',
                NextAutoChat: '//1.5.4d//',
                //requiredVar: (currentVars) => currentVars.character != 'Barbarian'
            },
        ]
    },
    {
        id: '//1.5.4d//',
        //dogname set
        options: [
            {
                text: 'Return to Cave',
                NextChat: '//1.2.0//'
            },
            {
                text: 'Search around',
                NextChat: '//1.5.6a//'
            }
        ]
    
    },
    {
        id: '//1.5.5//',
        options: [
            {
                text: 'Return to Cave',
                updateVars: { metCompanion: true, Companion: false },
                NextChat: '//1.2.0//'
            },
            {
                text: 'Search around',
                updateVars: { metCompanion: true, Companion: false },
                NextChat: '//1.5.6a//'
            }
        ]
    },
    {
        id: '//1.5.6a//',
        options: [
            {
                text: 'Return to Cave',
                NextChat: '//1.2.0//',
                updateVars: { foundDoor: true },
                requiredVar: (currentVars) => !currentVars.metMerchant
            },
            {
                text: 'Continue',
                NextChat: '//1.5.6b//',
                updateVars: { foundDoor: true },
                requiredVar: (currentVars) => currentVars.metMerchant
            }
        ]
    },
    {
        id: '//1.5.6b//',
        options: [
            {
                text: 'Try inserting key',
                NextChat: '//1.6.0a//'
            },
            {
                text: 'Return to Cave',
                NextChat: '//1.2.0//'
            }
        ]
    },
    //1.6 ==> ENDING, MINOTAUR AND MEMORY 1
    {
        id: '//1.6.0a//',
        options: [
            {
                text: 'Continue',
                NextChat: '//1.6.0b//',
                requiredVar: (currentVars) => currentVars.character == 'Barbarian'
            },
            {
                text: 'Continue',
                NextChat: '//1.6.0c//',
                requiredVar: (currentVars) => currentVars.character != 'Barbarian'
            }
        ]
    },
    {
        id: '//1.6.0b//',
        options: [
            {
                text: 'Continue',
                NextChat: '//1.6.0d//'
            }
        ]
    },
    {
        id: '//1.6.0c//',
        options: [
            {
                text: 'Continue',
                NextChat: '//1.6.0d//'
            }
        ]
    },
    {
        id: '//1.6.0d//',
        options: [
            {
                text: 'Success',
                NextChat: '//1.6.1a//'
            },
            {
                text: 'Fails',
                NextChat: '//1.2.3//'
            }
        ]
    },
    {
        id: '//1.6.1a//',
        options: [
            {
                text: 'Continue',
                NextChat: '//1.6.1b//',
                requiredVar: (currentVars) => currentVars.Companion
            },
            {
                text: 'Continue',
                NextChat: '//1.6.1c//',
                requiredVar: (currentVars) => !currentVars.Companion
            }
        ]
    },
    {
        id: '//1.6.1b//',
        options: [
            {
                text: 'Continue',
                NextChat: '//1.6.1d//',
                NextAutoChat: '//1.6.1d//'
            }
        ]
    },
    {
        id: '//1.6.1c//',
        options: [
            {
                text: 'Continue',
                NextChat: '//1.6.1d//',
                NextAutoChat: '//1.6.1d//'
            }
        ]
    },
    {
        id: '//1.6.1d//',
    },
] //ChatNodes end
