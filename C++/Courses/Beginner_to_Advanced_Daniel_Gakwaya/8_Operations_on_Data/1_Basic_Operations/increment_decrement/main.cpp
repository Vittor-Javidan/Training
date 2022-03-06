#include <iostream>

int main()
{
   int value {5};

   //Increment by one
   value = value + 1;
   std::cout << "Value is: " << value << std::endl;

   value = 5;

   //Decrement by one
   value = value + 1;
   std::cout << "The value is: " << value << std::endl;

   return 0;
}

//----------------------------------------------------------------------

#include <iostream>

//Postfix Increment/Decrement
int main()
{
   int value {5};

   //Increment by one
   std::cout << "Value incremented is: " << value++ << std::endl; //5
   std::cout << "Value is: " << value << std::endl; //6

   value = 5;

   //Decrement by one
   std::cout << "Value decremented is: " << value-- << std::endl; //5
   std::cout << "The value is: " << value << std::endl; //4

   return 0;
}

//----------------------------------------------------------------------

#include <iostream>

//Prefix Increment/Decrement
int main()
{
   int value {5};

   //Increment by one
   ++value;
   std::cout << "Value is (prefix++): " << value << std::endl; //6

   value = 5;
   std::cout << "Value is (prefix++ in place): " << ++value << std::endl; //6
   std::cout << std::endl;

   //------------------------

   value = 5;

   //Decrement by one
   --value;
   std::cout << "Value is (prefix--): " << value << std::endl; //4

   value = 5;
   std::cout << "Value is (prefix-- in place): " << --value << std::endl; //4

   return 0;
}