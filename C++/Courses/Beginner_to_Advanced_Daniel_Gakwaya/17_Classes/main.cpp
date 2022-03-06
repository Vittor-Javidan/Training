#include <iostream>

const double PI = 3.1415926535897932384626433832795;

class Cylinder{
   //By default, if you don't specifie "public", variables and methods will be private
   double base_radius;
   double height;

   public:

      //Default constructor in case you don't pass arguments
      Cylinder(){             
         base_radius = 2.0;
         height = 2.0;
      }

      //Constructor
      Cylinder(double base_radius_param, double height_param){
         base_radius = base_radius_param;
         height = height_param;
      }

      //Methods
      double volume()
      {
         return PI * base_radius * base_radius * height;
      }
   
};

int main()
{
   Cylinder cylinder1; //Object 1 declaration
   std::cout
      << "base volume : "
      << cylinder1.volume()
   << std::endl;

   Cylinder cylinder2(10, 4); //Object 2 declaration
   std::cout
      << "base volume : "
      << cylinder2.volume()
   << std::endl;

   return 0;
}