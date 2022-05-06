// JavaScript Document

/*
 This save system works on the principle of "live variables" and "stored variables".
 
 live variable: variables that are loaded and being used to run the game
 
 stored variables: variables in local storage. Not to be used live. must be loaded.
 
 !LocalStorage only saves strings. Complex data structures must be encoded and decoded as strings if it is to be saved.
 
 Any JS scripts that uses save.js will use saveVar() and loadVar(). saveVar() needs to be within a scripts own uniquely named save function and loadVar() needs do be within a scripts own uniquely named load function that loads saved variables to the live variables within.
 
 */

//UNIVERSAL FUNCTIONS----------------------------

/*	saveVar() and loadVar() are for other scripts to use localStorage to permanantly store 			variables.
 These can be used strictly with "live variables". Data is not to be used directly from 
 localStorage. There should be a live variable and it will be saved on an 
 explicit save event.
 */

function saveVar(name, value) {
    localStorage.setItem(name, value);
}
function loadVar(name) {
    return localStorage.getItem(name);
}

/*	saveJson() and loadJson() are the same as saveVar and loadVar but they encode the variable
 into a string and they decode back into a usable JSON when loading.
 */
function saveJson(name, value) {
    saveVar(name, JSON.stringify(value))
}

function loadJson(name) {
    return JSON.parse(loadVar(name));
}

/*	
    These are the ultimate saving and loading functions. They will call all save and load functions from any other js script that needs variables saved to localStorage.
 */
function globalSave() {
    //alert("placeholder: globalSave\(\)");

    saveVar("saveExists", saveExists);
    saveVar("playerGold", playerGold);
    saveVar("playerLevel", playerLevel);
    saveVar("playerName", playerName);
    saveVar("dogName", dogName);
    console.log("GLOBAL SAVE COMPLETED");
}

function globalLoad() {
    //alert("placeholder globalLoad\(\)");
    saveExists = loadVar("saveExists");
    playerGold = loadVar("playerGold");
    playerLevel = loadVar("playerLevel");
    playerName = loadVar("playerName");
    dogName = loadVar("dogName");
    console.log("GLOBAL LOAD COMPLETED");
}

/*
 CHECKPOINT FUNCTIONS----------------------------
 */

 /* createCheckpoint()

    saves multiple variables to localStorage with the names having "checkpoint_" behind the name.
 */
function createCheckpoint() {
	//Chapter data
	saveVar("checkpoint_chatNodeIndex", getLastChatNodeIndex());
	saveVar("checkpoint_globalImg", getglobalImg());
	saveJson("checkpoint_chapterVars", getChapter1Var());
	console.log("MERCHANT STATUS SAVED:" + loadJson("checkpoint_chapterVars").metMerchant);
	console.log("CHAPTER1VARS = :" + getChapter1Var().metMerchant);
	//Shop data
	saveJson("checkpoint_shopItems", getShopItems());
	saveJson("checkpoint_playerItems", getPlayerItems());

    //Character Health
    saveVar("checkpoint_charCurrHP", getCharCurrHP());


	//global save
	globalSave();
	console.log("CHECKPOINT CREATED");
}

/*  loadCheckpoint()

    Loads previously saved checkpoint variables into their live variables.
*/
function loadCheckpoint() {
	//global load
	globalLoad();
	console.log("CHARACTER TYPE: " + getChapter1Var().character);
	//Chapter load
	console.log(loadVar("checkpoint_chatNodeIndex"));
	console.log(loadJson("checkpoint_chapterVars"));
	console.log("MERCHANT STATUS LOADED:" + loadJson("checkpoint_chapterVars").metMerchant);
	//shop and inventory load
	setPlayerItems(loadJson("checkpoint_playerItems"));
	setShopItems(loadJson("checkpoint_playerItems"));

	//Character Health
    setCharCurrHP(loadVar("checkpoint_charCurrHP"));

	//background image load
	console.log(loadVar("checkpoint_globalImg"))
	setglobalImg(loadVar("checkpoint_globalImg"));
	globalImg = loadVar("checkpoint_globalImg")
	printChatNode(loadVar("checkpoint_chatNodeIndex"), false);

	setChatper1Var(loadJson("checkpoint_chapterVars"));
	console.log("POST LOADING MERCHANT STATUS: " + getChapter1Var().metMerchant);
	console.log("CHECKPOINT LOADED AT:  " + loadVar("checkpoint_chatNodeIndex"))

	//loadChapter1(loadVar("checkpoint_chatNodeIndex"))
}


var debug = true;


/*
 Live variables and their get and set functions
 */
var saveExists
var playerGold = 0;
var playerLevel
var playerName
var dogName
var gameSave

/*
 Get and set functions:
 
 input string of the name of the live variable as selection and what value you want to change it to as value. 
 ex: 
 add 10 gold:
 setLiveVar("playerGold", getLiveVar("playerGold") + 10);
 */
//setLiveVar will change any variable in this script from any other script
function setLiveVar(selection, value) {
    switch (selection) {
        case "playerGold":
            playerGold = value;
            break;

        case "playerLevel":
            playerLevel = value;
            break;

        case "playerName":
            playerName = value;
            break;

        case "dogName":
            dogName = value;
            break;
    }
}
//getLiveVar() is a universal function to call any variable in this script from any other script.
function getLiveVar(selection) {
    switch (selection) {
        case "playerGold":
            return playerGold;
            break;

        case "playerLevel":
            return playerLevel;
            break;

        case "playerName":
            return playerName;
            break;

        case "dogName":
            return playerdogNameGold;
            break;
    }
}

/*  addGold(amount) 

    manipulates the playerGold variable from outside the script.
    (amount) can be a negative number to take away player's gold.
*/
function addGold(amount) {

    if (amount > playerGold && amount <= 0) {
        console.log("[SAVE]: Gold subtraction results in negative gold balance"); 
    }
    else if (amount + playerGold >=2500 || playerGold >=2500) {
        console.log("[SAVE]: Gold balance too high, capped at 2500"); 
        playerGold = 2500;
    }
    else {
        playerGold = parseInt(playerGold) + parseInt(amount);
        console.log("[SAVE]: Added gold: " + amount + " = " + playerGold);
    }
}

//Test functions for use in /Test/test.html----------------------------

//Load variables from text box inputs to live variables
function updateAll() {

    saveExists = document.querySelector("#saveExists").checked;
    playerGold = document.getElementById("gold").value
    playerLevel = document.getElementById("level").value
    playerName = document.getElementById("name").value

    if (debug)
        console.log("saveExists updated as: " + saveExists);


    displayAll();
}

//save all data from live variables to local storage variables
function saveAll() {
    saveVar("saveExists", saveExists);

    localStorage.setItem("playerGold", playerGold);
    localStorage.setItem("playerLevel", playerLevel);
    localStorage.setItem("playerName", playerName);

    if (debug)
        console.log("saveExists saved as: " + loadVar("saveExists"));
}

//Retrieve all data from local storage and load it into live variables
function loadAll() {

    saveExists = localStorage.getItem("saveExists");
    playerGold = localStorage.getItem("playerGold");
    playerLevel = localStorage.getItem("playerLevel");

    playerName = localStorage.getItem("playerName");

    if (debug)
        console.log("saveExists loaded as: " + saveExists);


    playerName = localStorage.getItem("playerName");

    displayAll();
}

//Display data from live variables
function displayAll() {
    document.getElementById("goldDisplay").innerHTML = playerGold;
    document.getElementById("levelDisplay").innerHTML = playerLevel;
    document.getElementById("nameDisplay").innerHTML = playerName;
    document.querySelector("#saveExists").checked = saveExists;

    if (debug)
        console.log("live Var: " + saveExists + ", Saved var: " + loadVar("saveExists"));
}

//Clear all local storage
function clearState() {
    localStorage.clear();
    loadVar("saveExists", "false");
    if (debug)
        console.log("!State cleared!")
}

//MAIN SCREEN POPUPS AND MENU---------------------------------------------------------
//Test initialization by removing load button if save does not exist.
window.onload = init();
function init() {
    if (localStorage.getItem("funcState") === null) {

        document.getElementById("loadBtn").style.display = 'none';

    } else {

        document.getElementById("loadBtn").style.display = 'inline-block';
    }
}

/*
    newGame() 

    Initializes a new game and prompts the user to confirm choice.
*/
function newGame() {
    console.log(loadVar("saveExists"));
    if (localStorage.getItem("saveExists") === null || loadVar("saveExists") == "undefined") {
        alert("No save exists, A new game will start");
        deleteGame(false);
        localStorage.setItem("saveExists", "True")
    
        document.getElementById("container2").style.display = 'inline-block'
        document.getElementById("container1").style.display = 'none'
        element.style.backgroundColor = "#00FF00";

        playerGold = 0;

    } else {
        if (confirm("A game already Exists. Do you want to start a New Game?")) {
            alert("A new game will start");
            deleteGame(false);
            document.getElementById("container2").style.display = 'inline-block'
            document.getElementById("container1").style.display = 'none'
            element.style.backgroundColor = "#00FF00";
            playerGold = 0;


        } else {
            alert("A new game will NOT start");
        }
    }
}

/*
    loadGame()

    calls load_function from chapter1_begin.js to initialize the game based on the last chatNode seen.
*/
function loadGame() {
    if (localStorage.getItem("saveExists") == null) {
        alert("A save does not exist.");
    } else {
        alert("Game started from existing save");
    }
    document.getElementById("container3").style.display = 'inline-block'
    document.getElementById("container1").style.display = 'none'
    load_function();
}

/*
    deleteGame(prompt)

    Deletes the game save. 
    
    Prompt can be true or false to dictate weather it prompts the user for confirmation
    or not. Non-prompting is for use in newGame(); to delete the game before creating a new one.
*/
function deleteGame(prompt) {

    if (prompt) {
        if (localStorage.getItem("saveExists") != null) {
            if (confirm("Are you sure you want to delete your game save?\n ALL PROGRESS WILL BE LOST")) {
                localStorage.removeItem("playerGold");
                localStorage.removeItem("playerName");
                localStorage.removeItem("playerLevel");
    
                localStorage.removeItem("funcState");
                localStorage.clear();
    
    
    
                console.log("GAME DELETED");
            }
            saveVar("saveExists", null);
        } else {
            alert("No game save exists");
        }
    }
    else {
        localStorage.removeItem("playerGold");
        localStorage.removeItem("playerName");
        localStorage.removeItem("playerLevel");

        localStorage.removeItem("funcState");
        localStorage.clear();

        console.log("GAME DELETED");
    }
}
