#include <iostream>

int main()
{
   int number1 {2};
   int number2 {1};
   int diff {number1 - number2};
   int other_diff = number1 - number2 - number2;

   std::cout << "The difference is: " << diff << std::endl;
   std::cout << "Other diff is: " << other_diff << std::endl;

   return 0;
}