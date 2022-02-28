#include <iostream>
#include <cmath>

int main()
{
   double weight{7.7};

   // Floor
   std::cout << "Weight rounded to floor is : " << std::floor(weight) << std::endl;
   
   // Ceil
   std::cout << "Weight rounded to ceil is : " << std::ceil(weight) << std::endl;

   return 0;
}