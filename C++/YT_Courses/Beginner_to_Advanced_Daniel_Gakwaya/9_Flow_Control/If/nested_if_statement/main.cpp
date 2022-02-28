#include <iostream>

int main()
{
   bool red = false;
   bool green {true};
   bool yellow {false};
   bool  police_stop{true};

   if(red){
      std::cout << "stop" << std::endl;
   } else if (yellow) {
      std::cout << "Slow down" << std::endl;
   } else {
      if(green && police_stop){
         std::cout << "Stop!, police!!" << std::endl;
      } else {
         std::cout << "Go" << std::endl;
      }
   }

   return 0;
}