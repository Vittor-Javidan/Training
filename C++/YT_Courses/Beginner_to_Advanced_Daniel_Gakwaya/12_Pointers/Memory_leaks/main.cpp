#include <iostream>

//Memory leaks ocurs when we loose access to memory that is dynamically allocated

int main()
{
   int *p_number {new int{67}}; // Points to some address, let's call that address1

   // Should delete and reset p_number here

   int number{55}; // lives at address 2

   p_number = &number;  // Now p_number points to address2, but address1 is still in use by our program;
   // But our program has lost access to that memory location.
   // Memory has been leaked

   return 0;
}

//---------------------------------------------------------------------------------------------------

#include <iostream>

int main()
{
   // Double allocation
   int *p_number1 {new int{55}};

   //use the pointer
   //you should delete and reset here

   p_number1 = new int{44}; // memory with int{55} leaked
   delete p_number1; p_number1 = nullptr;

   return 0;
}

//----------------------------------------------------------------------------------------------------

#include <iostream>

int main()
{
   // Nested scopes with dymacally allocated memory
   {
      int *p_number {new int{57}};

      //use the dicamic memory

      //you should delete the pointer here, before the program goes out this scope
   }
   //memory with int{57} leaked

   return 0;
}