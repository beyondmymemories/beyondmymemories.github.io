

const buttonOptionsElement = document.getElementById('button-options');

//array of variables for chapter1
let chapter1var = {}
var globalImg = "";

//code for checkpoints <3 isaac
var lastChatNodeIndex;
function getLastChatNodeIndex() {
    return lastChatNodeIndex;
}

function getChapter1Var() {
    return chapter1var;
}

function getglobalImg() {
    
    console.log(globalImg)

    return globalImg;
}
function setglobalImg(input) {

    console.log(globalImg)

    globalImg = input;

    document.getElementById("backgroundImage").src=globalImg;

    console.log(globalImg)

}
function setChatper1Var(input) {
    chapter1var = input;
}

function StartChapter1() {

    chapter1var = { character: loadVar("character") }

    setglobalImg("Functions/Art/Chapter1/smallerCave.png");

    globalImg = "Functions/Art/Chapter1/smallerCave.png";

   // chapter1var = { character: characterChoice }
    printChatNode('//START//', false)
}

//if player can use either attack or bonus
var attackAvailable = 1
var bonusAvailable = 1
var monsterHP = 0
var characterChoice = ""
var character = "empty"
var characterHP = 0
var comSucc
var comFail

function comResult(result){
    if (result == "Success0"){
        //check this: !currentVars.lootAdventurer
        printChatNode(comSucc);
    }
    else if (result == "Success"){
        printChatNode(comSucc)
    }
    //failed in combat -> die
    else{
        printChatNode(comFail)
    }
}

function action(monster, attack){
    monsterHP = monsterHP - (diceRoll(attack.amount, attack.damage) + character.stats.dex)
    updateChatLog('../Functions/Chapter1/chapter1callscript.txt', character.hitNode)
    console.log(monsterHP);
    if(monsterHP > 0)
        combatChoice(monster)
    else
        comResult("Success")
}

function recCombat(monster, turn){

    while (document.getElementById('button-options').firstChild) {
        document.getElementById('button-options').removeChild(document.getElementById('button-options').firstChild)
    }

    if(turn == "enemy" || turn == "pass"){
        console.log(characterHP);
        attackAvailable = 1
        bonusAvailable = 1
        
        characterHP = characterHP - (diceRoll(monster.weapon.amount, monster.weapon.damage) + monster.stats.str)
        updateChatLog('../Functions/Chapter1/chapter1callscript.txt', monster.hitNode)
        if(characterHP > 0)
            combatChoice(monster)
        else
            comResult("Fail")
    }
    else if(turn == "action") {
        attackAvailable = 0
        switch(characterChoice){
            case 'Wizard':
                wizAttacks.forEach(attacks => {
                    //create button
                    const button = document.createElement('button')
 
                    //button name will be weapon/spell name
                    button.innerText = attacks.name
 
                    //add it to the correct css
                    button.classList.add('options')
 
                    //click event listener
                    button.addEventListener('click', () => action(monster, attacks))
 
                    //stuff
                    document.getElementById('button-options').appendChild(button)
                })
                break;
            case 'Barbarian':
                barbAttacks.forEach(attacks => {
                    //create button
                    const button = document.createElement('button')
 
                    //button name will be weapon/spell name
                    button.innerText = attacks.name
 
                    //add it to the correct css
                    button.classList.add('options')
 
                    //click event listener
                    button.addEventListener('click', () => action(monster, attacks))
 
                    //stuff
                    document.getElementById('button-options').appendChild(button)
                })
                break;
            case 'Bard':
                bardAttacks.forEach(attacks => {
                    //create button
                    const button = document.createElement('button')
 
                    //button name will be weapon/spell name
                    button.innerText = attacks.name
 
                    //add it to the correct css
                    button.classList.add('options')
 
                    //click event listener
                    button.addEventListener('click', () => action(monster, attacks))
 
                    //stuff
                    document.getElementById('button-options').appendChild(button)
                })
                break;
            case 'Rogue':
                rogueAttacks.forEach(attacks => {
                    //create button
                    const button = document.createElement('button')
 
                    //button name will be weapon/spell name
                    button.innerText = attacks.name
 
                    //add it to the correct css
                    button.classList.add('options')
 
                    //click event listener
                    button.addEventListener('click', () => action(monster, attacks))
 
                    //stuff
                    document.getElementById('button-options').appendChild(button)
                })
                break;
        }
    }
    else if(turn == "bonus"){
        bonusAvailable = 0
        switch(characterChoice){
            case 'Wizard':
                wizBonus.forEach(attacks => {
                    //create button
                    const button = document.createElement('button')
 
                    //button name will be weapon/spell name
                    button.innerText = attacks.name
 
                    //add it to the correct css
                    button.classList.add('options')
 
                    //click event listener
                    button.addEventListener('click', () => action(monster, attacks))
 
                    //stuff
                    document.getElementById('button-options').appendChild(button)
                })
                break;
            case 'Barbarian':
                barbBonus.forEach(attacks => {
                    //create button
                    const button = document.createElement('button')
 
                    //button name will be weapon/spell name
                    button.innerText = attacks.name
 
                    //add it to the correct css
                    button.classList.add('options')
 
                    //click event listener
                    button.addEventListener('click', () => action(monster, attacks))
 
                    //stuff
                    document.getElementById('button-options').appendChild(button)
                })
                break;
            case 'Bard':
                bardBonus.forEach(attacks => {
                    //create button
                    const button = document.createElement('button')
 
                    //button name will be weapon/spell name
                    button.innerText = attacks.name
 
                    //add it to the correct css
                    button.classList.add('options')
 
                    //click event listener
                    button.addEventListener('click', () => action(monster, attacks))
 
                    //stuff
                    document.getElementById('button-options').appendChild(button)
                })
                break;
            case 'Rogue':
                rogueBonus.forEach(attacks => {
                    //create button
                    const button = document.createElement('button')
 
                    //button name will be weapon/spell name
                    button.innerText = attacks.name
 
                    //add it to the correct css
                    button.classList.add('options')
 
                    //click event listener
                    button.addEventListener('click', () => action(monster, attacks))
 
                    //stuff
                    document.getElementById('button-options').appendChild(button)
                })
                break;
        }
    }
}

function combatChoice(monster){
    //display the correct buttons
    while (document.getElementById('button-options').firstChild) {
        document.getElementById('button-options').removeChild(document.getElementById('button-options').firstChild)
    }

    if(attackAvailable == 1){
        
        console.log("Action made");
        const button = document.createElement('button')

        //display the button text
        button.innerText = "Action"

        //add it to the correct css
        button.classList.add('options')

        //click event listener - load the load function for it
        button.addEventListener('click', () => recCombat(monster, "action"))

        document.getElementById('button-options').appendChild(button)
    }
    if(bonusAvailable == 1){
        console.log("Bonus Made");
        const button = document.createElement('button')

        //display the button text
        button.innerText = "Bonus Action"

        //add it to the correct css
        button.classList.add('options')

        //click event listener - load the load function for it
        button.addEventListener('click', () => recCombat(monster, "bonus"))

        document.getElementById('button-options').appendChild(button)
    }

    console.log("Pass Made");
    const button = document.createElement('button')

    //display the button text
    button.innerText = "End Turn"

    //add it to the correct css
    button.classList.add('options')

    //click event listener - load the load function for it
    button.addEventListener('click', () => recCombat(monster, "pass"))

    document.getElementById('button-options').appendChild(button)
}

//combat function
function combatFunc(combatNum) {

    //Initialize which character we use
    characterChoice = loadVar('character')
    if(characterChoice == 'Wizard')
        character = charStats1.Wizard
    else if(characterChoice == 'Bard')
        character = charStats1.Bard
    else if(characterChoice == 'Barbarian')
        character = charStats1.Barbarian
    else
        character = charStats1.Rogue
    characterHP = charStats1.hp
    
    //Decide which combat we'll be doing
    if(combatNum == 'Hobgoblin'){
        var monster = Monsters1.Hobgoblin
        monsterHP = monster.health
    }
    else if(combatNum == 'Goblin'){
        var monster = Monsters1.Goblin
        monsterHP = monster.health
    }
    else if(combatNum == 'Minotaur'){
        var monster = Monsters1.Minotaur
        monsterHP = monster.health
    }
    
    //roll for initiative
    var monsterRoll = diceRoll(1, 20) + monster.stats.dex
    var playerRoll = diceRoll(1, 20) + character.stats.dex
    
    //if the monster goes first
    if(monsterRoll > playerRoll) {
        console.log("Monster First");
        recCombat(monster, "enemy")
    }
    
    else{
        console.log("Player First");
        attackAvailable = 1
        bonusAvailable = 1
        combatChoice(monster)
    }
}

function printChatNode(chatNodeIndex, load_chapter1vars) {
    lastChatNodeIndex = chatNodeIndex;

    //STUPID FREAKING THINGS THAT I LOVE
    if (chatNodeIndex == '//START//')
        createCheckpoint();

    //If we've reached the end -> finish game
    if (chatNodeIndex == 'END') {
        loadContainer7();
    }
    
    //if we're coming back to the website - refresh variables
    if (load_chapter1vars) {
        loadChapter1();
    } //end of if load chapter1vars

    //Save the state
    savechapter1(chatNodeIndex);

    //get the current chatNode/option to display
    const chatNode = chatNodes.find(chatNode => chatNode.id === chatNodeIndex)

    //display the chatoption with chatlog
    if (updateChatLog('../Functions/Chapter1/chapter1callscript.txt', chatNodeIndex));

    //If the changeImage != null -> change background
    if (chatNode.changeImage != null) {

        console.log(chatNode.changeImage)

        globalImg = chatNode.changeImage;
    }

   // console.log(globalImg)

    document.getElementById("backgroundImage").src=globalImg;

    if (chatNode.changeOverlayImage != null){
        document.getElementById("overlayedImage").style.display = "inline-block";

        document.getElementById("overlayedImage").src=chatNode.changeOverlayImage;
    }
    else {
        document.getElementById("overlayedImage").style.display = "none";
    }

        //If there is more to print!
        if (chatNode.NextAutoChat != null) {
            //loop through each id and print them
            chatNode.NextAutoChat.forEach(autochat => {

                if (showOption(autochat)) {
                    if (updateChatLog('../Functions/Chapter1/chapter1callscript.txt', autochat.id));
                }
            }) //end of chatnode

            //display dashed line
            if (updateChatLog('../Functions/Chapter1/chapter1callscript.txt','//dashes//'));

        }
        else {
            
            //display dashed line
            if (updateChatLog('../Functions/Chapter1/chapter1callscript.txt','//dashes//'));
        }

   //IF WE GO TO THE MERCHANT SHOP
   if (chatNode.shop == true) {
        
        //change container1 -> container3
        showShop();

   }
   //if we enter combat
   else  if(chatNode.combat != null) {

        //display the correct buttons
        while (document.getElementById('button-options').firstChild) {
            document.getElementById('button-options').removeChild(document.getElementById('button-options').firstChild)
        }

        //enter combat
        comSucc = chatNode.sucess
        comFail = chatNode.fail
        combatFunc(chatNode.combat);
    }
    //did we die - restart from checkpoint
    else if (chatNode.restartCheckPoint) {


        //display the correct buttons
        while (document.getElementById('button-options').firstChild) {
            document.getElementById('button-options').removeChild(document.getElementById('button-options').firstChild)
        }

        chatNode.options.forEach(option => {
            const button = document.createElement('button')
    
            //display the button text
            button.innerText = option.text
    
            //add it to the correct css
            button.classList.add('options')

            //click event listener - load the load function for it
            button.addEventListener('click', () => loadCheckpoint())
    
            document.getElementById('button-options').appendChild(button)
        });
    
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

        //set the previous Node -> might be used later
        const previousChatNode = chatNodeIndex

    } //end of else
}


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
    globalImg = (loadVar("backgroundImage"));

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
            }
        ]
    },
    //DEFEAT MONSTER
    {
        id: '//1.2.2//',
        options: [
            {
                text: 'Return to Cave',
                NextChat: '//1.2.0//'
            },
        ]
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
        changeImage: "Functions/Art/Chapter1/OpenShop.png",
        shop: true
    },
    //1.3 ==> WARM AND BRIGHT TUNNEL
    {
        id: '//1.3.0//',
        NextAutoChat: [
            {
                id: '//1.3.0a//',
                requiredVar: (currentVars) => !currentVars.metMerchant
            },
            {
                id: '//1.3.0b//',
            }
        ],
        options: [
/*            {
                text: 'Continue',
                NextChat: '//1.3.0a//',
                requiredVar: (currentVars) => !currentVars.metMerchant
            },
            {
                text: 'Continue',
                NextChat: '//1.3.0b//',
                requiredVar: (currentVars) => currentVars.metMerchant
            },
*/
            {
                text: 'Follow Sign to Merchant',
                NextChat: '//1.3.1a//',
                requiredVar: (currentVars) => !currentVars.metMerchant
            },
            {
                text: 'Follow Sign to Merchant',
                NextChat: '//1.3.1b//',
                requiredVar: (currentVars) => currentVars.metMerchant
            },
            {
                text: 'Continue Down tunnel',
                NextChat: '//1.3.2//',
                requiredVar: (currentVars) => !currentVars.metMerchant
            },
            {
                text: 'Continue Down Tunnel',
                NextChat: '//1.3.3b//',
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
                NextChat: '//1.3.1a//',
                requiredVar: (currentVars) => !currentVars.metMerchant
            },
            {
                text: 'Follow Sign to Merchant',
                NextChat: '//1.3.1b//',
                requiredVar: (currentVars) => currentVars.metMerchant
            },
            {
                text: 'Continue Down tunnel',
                NextChat: '//1.3.2//',
                requiredVar: (currentVars) => !currentVars.metMerchant
            },
            {
                text: 'Continue Down Tunnel',
                NextChat: '//1.3.3b//',
                requiredVar: (currentVars) => currentVars.metMerchant
            }
        ]
    },
    {
        id: '//1.3.1a//',
        changeImage: "Functions/Art/Chapter1/CloseShop.png",
        options: [
            {
                text: 'Talk to Merchant',
                NextChat: '//1.2.4//',
                requiredVar: (currentVars) => currentVars.metMerchant
            },
            {
                text: 'Continue Down tunnel',
                NextChat: '//1.3.2//',
                requiredVar: (currentVars) => !currentVars.metMerchant
            },
            {
                text: 'Continue Down tunnel',
                NextChat: '//1.3.3b//',
                requiredVar: (currentVars) => currentVars.metMerchant
            }
        ]
    },
    {
        id: '//1.3.1b//',
        options: [
            {
                text: 'Talk to Merchant',
                NextChat: '//1.2.4//',
                requiredVar: (currentVars) => currentVars.metMerchant
            },
            {
                text: 'Continue Down tunnel',
                NextChat: '//1.3.2//',
                requiredVar: (currentVars) => !currentVars.metMerchant
            },
            {
                text: 'Continue Down tunnel',
                NextChat: '//1.3.3b//',
                requiredVar: (currentVars) => currentVars.metMerchant
            }
        ]

    },
    {
        id: '//1.3.2//',
        changeImage: "Functions/Art/Chapter1/smallerCave.png",
        rollnumber: 1,
        dicetype: d20,
        tobeat: 13,
        sucess: '//1.3.4//',
        fail: '//1.3.3a//'
    },
    {
        id: '//1.3.3a//',
        combat: 'Hobgoblin',
        sucess: "//1.3.5//",
        fail: "//1.2.3//",
    },
    {
        id: '//1.3.3b//',
        changeImage: "Functions/Art/Chapter1/smallerCave.png",
        combat: 'Hobgoblin',
        sucess: '//1.2.2//',
        fail: '//1.2.3//',
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
        combat: 'Hobgoblin',
        sucess: "//1.3.5//",
        fail: "//1.2.3//",
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
        fail: '//1.4.3a//'
    },
    {
        id: '//1.4.2//',
        combat: 'Goblin',
        sucess: '//1.4.5//',
        fail: '//1.2.3//'

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
        combat: 'Goblin',
        sucess0: '//1.4.5//',
        sucess: '//1.4.5//',
        fail: '//1.2.3//'
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
        /*NextAutoChat: [
            {
                id:'//1.5.0a//',
                requiredVar: (currentVars) => !currentVars.metCompanion
            },
            {
                id: '//1.5.0b//',
                requiredVar: (currentVars) => currentVars.foundDoor
            },
            {
                id: '//1.5.0c//',
                requiredVar: (currentVars) => currentVars.metCompanion,
                requiredVar: (currentVars) => currentVars.foundDoor,
                requiredVar: (currentVars) => currentVars.metMerchant
            },
            {
                id: '//1.5.0d//',
                requiredVar: (currentVars) => currentVars.metCompanion,
                requiredVar: (currentVars) => !currentVars.metMerchant,
                requiredVar: (currentVars) => currentVars.foundDoor
            },
            {
                id: '//1.5.0e//',
                requiredVar: (currentVars) => currentVars.metCompanion,
            },
            
        ],
    */
        options: [
            {
                text: 'Continue',
                NextChat: '//1.5.0a//',
                requiredVar: (currentVars) => !currentVars.metCompanion
            },
            {
                text: 'Continue',
                NextChat: '//1.5.0b//',
                requiredVar: (currentVars) => currentVars.metCompanion,
                requiredVar: (currentVars) => currentVars.foundDoor
            },
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
        changeOverlayImage: 'Functions/Art/Chapter1/goodBoy.png',
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
        changeOverlayImage: 'Functions/Art/Chapter1/goodBoy.png',
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
        changeOverlayImage: 'Functions/Art/Chapter1/goodBoy.png',
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
        changeOverlayImage: 'Functions/Art/Chapter1/goodBoy.png',
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
        changeOverlayImage: 'Functions/Art/Chapter1/goodBoy.png',
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
        changeOverlayImage: 'Functions/Art/Chapter1/goodBoy.png',
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
        changeOverlayImage: 'Functions/Art/Chapter1/goodBoy.png',
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
        combat: 'Minotaur',
        sucess: '//1.6.1a//',
        fail: '//1.2.3//'
        /*
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
        */
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
        options: [
            {
                text: 'Finish',
                NextChat: 'END'
            }
        ]
    },
    {
        id: 'END'
    },
] //ChatNodes end
