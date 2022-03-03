#ifndef CYLINDER_H
#define CYLINDER_H

#include "constants.h"

class Cylinder
{
   double base_radius{};
   double height{};

public:

   Cylinder() = default;
   Cylinder(double base_radius_param, double height_param)
   {
      base_radius = base_radius_param;
      height = height_param;
   };

   double volume()
   {
      return PI * base_radius * height;
   };

   // Setters
   void set_base_radius(double base_radius_param)
   {
      base_radius = base_radius_param;
   };
   void set_height(double height_param)
   {
      height = height_param;
   };

   // getters
   double get_base_radius()
   {
      return base_radius;
   };
   double get_height()
   {
      return height;
   };

   double volume();
};

#endif