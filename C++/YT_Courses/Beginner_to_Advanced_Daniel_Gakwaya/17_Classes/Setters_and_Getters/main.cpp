#include <iostream>

class Cylinder{
   //By default, if you don't specifie "public", variables and methods will be private
   double base_radius{};
   double height{};

   public:

      Cylinder() = default;
      Cylinder(double base_radius_param, double height_param){
         base_radius = base_radius_param;
         height = height_param;
      }

      //Setters
      void set_base_radius(double base_radius_param){
         base_radius = base_radius_param;
      }
      void set_height(double height_param){
         height = height_param;
      }

      //getters
      double get_base_radius(){
         return base_radius;
      }
      double get_height(){
         return height;
      }
   //
};

int main()
{
   std::cout << std::endl;

   Cylinder cylinder1;
   std::cout << "Cylinder 1 ===========================" << std::endl;
   std::cout << "Base radius : " << cylinder1.get_base_radius() << std::endl;
   std::cout << "Height : " << cylinder1.get_height() <<std::endl;

   std::cout << std::endl;

   Cylinder cylinder2;
   cylinder2.set_base_radius(10);
   cylinder2.set_height(2);
   std::cout << "Cylinder 2 ===========================" << std::endl;
   std::cout << "Base radius : " << cylinder2.get_base_radius() << std::endl;
   std::cout << "Height : " << cylinder2.get_height() <<std::endl;

   std::cout << std::endl;

   return 0;
}