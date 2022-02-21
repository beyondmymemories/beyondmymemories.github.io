/* Beyond my memories Screen
   Name: beyond_my_memories_screen.php
   Author: Alayna
   Last Date edited: 2/21/2022
   Purpose: defines the loading screen for beyond my memories.

*/

function beyond_my_memories_screen($saveExists) {
	

echo "<!DOCTYPE html>\n";
echo "<HTML><body>\n";

   echo "<h1><center>Beyond My Memories</center></h1>";

   echo "<center>\n";
   if ($saveExists)
      echo "<p>Continue Button</p>\n";
   else 
      echo "<p>Start Button</p>\n";
   echo "</center>\n";



echo "</body></HTML>\n";

} //end of function
