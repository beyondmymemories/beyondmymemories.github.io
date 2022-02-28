// JavaScript Document

/*
This save system works on the principle of "live variables" and "stored variables".

live variable: variables that are loaded and being used to run the game

stored variables: variables in local storage. Not to be used live. must be loaded.

!LocalStorage only saves strings. Complex data structures must be encoded and decoded as strings if it is to be saved.

I am going to compile all data to a single JSON that is encoded as a string and decoded back to a JSON on save and load.

*/

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
		alert("NO SAVE");
	}
	else {
		document.getElementById("loadBtn").style.display = 'inline';
		alert("SAVE EXISTS");
	}
}

//Create new game and set saveExists to "True". 
function newGame() {
	
	if(localStorage.getItem("saveExists") === null) {
		alert("No save exists, A new game will start");
		localStorage.setItem("saveExists", "True")
		window.location.href = "charSelect.html";
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
