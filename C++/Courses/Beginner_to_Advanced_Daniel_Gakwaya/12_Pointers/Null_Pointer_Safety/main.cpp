#include <iostream>
int main()
{
   int *p_number {new int{10}};

   if(p_number != nullptr){
      std::cout << "p_number points to a VALID address : " << p_number << std::endl;
   } else {
      std::cout << "p_number points to an INVALID address : " << std::endl;
   }

   delete p_number; p_number = nullptr;

   return 0;
}