#include <iostream>

int main()
{
   //Declaring pointers
   int * p_number {}; // can only store an address of a variable of type int
   double * p_fractional_number{}; // can only store an address of a variable of type double

   //Explicitely initialize to nullptr
   int * p_number1 {nullptr};
   int * p_fractional_number1 {nullptr};

   //All pointers have the same size, due the reson of storage addresses.

   return 0;
}

//------------------------------------------------------------------------------------------

#include <iostream>

int main()
{
   //Initializing pointers and assigning then data

   //We know that pointers store addresses of variables
   int int_var {43};
   int *p_int{&int_var}; // The address of operator (&)

   std::cout << "Int_var : " << int_var << std::endl;
   std::cout << "p_int (address in memory) : " << p_int << std::endl;

   //You can also change the address stored in a pointer any time
   int int_var1 {65};

   int_var1 = 126;

   p_int = &int_var1;

   std::cout << "p_int (with different address) : " << p_int << std::endl;

   return 0;
}

//---------------------------------------------------------------------------------------------

#include <iostream>

int main()
{
   //It doesn't matter where you put the " * "
   int*  p_number2{nullptr};
   int * p_number3{nullptr};
   int  *p_number4{nullptr};

   return 0;
}

//------------------------------------------------------------------------------------------------

int main()
{
   //Dereferencing a pointer :
   int* p_int2 {nullptr};
   int int_data {56};
   p_int2 = &int_data;

   std::cout << "value : " << *p_int2 << std::endl;

   return 0;
}