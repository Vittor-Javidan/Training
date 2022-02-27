#include <iostream>

int main()
{

   int number1{2};
   int number2{7};

   // Addition
   double result = number1 + number2;
   std::cout << "Result: " << result << std::endl;

   // Subtraction
   result = number2 - number1;
   std::cout << "result: " << result << std::endl;

   result = number2 - number1;
   std::cout << "result: " << result << std::endl;

   // Multiplication
   result = number1 * number2;
   std::cout << "result: " << result << std::endl;

   // Division
   result = number2 / number1;
   std::cout << "result: " << result << std::endl;

   // Modulus
   result = number2 % number1;
   std::cout << "result: " << result << std::endl;

   result = 31 % 10;
   std::cout << "result: " << result << std::endl;

   return 0;
}