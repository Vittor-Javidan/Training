#include <iostream>

int main()
{
   char *p_char_var {nullptr};

   char char_var {'A'};
   p_char_var = &char_var;

   std::cout << "The value stored in p_char_var is: " << *p_char_var << std::endl;

   char char_var1 {'C'};
   p_char_var = &char_var1;

   std::cout << "The value stored in p_char_var is: " << *p_char_var << std::endl;

   return 0;
}

//--------------------------------------------------------------------------------------

#include <iostream>

int main()
{
   /* WARNING:
      If you try to declare the pointer like "char *p_message {"Hello there"}", the string will be consider a constant.
   */
   char *p_message {};
   char message[] {"Hello there"};
   p_message = message;

   //Printing out
   //What do we aget when we print this out with std::cout
   std::cout << "The message is : " << p_message << std::endl;

   //What do we get when we dereference the pointer
   std::cout << "The value stored at p_message is : " << *p_message << std::endl;

   //If you think about that case, having a pointer or not, don't make too much diference, since a array its the addreess itself
   //declare a pointer feels like wasting memory in this case.

   return 0;
}