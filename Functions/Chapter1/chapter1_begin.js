
/*

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

*/

const buttonOptionsElement = document.getElementById('button-options');

//array of variables for chapter1
let chapter1var = {}

function testStart() {

    chapter1var = {}
    printChatNode('//START//')
}

function printChatNode(chatNodeIndex) {

    //get the current chatNode/option to display
   const chatNode = chatNodes.find(chatNode => chatNode.id === chatNodeIndex)

    //display the chatoption with chatlog
    updateChatLog('../Functions/Chapter1/chapter1callscript.txt', chatNode.id);

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
    printChatNode(nextChatNodeId)

} //end of selectOption

const chatNodes = [
    {
        id: '//START//',
        options: [
            {
                text: 'Sit and wait',
                NextChat: '//1.1.0//'
            },
            {
                text: 'Search around you',
                NextChat: '//1.2.1//'
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
                NextChat:'//1.4.0//'
            }
        ]
    },
    {
        id: '//1.2.1//',
        options: [
            {
            text: 'Continue',
            NextChat: '//1.2.0//'
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
    },
    {
        id: '//1.3.3a//',
    },
    {
        id: '//1.3.3b//',
    },
    {
        id: '//1.3.3c//',
    },
    {
        id: '//1.3.4//',
    },
    {
        id: '//1.3.5//',
    },
    //1.4 ==> COLD AND DARK TUNNEL
    {
        id: '//1.4.0//',
    },
    {
        id: '//1.4.1//',
    },
    {
        id: '//1.4.2//',
    },
    {
        id: '//1.4.3a//',
    },
    {
        id: '//1.4.3b//',
    },
    {
        id: '//1.4.5//',
    },
    //1.5 ==> WATERFALL ROOM
    {
        id: '//1.5.0a//',
    },
    {
        id: '//1.5.0b//',
    },
    {
        id: '//1.5.0c//',
    },
    {
        id: '//1.5.0d//',
    },
    {
        id: '//1.5.0e//',
    },
    {
        id: '//1.5.1a//',
    },
    {
        id: '//1.5.1b//',
    },
    {
        id: '//1.5.1c//',
    },
    {
        id: '//1.5.1d//',
    },
    {
        id: '//1.5.1e//',
    },
    {
        id: '//1.5.2a//',
    },
    {
        id: '//1.5.2b//',
    },
    {
        id: '//1.5.2c//',
    },
    {
        id: '//1.5.2d//',
    },
    {
        id: '//1.5.2e//',
    },
    {
        id: '//1.5.2f//',
    },
    {
        id: '//1.5.3//',
    },
    {
        id: '//1.5.4a//',
    },
    {
        id: '//1.5.4b//',
    },
    {
        id: '//1.5.4c//',
    },
    {
        id: '//1.5.4d//',
    },
    {
        id: '//1.5.5//',
    },
    {
        id: '//1.5.6a//',
    },
    {
        id: '//1.5.6b//',
    },
    //1.6 ==> ENDING, MINOTAUR AND MEMORY 1
    {
        id: '//1.6.0a//',
    },
    {
        id: '//1.6.0b//',
    },
    {
        id: '//1.6.0c//',
    },
    {
        id: '//1.6.0d//',
    },
    {
        id: '//1.6.1a//',
    },
    {
        id: '//1.6.1b//',
    },
    {
        id: '//1.6.1c//',
    },
    {
        id: '//1.6.1d//',
    },
] //ChatNodes end
