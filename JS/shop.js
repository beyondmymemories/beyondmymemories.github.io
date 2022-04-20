/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 
 *General Shop:
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
-Perhaps an item/armor to make idle more rewarding(probably once): N/A
 *
 *
 **/


function errorOff(){
    document.getElementById("error").style.display="none";
}

function errorOn(){
    document.getElementById("error").style.display="block";
}

function buttonOff(){
    document.getElementById("enter").style.display="none";
}

function buttonOn(){
    document.getElementById("item1").style.display="block";
    document.getElementById("item2").style.display="block";
    document.getElementById("item3").style.display="block";
    document.getElementById("item4").style.display="block";
}

function buttonWait(){
    document.getElementById("item1").style.display="none";
    document.getElementById("item2").style.display="none";
    document.getElementById("item3").style.display="none";
    document.getElementById("item4").style.display="none";
}

function buy(product){
     
  // document.write("test");
     
    if(product === 'item1'){
       if(loadVar(playerGold) >= 150){
        errorOff();   
        saveVar(playerGold, (loadVar(playerGold) - 150));
       }
       else {
           document.getElementById("error").innerHTML =  "Not enough gold";
           errorOn();
       }
   
       document.getElementById("counter").innerHTML =  "Current Gold:" + loadVar(playerGold);
    }
 
     if(product === 'item2'){
  
       if(loadVar(playerGold) >= 1){
           errorOff();
        saveVar(playerGold, loadVar(playerGold) - 1);
        document.getElementById("counter").innerHTML =  "Current Gold:" + loadVar(playerGold);
        }
        else {
            document.getElementById("error").innerHTML =  "Not enough gold";
            errorOn();
        }
        document.getElementById("counter").innerHTML =  "Current Gold:" + loadVar(playerGold);
    } 
       if(product === 'item3'){
  
       if(loadVar(playerGold) >= 75){
           errorOff();
        saveVar(playerGold, loadVar(playerGold) - 75);
        document.getElementById("counter").innerHTML =  "Current Gold:" + loadVar(playerGold);
        }
        else {
            document.getElementById("error").innerHTML =  "Not enough gold";
            errorOn();
        }
        document.getElementById("counter").innerHTML =  "Current Gold:" + loadVar(playerGold);
    }
        
        if(product === 'item4'){
  
       if(loadVar(playerGold) >= 35){
           errorOff();
        saveVar(playerGold, loadVar(playerGold) - 35);
        document.getElementById("counter").innerHTML =  "Current Gold:" + loadVar(playerGold);
        }
        else {
            document.getElementById("error").innerHTML =  "Not enough gold";
            errorOn();
        }
        document.getElementById("counter").innerHTML =  "Current Gold:" + loadVar(playerGold);
    }        
     
           
    
}

function goldAmount(){
      if(loadVar(playerGold) === null){
                         saveVar(playerGold, 1000);
      }
                     
                     document.getElementById("counter").innerHTML = "Current Gold:" + loadVar(playerGold);
              
                     
                      var item1 = document.getElementById("item1");
                      var item2 = document.getElementById("item2");
                      var item1 = document.getElementById("item3");
                      var item2 = document.getElementById("item4");
    
}






