#include <iostream>

int main()
{
   short int var1 {10};
   short int var2 {20};

   char var3 {40};
   char var4 {50};

   std::cout << "size of var1 : " << sizeof(var1) << "      value : " << var1 << std::endl;
   std::cout << "size of var2 : " << sizeof(var2) << "      value : " << var2 << std::endl;
   std::cout << "size of var3 : " << sizeof(var3) << "      value : " << var3 << std::endl;
   std::cout << "size of var4 : " << sizeof(var4) << "      value : " << var4 << std::endl;

   auto result1 = var1 + var2; // var 1 and var 2 will be converted from short int to int
   auto result2 = var3 + var4; // var 3 and var 4 will be converted from char to int

   std::cout << "size of result1 : " << sizeof(result1) << "      result1 : " << result1 << std::endl; //4
   std::cout << "size of result2 : " << sizeof(result2) << "      result2 : " << result2 << std::endl; //4

   return 0;
}