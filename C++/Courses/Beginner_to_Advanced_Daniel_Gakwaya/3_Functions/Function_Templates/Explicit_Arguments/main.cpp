#include <iostream>

template <typename T>
T sum(T a, T b){
   return a + b;
}

int main()
{
   int a = 10;
   int b = 23;
   double c = 34.7;
   double d = 23.4;
   std::string e = "hello";
   std::string f = "World";

   sum(a, b); // int type deduced
   sum(c, d); // double type deduced
   sum(e, f); // string type deduced

   sum<double>(a, c); // works, even if parameters are of different type (implicity conversion from int to double)
   sum<double>(c, d); // explicitly say that we want double
   //sum<double>(a, e);  Error: can't convert std::string to double.

   return 0;
}