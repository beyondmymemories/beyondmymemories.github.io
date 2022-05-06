// JavaScript Document
/*
 86400 seconds / day
 3600 seconds / hour
 60 seconds / minute
 1 seconds / second lmao
 
 */

 //IDLE FUNCTIONS  -----------------------------

 //Saves a timestamp to localStorage named "exitTime"
function beginIdle() {
    saveVar("exitTime", Date.now());
    console.log("[IDLE]: time saved: + " + Date.now());
}

//Takes difference of exitTime and the current time and give the player gold depending on time spent.
//give player 1 gold per second idled.
function applyIdle() {
    var timeIdle = Date.now() - loadVar("exitTime");
    seconds = Math.round(timeIdle / 1000)
    addGold(seconds);
    console.log("added: " + seconds);
    console.log("[IDLE]: time idled: + " + timeIdle + ", gold earned: " + seconds);
    //displayAll();
    //alert(playerGold.concat(" + ", endIdle(), " = ", (playerGold + endIdle())));
}


//test functions for test page at /Tests/test.html
function displayTimeIdle() {
    var enterTime = Date.now();

    var timeIdle = enterTime - loadVar("exitTime");
    document.getElementById("idleOutput").innerHTML = translateSeconds(Math.round(timeIdle / 1000));
}
function translateSeconds(secondsIn) {
    return new Date(secondsIn * 1000).toISOString().substr(11, 8);
}


//TIMER FUNCTIONS -----------------------------

/*	begin timer makes a JSON with the timer length in seconds (end), a label for the timer, 
 and the current Date for future checking of the timer.
 */
function beginTimer(minutes, name) {
    var timer = {"end": minutes, "name": name, "start": Date.now()}

    saveJson(name, timer);
}

/*	checkTimer takes in a timer name and checks the difference between the time of when the
 timer was made and the current time. If the difference is greater than or equal to 
 timer.end (the length of the timer) then it returns true. Otherwise, the timer has not 
 reached the alloted time and will return false.
 
 the timer still exists within localStorage after it is found to be true, but it makes no 
 impact to preformance as the timers are passive and not constantly running. We can have it
 delete the timer object later if neccessary.
 
 */
function checkTimer(name) {
    timer = loadJson("" + name);
    console.log("TIMER RESULT: " + (Date.now() - timer.start) / 1000);
    if ((Date.now() - timer.start) / 1000 >= timer.end) {
        return true;
    } else {
        return false;
    }
}

//	these functions are just to test the timer functions above on using my test page on /JS/test.html
function testBeginTimer() {
    beginTimer(document.getElementById("timeInput").value, document.getElementById("nameInput").value);
}

function testCheckTimer() {
    document.getElementById("timerOutput").innerHTML = checkTimer(document.getElementById("checkNameInput").value);

}