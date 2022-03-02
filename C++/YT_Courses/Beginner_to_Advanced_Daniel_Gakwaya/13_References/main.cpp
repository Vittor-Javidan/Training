#include <iostream>

//References can be consider a kind of const pointer, because you can'y change it to reference something else
int main()
{
   int int_data{33};
   double double_data{55};

   //References
   int& ref_int_data{int_data};
   double& ref_double_data{double_data};

   std::cout << "======================================" << std::endl;

   std::cout << "int_data : " << int_data << std::endl;
   std::cout << "&int_data : " << &int_data << std::endl;
   std::cout << "double_data : " << double_data << std::endl;
   std::cout << "&double_data : " << &double_data << std::endl;

   std::cout << "======================================" << std::endl;

   std::cout << "ref_int_data : " << ref_int_data << std::endl;
   std::cout << "&ref_int_data : " << &ref_int_data << std::endl;
   std::cout << "ref_double_data : " << ref_double_data << std::endl;
   std::cout << "&ref_double_data : " << &ref_double_data << std::endl;

   std::cout << "======================================" << std::endl;

   return 0;
}