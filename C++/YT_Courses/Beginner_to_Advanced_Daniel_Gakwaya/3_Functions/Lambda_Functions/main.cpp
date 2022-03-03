
#include <iostream>

int main(){

   /* Signature:

      [capture list](parameters) -> return type {
         Function body
      }

   */

   //Example 1
   auto result1 = [](double a, double b) -> double {
      return (a > b ? a : b);
   }(40.0, 30.0);

   //Example 2
   auto func2 = [](double a, double b) -> double {
      return (a > b ? a : b);
   };
   double result2 = func2(30.0, 20.0);

   //Example 3
   auto func3 = [](double a, double b){
      return (a > b ? a : b);
   };
   double result3 = func3(50.0, 70.0);

   //Example 4
   [](std::string my_Text){
      std::cout << "====================================" << std::endl;
      std::cout << my_Text << std::endl;
   }("Hello World");

   std::cout << "====================================" << std::endl;

   std::cout << "result 1 : " << result1 << std::endl;
   std::cout << "result 2 : " << result2 << std::endl;
   std::cout << "result 3 : " << result3 << std::endl;

   std::cout << "====================================" << std::endl;

   return 0;
}