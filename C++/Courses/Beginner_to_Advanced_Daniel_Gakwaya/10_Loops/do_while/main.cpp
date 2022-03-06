#include <iostream>

int main()
{
   const unsigned int COUNT {10};
   unsigned int i = {0};

   do{
      std::cout << " I love c++ " << i << std::endl;
      i++;
   } while (i < COUNT);
   
   return 0;
}