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

//UNIVERSAL FUNCTIONS----------------------------
function saveVar(name, value) {
    localStorage.setItem(name, value);
}
function loadVar(name) {

	//console.log(localStorage.getItem(name))

    return localStorage.getItem(name);
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
	

	playerName = localStorage.getItem("playerName");	

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
	if(localStorage.getItem("funcState") === null) {
		document.getElementById("loadBtn").style.display = 'none';
		//alert("NO SAVE");
	}
	else {
		document.getElementById("loadBtn").style.display = 'inline-block';
		//alert("SAVE EXISTS");
	}
	alert("test");
}

//Create new game and set saveExists to "True". 
function newGame() {
	
	if(localStorage.getItem("saveExists") === null) {
		alert("No save exists, A new game will start");
		localStorage.setItem("saveExists", "True")
		//window.location.href = "charSelect.html";
		document.getElementById("container2").style.display = 'inline-block'
		document.getElementById("container1").style.display = 'none'
		element.style.backgroundColor = "#00FF00";
	}
	else {
		if (confirm("A game already Exists. Do you want to start a New Game?")) {
		  alert("A new game will start");
		  document.getElementById("container2").style.display = 'inline-block'
		  document.getElementById("container1").style.display = 'none'
		  element.style.backgroundColor = "#00FF00";
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
	document.getElementById("container3").style.display = 'inline-block'
	document.getElementById("container1").style.display = 'none'
	load_function();
}


function deleteGame() {

	if(localStorage.getItem("saveExists") != null) {
		if(confirm("Are you sure you want to delete your game save?\n ALL PROGRESS WILL BE LOST")) {
			localStorage.removeItem("playerGold");
			localStorage.removeItem("playerName");
			localStorage.removeItem("playerLevel");

			localStorage.removeItem("funcState");
		}
	}
	else {
		alert("No game save exists");
	}	
	
}
