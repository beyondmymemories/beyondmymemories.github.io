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
	var enterTime = Date.now();
	
	var timeIdle = enterTime - loadVar("exitTime");
	document.getElementById("idleOutput").innerHTML = translateSeconds(Math.round(timeIdle/1000));
}

function translateSeconds(secondsIn) {	
	return new Date(secondsIn * 1000).toISOString().substr(11, 8);	
}
