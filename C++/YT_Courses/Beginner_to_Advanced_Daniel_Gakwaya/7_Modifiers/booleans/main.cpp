#include <iostream>

int main()
{
   bool red_light{true};
   bool green_light{false};

   if (red_light == true){
      std::cout << "Stop!" << std::endl;
   } else {
      std::cout << "Go through" << std::endl;
   }

   if (green_light) {
      std::cout << "The light is green!" << std::endl;
   } else {
      std::cout << "The lith is Not green!" << std::endl;
   }

   std::cout << "sizeof red_light " << sizeof(red_light) << std::endl;
      std::cout << "sizeof green_light " << sizeof(red_light) << std::endl;

   return 0;
}

//----------------------------------------------------------------------------------------

#include <iostream>

int main(){

   bool red_light {true};
   bool green_light {false};

   if(red_light == true){
      std::cout << "Stop" << std::endl;
   } else {
      std::cout << "Go through!" << std::endl;
   }

   if(green_light){
      std::cout << "The light is green!" << std::endl;
   } else {
      std::cout << "The light is NOT green!" << std::endl;
   }

   std::cout << std::endl;
   std::cout << "red_light: " << red_light << std::endl;
   std::cout << "green_light: " << green_light << std::endl;

   std::cout << std::boolalpha;
   std::cout << "red_light: " << red_light << std::endl;
   std::cout << "green_light: " << green_light << std::endl;

   return 0;
}