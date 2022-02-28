#include <iostream>
#include <cmath>

int main()
{
   //Round. Halfway points are rounded away from 0. 2,5 is rounded to 3 for example
   std::cout << "3.654 rounded to: " << std::round(3.654) << std::endl;
   std::cout << "2.5 is rounded to: " << std::round(2.5) << std::endl;
   std::cout << "2.4 is rounded to: " << std::round(2.4) << std::endl;

   return 0;
}