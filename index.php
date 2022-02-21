/* Index.php
   Created: 2/21/2022
   Authors: Alayna, Miguel, Isaac, Meagan, Anissa
   Purpose: This file specifies the different CSS file scripts,
   			the require file and other information that starts the game.

   		 	As of the moment, this function will not be called again.
   		 	May be called when someone closes and reopens this website.
*/

require_once('Functions/require.php');

//Idle and save information
$saveExists = FALSE;


//Main UI call - creation
beyond_my_memories_screen($saveExists);

