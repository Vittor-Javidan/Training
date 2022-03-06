#ifndef CYLINDER_CPP
#define CYLINDER_CPP

#include "cylinder.h"

Cylinder::Cylinder(double base_radius_param, double height_param)
{
   base_radius = base_radius_param;
   height = height_param;
};

void Cylinder::set_base_radius(double base_radius_param)
{
   base_radius = base_radius_param;
};

void Cylinder::set_height(double height_param)
{
   height = height_param;
};

double Cylinder::get_base_radius()
{
   return base_radius;
};

double Cylinder::get_height()
{
   return height;
};

double Cylinder::volume()
{
   return PI * base_radius * height;
};

#endif