#include <iostream>

int main()
{
   int number1{55};
   int number2{60};

   bool result = (number1 < number2); // Expression yielding the condition
   std::cout << std::boolalpha << "Result : " << result << std::endl;

   std::cout << std::endl;
   std::cout << "Free standing if statement" << std::endl;

   if(result){
      std::cout << number1 << " is less than " << number2 << std::endl;
   } else {
      std::cout << number1 << " is NOT less than " << number2 << std::endl;
   }

   return 0;
}