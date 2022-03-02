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

/*	These are the ultimate saving and loading functions. They will call all save and load 			functions from any other js script that needs variables saved to localStorage.
*/
function globalSave() {
	alert("placeholder: globalSave\(\)");
}

function globalLoad() {
	alert("placeholder globalLoad\(\)");
}




//live Variables
var saveExists
var playerGold
var playerLevel
var playerName
var gameSave

//Load variables from text box inputs to live variables
function updateAll() {
	saveExists = document.getElementById("saveExists").value
	playerGold = document.getElementById("gold").value
	playerLevel = document.getElementById("level").value
	playerName = document.getElementById("name").value
	displayAll();
}

//save all data from live variables to local storage variables
function saveAll() {
	
	localStorage.setItem("saveExists", saveExists);
	localStorage.setItem("playerGold", playerGold);
	localStorage.setItem("playerLevel", playerLevel);
	localStorage.setItem("playerName", playerName);
	
}

//Retrieve all data from local storage and load it into live variables
function loadAll() {
	
	saveExists = localStorage.getItem("saveExists");
	playerGold = localStorage.getItem("playerGold");
	playerLevel = localStorage.getItem("playerLevel");
	playerName = localStorage.getItem("playerName");
	
	displayAll();
}

//Display data from live variables
function displayAll() {
	document.getElementById("goldDisplay").innerHTML = playerGold;
	document.getElementById("levelDisplay").innerHTML = playerLevel;
	document.getElementById("nameDisplay").innerHTML = playerName;
}

//Clear all local storage
function clearState() {
	localStorage.clear();
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
			localStorage.removeItem("saveExists");
		}
	}
	else {
		alert("No game save exists");
	}	
	
}