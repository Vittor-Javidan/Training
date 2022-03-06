/*WARNING

   PROBLEM 1:

   Becarefull when you declare pointers. You NEED to initialize then, for example:

      Good practice:          " int *number1 {}; "   OR   " int *number1{nullprt}; "

      Bad practice:           " int *number2; "

   When you declare a pointer without initialize, the pointer can refers to a address that is being using 
   already by others programs in your computer. Manipulating those address not initialized can cause crashs 
   or corrupt files.

   The hability of c++ to grab junk data is something that you always must have in mind


   PROBLEM 2:

   Other thing to be aware, is, don't try to writting a pointer where is pointing to nowhere or
   writting a pinter equivalent to nullprt.

   Examples:

      int *p_number;            int *p_number{}; 
      *p_number = 33;    OR     *p_number = 33;

*/

//----------------------------------------------------------------------------------------------------------

#include <iostream>

int main()
{
   //Allocate dynamic memory thorugh  'new'

   //Initialize the pointer with dynamic memory. Dynamically allocate
   //memory at run time and make a pointer point to it

   int *p_number{nullptr};
   p_number = new int;        // Dynamically allocate space for a single int on the heap
      
      /*
         This memory belongs to out program from now on. The system can't use it for anything else, 
         until we return it. After this line executes, we will have a valid memory location allocated. 
         The size of the allocated memory will be such that it can store the type pointed to by the pointer
      */

   *p_number = 77; //Writting into dynamically allocated memmory

   std::cout << std::endl;
   std::cout << "Dynamically allocating memmory : " << std::endl;
   std::cout << "p_number : " << *p_number << std::endl;
   std::cout << "p_number address : " << p_number << std::endl;

   return 0;
}

//------------------------------------------------------------------------------------------------------------

#include <iostream>

int main()
{
   // Releasing and Resetting
   int *p_number {nullptr};
   p_number = new int;

   /*
      Code Block ...
   */

  delete p_number; // At this moment, the memory is returned to the system
  p_number = nullptr; // this statement tell people that you don't have any valid data store in that address
}

//--------------------------------------------------------------------------------------------------------------

#include <iostream>

//Initialize with 'new' upon pointer declaration
int main()
{
   // It is also possible to initialize the pointer with a valid
   // address up on declaration. Not with a nullptr
   int *p_number1 {new int};      //Memory location contains junk value
   int *p_number2 {new int (22)};  //Use direct initialization
   int *p_number3 {new int {23}};  //Use uniform initialization

   std::cout << std::endl;
   std::cout << "Initialize with valid memmory address at declaration : " << std::endl;

   std::cout << "p_number 1 address: " << p_number1 << std::endl;
   std::cout << "p_number 1 : " << *p_number1 << "    junk data" << std::endl;

   std::cout << "p_number 2 address: " << p_number2 << std::endl;
   std::cout << "p_number 2 : " << *p_number2 << std::endl;

   std::cout << "p_number 3 address: " << p_number3 << std::endl;
   std::cout << "p_number 3 : " << *p_number3 << std::endl;

   //Remember to release the memmory
   delete p_number1; p_number1 = nullptr;
   delete p_number2; p_number2 = nullptr;
   delete p_number3; p_number3 = nullptr;

   /* WARNING:
      Carefull to not delete the same pointer twice, that can lead to crash or anything else;
   */

   return 0;
}