/* 
 General Shop:
 -Health Potion (multiple): 150 gold
 -Return Stone (Teleports player back to shop)(multiple): 1 gold
 -Night's rest (long rest)(multiple): 75 gold
 -Cat nap (short rest)(multiple): 35 gold
 
 Barbarian Shop:
 -Greataxe(multiple): 500 gold
 -Chainmail(multiple): 650 gold
 
 Wizard Shop:
 -New spell (Mage armor)(once): 650 gold
 -Ring of Fire (increase fire damage)(once): 450 gold
 
 Rogue Shop:
 -Stronger dagger(s)(multiple): 550 gold
 -Boots of stealth (increase stealth for combat)(once): 500 gold
 
 Bard Shop:
 -Greater Rapier (increase roll/damage perhaps)(multiple): 550 gold
 -New Spell (Cure Wounds)(once): 700 gold
 
 Dog Shop (if they have dog):
 -Name change(multiple): 100 gold
 -Doggy treats (for fun :P)(multiple): 1 gold
 **/


var shopItems = new Object();

// Holds the shop inventory.
var shopItems = {
    item7: 1,
    item8: 1,
    item10: 1,
    item12: 1
};


var playerItems = new Object();

// Holds the players items.
var playerItems = {
    item1: 0,
    item2: 0,
    item3: 0,
    item4: 0,
    item5: 0,
    item6: 0,
    item7: 0,
    item8: 0,
    item9: 0,
    item10: 0,
    item11: 0,
    item12: 0
};


function showShop() {
    buttonWait();
    document.getElementById("container3").style.display = "none";
    document.getElementById("container6").style.display = "inline-block";
}

function hideShop() {

    document.getElementById("container3").style.display = "inline-block";
    document.getElementById("container6").style.display = "none";

    printChatNode('//1.2.0//', true);
}

//Get and set functions for playerItems and shopItems. Used for accessing variables outside script. (Save System)
function getPlayerItems() {
    return playerItems;
}
function setPlayerItems(playerItemsIn) {
    playerItems = playerItemsIn;
}

function getShopItems() {
    return shopItems;
}
function setShopItems(shopItemsIn) {
    shopItems = shopItemsIn;
}


// Turns off the error display.
function errorOff() {
    document.getElementById("error").style.display = "none";
}

// Turns on the error display.
function errorOn() {
    document.getElementById("error").style.display = "block";
}

// Turns off the enter button.
function buttonOff() {
    document.getElementById("enter").style.display = "none";
}

// This fucntion causes the shop buttons to appear once the user enters the store.
function buttonOn() {
    document.getElementById("item1").style.display = "block";
    document.getElementById("item2").style.display = "block";
    document.getElementById("item3").style.display = "block";
    document.getElementById("item4").style.display = "block";
    document.getElementById("item5").style.display = "block";
    document.getElementById("item6").style.display = "block";
    document.getElementById("item7").style.display = "block";
    document.getElementById("item8").style.display = "block";
    document.getElementById("item9").style.display = "block";
    document.getElementById("item10").style.display = "block";
    document.getElementById("item11").style.display = "block";
    document.getElementById("item12").style.display = "block";
    document.getElementById("item13").style.display = "block";
}

// This fucntion causes the shop buttons to wait for the user to enter the store.
function buttonWait() {

    document.getElementById("enter").style.display = "inline-block";
    document.getElementById("item1").style.display = "none";
    document.getElementById("item2").style.display = "none";
    document.getElementById("item3").style.display = "none";
    document.getElementById("item4").style.display = "none";
    document.getElementById("item5").style.display = "none";
    document.getElementById("item6").style.display = "none";
    document.getElementById("item7").style.display = "none";
    document.getElementById("item8").style.display = "none";
    document.getElementById("item9").style.display = "none";
    document.getElementById("item10").style.display = "none";
    document.getElementById("item11").style.display = "none";
    document.getElementById("item12").style.display = "none";
    document.getElementById("item13").style.display = "none";
}

// This function is used to buy items for the user. It also checks the stock of the store and the player inventory.
function buy(product) {

    if (product === 'item1') {

        if (loadVar(playerGold) >= 150) {
            errorOff();
            saveVar(playerGold, loadVar(playerGold) - 150);
            document.getElementById("counter").innerHTML = "Current Gold:" + loadVar(playerGold);
            playerItems.item1 = playerItems.item1 + 1;
        } else {
            document.getElementById("error").innerHTML = "Not enough gold";
            errorOn();
        }
        document.getElementById("counter").innerHTML = "Current Gold:" + loadVar(playerGold);
    }

    if (product === 'item2') {

        if (loadVar(playerGold) >= 1) {
            errorOff();
            saveVar(playerGold, loadVar(playerGold) - 1);
            document.getElementById("counter").innerHTML = "Current Gold:" + loadVar(playerGold);
            playerItems.item2 = playerItems.item2 + 1;
        } else {
            document.getElementById("error").innerHTML = "Not enough gold";
            errorOn();
        }
        document.getElementById("counter").innerHTML = "Current Gold:" + loadVar(playerGold);
    }

    if (product === 'item3') {

        if (loadVar(playerGold) >= 75) {
            errorOff();
            saveVar(playerGold, loadVar(playerGold) - 75);
            document.getElementById("counter").innerHTML = "Current Gold:" + loadVar(playerGold);
            playerItems.item3 = playerItems.item3 + 1;
        } else {
            document.getElementById("error").innerHTML = "Not enough gold";
            errorOn();
        }
        document.getElementById("counter").innerHTML = "Current Gold:" + loadVar(playerGold);
    }

    if (product === 'item4') {

        if (loadVar(playerGold) >= 35) {
            errorOff();
            saveVar(playerGold, loadVar(playerGold) - 35);
            document.getElementById("counter").innerHTML = "Current Gold:" + loadVar(playerGold);
            playerItems.item4 = playerItems.item4 + 1;
        } else {
            document.getElementById("error").innerHTML = "Not enough gold";
            errorOn();
        }
        document.getElementById("counter").innerHTML = "Current Gold:" + loadVar(playerGold);
    }

    if (product === 'item5') {

        if (loadVar(playerGold) >= 500) {
            errorOff();
            saveVar(playerGold, loadVar(playerGold) - 500);
            document.getElementById("counter").innerHTML = "Current Gold:" + loadVar(playerGold);
            playerItems.item5 = playerItems.item5 + 1;
        } else {
            document.getElementById("error").innerHTML = "Not enough gold";
            errorOn();
        }
        document.getElementById("counter").innerHTML = "Current Gold:" + loadVar(playerGold);
    }

    if (product === 'item6') {

        if (loadVar(playerGold) >= 650) {
            errorOff();
            saveVar(playerGold, loadVar(playerGold) - 650);
            document.getElementById("counter").innerHTML = "Current Gold:" + loadVar(playerGold);
            playerItems.item6 = playerItems.item6 + 1;
        } else {
            document.getElementById("error").innerHTML = "Not enough gold";
            errorOn();
        }
        document.getElementById("counter").innerHTML = "Current Gold:" + loadVar(playerGold);
    }

    if (product === 'item7') {

        if (loadVar(playerGold) >= 650) {
            errorOff();

            if (shopItems.item7 > 0) {
                saveVar(playerGold, (loadVar(playerGold) - 650));
                shopItems.item7 = shopItems.item7 - 1;
                playerItems.item7 = playerItems.item7 + 1;
            } else {
                document.getElementById("error").innerHTML = "Out of stock";
                errorOn();
            }
        } else {
            document.getElementById("error").innerHTML = "Not enough gold";
            errorOn();
        }
        document.getElementById("counter").innerHTML = "Current Gold:" + loadVar(playerGold);
    }

    if (product === 'item8') {

        if (loadVar(playerGold) >= 450) {
            errorOff();

            if (shopItems.item8 > 0) {
                saveVar(playerGold, (loadVar(playerGold) - 450));
                shopItems.item8 = shopItems.item8 - 1;
                playerItems.item8 = playerItems.item8 + 1;
            } else {
                document.getElementById("error").innerHTML = "Out of stock";
                errorOn();
            }
        } else {
            document.getElementById("error").innerHTML = "Not enough gold";
            errorOn();
        }
        document.getElementById("counter").innerHTML = "Current Gold:" + loadVar(playerGold);
    }

    if (product === 'item9') {

        if (loadVar(playerGold) >= 550) {
            errorOff();
            saveVar(playerGold, loadVar(playerGold) - 550);
            document.getElementById("counter").innerHTML = "Current Gold:" + loadVar(playerGold);
            playerItems.item9 = playerItems.item9 + 1;
        } else {
            document.getElementById("error").innerHTML = "Not enough gold";
            errorOn();
        }
        document.getElementById("counter").innerHTML = "Current Gold:" + loadVar(playerGold);
    }

    if (product === 'item10') {

        if (loadVar(playerGold) >= 500) {
            errorOff();

            if (shopItems.item10 > 0) {
                saveVar(playerGold, (loadVar(playerGold) - 500));
                shopItems.item10 = shopItems.item10 - 1;
                playerItems.item10 = playerItems.item10 + 1;
            } else {
                document.getElementById("error").innerHTML = "Out of stock";
                errorOn();
            }
        } else {
            document.getElementById("error").innerHTML = "Not enough gold";
            errorOn();
        }
        document.getElementById("counter").innerHTML = "Current Gold:" + loadVar(playerGold);
    }

    if (product === 'item11') {

        if (loadVar(playerGold) >= 550) {
            errorOff();
            saveVar(playerGold, loadVar(playerGold) - 550);
            document.getElementById("counter").innerHTML = "Current Gold:" + loadVar(playerGold);
            playerItems.item11 = playerItems.item11 + 1;
        } else {
            document.getElementById("error").innerHTML = "Not enough gold";
            errorOn();
        }
        document.getElementById("counter").innerHTML = "Current Gold:" + loadVar(playerGold);
    }

    if (product === 'item12') {
        if (loadVar(playerGold) >= 700) {
            errorOff();

            if (shopItems.item12 > 0) {
                saveVar(playerGold, (loadVar(playerGold) - 700));
                shopItems.item12 = shopItems.item12 - 1;
                playerItems.item12 = playerItems.item12 + 1;
            } else {
                document.getElementById("error").innerHTML = "Out of stock";
                errorOn();
            }
        } else {
            document.getElementById("error").innerHTML = "Not enough gold";
            errorOn();
        }
        document.getElementById("counter").innerHTML = "Current Gold:" + loadVar(playerGold);
    }

    if (product === 'item13') {

        if (loadVar(playerGold) >= 1) {
            errorOff();
            saveVar(playerGold, loadVar(playerGold) - 1);
            document.getElementById("counter").innerHTML = "Current Gold:" + loadVar(playerGold);
            document.getElementById("error").innerHTML = "Your Dogo looks happy as he munches on his treat!";
            errorOn();
        } else {
            document.getElementById("error").innerHTML = "Not enough gold";
            errorOn();
        }
        document.getElementById("counter").innerHTML = "Current Gold:" + loadVar(playerGold);
    }
}

//This function is used to display the amount of gold the user currently has.
function goldAmount() {
    if (loadVar(playerGold) === null) {
        saveVar(playerGold, 0);
    }
    document.getElementById("counter").innerHTML = "Current Gold:" + loadVar(playerGold);

    var item1 = document.getElementById("item1");
    var item2 = document.getElementById("item2");
    var item3 = document.getElementById("item3");
    var item4 = document.getElementById("item4");
    var item5 = document.getElementById("item5");
    var item6 = document.getElementById("item6");
    var item7 = document.getElementById("item7");
    var item8 = document.getElementById("item8");
    var item9 = document.getElementById("item9");
    var item10 = document.getElementById("item10");
    var item11 = document.getElementById("item11");
    var item12 = document.getElementById("item12");
    var item13 = document.getElementById("item13");
}
