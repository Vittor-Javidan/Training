#include <iostream>

int main(){

   short short_var{-32768}; // 2 bytes
   short int short_int{455}; //
   signed short signed_short{122}; //s
   signed short int signed_short_int{-456}; //
   unsigned short int unsigned_short_int {456};

   int int_var {55}; // 4 bytes
   signed signed_var {66}; 
   signed int signed_int {77}; 
   unsigned int unsigned_int {77};

   long long_var {88}; // 4 OR 8 bytes
   long int long_int {33};
   signed long signed_long {44};
   signed long int signed_long_int {44};
   unsigned long int unsigned_long_int {44};

   long long long_long {888}; //8 bytes
   long long int long_long_int{999};
   signed long long signed_long_long {4444};
   signed long long int signed_long_long_int {1234};
   unsigned long long int unsigned_long_long_int {1234};

   return 0;
}

//----------------------------------------------------------------------------

#include <iostream>

int main()
{
   //signed meas you can put negative numbers as well
   signed int value1{10};
   signed int value2{-300};

   std::cout << "Value1: " << value1 << std::endl;
   std::cout << "Value1: " << value2 << std::endl;
   std::cout << "sizeof: " << sizeof(value1) << std::endl;
   std::cout << "sizeof: " << sizeof(value2) << std::endl;

   unsigned int value3{4};

   std::cout << "value3: " << value3 << std::endl;
   std::cout << "sizeof: " << sizeof(value3) << std::endl;

   return 0;
}