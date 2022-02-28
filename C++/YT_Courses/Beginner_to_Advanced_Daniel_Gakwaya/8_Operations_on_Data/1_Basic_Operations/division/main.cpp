#include <iostream>

int main()
{
   //Integer Division
   int number1 {10};
   int number2 {2};

   int quotient {number1/number2};
   int other_quotient = number1 / 17;

   std::cout << "The quotient is: " << quotient << std::endl;
   std::cout << "Other quotient is: " << other_quotient << std::endl;

   return 0;
}

//-----------------------------------------------------------------------------------

#include <iostream>

int main()
{
   //Double Division
   double number1 {10};
   double number2 {2};

   double quotient {number1/number2};
   double other_quotient = number1 / 17;

   std::cout << "The quotient is: " << quotient << std::endl;
   std::cout << "Other quotient is: " << other_quotient << std::endl;

   return 0;
}