// JavaScript Document

/*
This save system works on the principle of "live variables" and "stored variables".

live variable: variables that are loaded and being used to run the game

stored variables: variables in local storage. Not to be used live. must be loaded.

!LocalStorage only saves strings. Complex data structures must be encoded and decoded as strings if it is to be saved.

I am going to compile all data to a single JSON that is encoded as a string and decoded back to a JSON on save and load.

*/
//UNIVERSAL FUNCTIONS----------------------------
function saveVar(name, value) {
	localStorage.setItem(name, value);
}
function loadVar(name) {
	return localStorage.getItem(name)
}

var debug = true;


//live Variables
var saveExists
var playerGold
var playerLevel
var playerName
var gameSave

function addGold(amount) {
	playerGold = parseInt(playerGold) + parseInt(amount);
}

//Load variables from text box inputs to live variables
function updateAll() {
	
	saveExists = document.querySelector("#saveExists").checked;
	playerGold = document.getElementById("gold").value
	playerLevel = document.getElementById("level").value
	playerName = document.getElementById("name").value
	
	if (debug) console.log("saveExists updated as: " + saveExists);
	
	
	displayAll();
}

//save all data from live variables to local storage variables
function saveAll() {
	saveVar("saveExists", saveExists);
	
	localStorage.setItem("playerGold", playerGold);
	localStorage.setItem("playerLevel", playerLevel);
	localStorage.setItem("playerName", playerName);
	
	if (debug) console.log("saveExists saved as: " + loadVar("saveExists"));
}

//Retrieve all data from local storage and load it into live variables
function loadAll() {
	
	saveExists = localStorage.getItem("saveExists");
	playerGold = localStorage.getItem("playerGold");
	playerLevel = localStorage.getItem("playerLevel");
	playerName = localStorage.getItem("playerName");
	
	if (debug) console.log("saveExists loaded as: " + saveExists);
	
	displayAll();
}

//Display data from live variables
function displayAll() {
	document.getElementById("goldDisplay").innerHTML = playerGold;
	document.getElementById("levelDisplay").innerHTML = playerLevel;
	document.getElementById("nameDisplay").innerHTML = playerName;
	document.querySelector("#saveExists").checked = saveExists;
	
	if (debug) console.log("live Var: " + saveExists + ", Saved var: " + loadVar("saveExists"));
}

//Clear all local storage
function clearState() {
	localStorage.clear();
	loadVar("saveExists", "false");
	if (debug) console.log("!State cleared!")
}

//MAIN SCREEN TEST POPUPS---------------------------------------------------------
//Test initialization by removing load button if save does not exist.
window.onload = init();
function init() {
	if(localStorage.getItem("saveExists") === null) {
		document.getElementById("loadBtn").style.display = 'none';
		//alert("NO SAVE");
	}
	else {
		document.getElementById("loadBtn").style.display = 'block';
		//alert("SAVE EXISTS");
	}
	alert("test");
}

//Create new game and set saveExists to "True". 
function newGame() {
	
	if(localStorage.getItem("saveExists") === null) {
		alert("No save exists, A new game will start");
		localStorage.setItem("saveExists", "True")
	}
	else {
		if (confirm("A game already Exists. Do you want to start a New Game?")) {
		  alert("A new game will start");
		} 
		else {
		  alert("A new game will NOT start");
		}
	}
}

//Check for saveExists and report outcome. In the future, initil
function loadGame() {
	if(localStorage.getItem("saveExists") == null) {
		alert("A save does not exist.");
	}
	else {
		alert("Game started from existing save");
	}
}
function deleteGame() {

	if(localStorage.getItem("saveExists") != null) {
		if(confirm("Are you sure you want to delete your game save?\n ALL PROGRESS WILL BE LOST")) {
			localStorage.removeItem("playerGold");
			localStorage.removeItem("playerName");
			localStorage.removeItem("playerLevel");
		}
	}
	else {
		alert("No game save exists");
	}	
	
}