#include <iostream>
#include "cylinder.h"

int main()
{
   Cylinder cylinder;
   cylinder.set_base_radius(10);
   cylinder.set_height(4);
   std::cout << "Volume : " << cylinder.volume() << std::endl;
   std::cout << "Base radius : " << cylinder.get_base_radius() << std::endl;
   std::cout << "Height : " << cylinder.get_height() << std::endl;

   return 0;
}