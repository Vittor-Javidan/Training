#include <iostream>
#include <string>

int main()
{
   std::string str("Test string");

   std::cout << "=================================================" << std::endl;

   for (int i = 0; i < str.length(); ++i)
   {
      std::cout << str[i]
                << "       address : "
                << ((void *)&str[i])   // To get each character address, you need to cast to "(void*)" first
                << "       "
                << &str[i]             // Without "(void*)", you gonna get a segment of the string starting at index i
                << std::endl;
   }

   std::cout << "=================================================" << std::endl;

   return 0;
}