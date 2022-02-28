#include <iostream>

int main()
{
   int max{};

   int a {35};
   int b {20};

   max = (a > b) ? a : b ;

   std::cout << "max : " << max << std::endl;

   return 0;
}