#include <iostream>

int main()
{
   const unsigned int COUNT {10};
   unsigned int i = {0};

   while( i < COUNT){
      std::cout << " I love c++ " << i << std::endl;
      i++;
   }
   
   return 0;
}