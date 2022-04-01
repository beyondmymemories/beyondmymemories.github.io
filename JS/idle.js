// JavaScript Document
/*
	86400 seconds / day
	3600 seconds / hour
  	60 seconds / minute
	1 seconds / second lmao

*/
function beginIdle() {
	saveVar("exitTime", Date.now());
}

function endIdle() {
	
}

function displayTimeIdle() {
	var enterTime = Date.now();
	
	var timeIdle = enterTime - loadVar("exitTime");
	document.getElementById("idleOutput").innerHTML = translateSeconds(Math.round(timeIdle/1000));
}
function translateSeconds(secondsIn) {	
	return new Date(secondsIn * 1000).toISOString().substr(11, 8);	
}

function applyIdle() {
	var timeIdle = Date.now() - loadVar("exitTime");
	seconds = Math.round(timeIdle/1000)
	addGold(seconds);
	console.log("added: " + seconds);
	displayAll();
	//alert(playerGold.concat(" + ", endIdle(), " = ", (playerGold + endIdle())));
}

//TIMER FUNCTIONS -----------------------------

function beginTimer(minutes, name) {
	var timer = {"end" : minutes, "name" : name, "start" : Date.now()}

	saveJson(name, timer);
}

function checkTimer(name) {
	timer = loadJson("" + name);
	console.log("TIMER RESULT: " + (Date.now() - timer.start)/1000);
	if ((Date.now() - timer.start)/1000 >= timer.end) {
		return true;
	}
	else {
		return false;
	}
}

function testBeginTimer() {
	beginTimer(document.getElementById("timeInput").value, document.getElementById("nameInput").value);
}

function testCheckTimer() {
	document.getElementById("timerOutput").innerHTML = checkTimer(document.getElementById("checkNameInput").value);

}