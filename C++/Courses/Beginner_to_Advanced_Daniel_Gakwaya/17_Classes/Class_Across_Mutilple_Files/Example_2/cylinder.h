#ifndef CYLINDER_H
#define CYLINDER_H

#include "constants.h"

class Cylinder
{
   double base_radius{};
   double height{};

public:
   Cylinder() = default;
   Cylinder(double base_radius_param, double height_param);

   // Setters
   void set_base_radius(double base_radius_param);
   void set_height(double height_param);

   // getters
   double get_base_radius();
   double get_height();

   double volume();
};

#endif