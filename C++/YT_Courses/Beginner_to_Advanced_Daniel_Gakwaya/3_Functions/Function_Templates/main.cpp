#include <iostream>
#include <string>

//You can consider that even  the type is a argument inside the function
template<typename T> T maximum(T a, T b);

int main(){

   int a1 = 10;
   int b1 = 20;

   double a2 = 20.0;
   double b2 = 10.0;

   std::string a3 = "Hello";
   std::string b3 = " World";

   std::cout << std::endl;
   std::cout << "maximum (int) : " << maximum(a1, b1) << std::endl;
   std::cout << "maximum (double) : " << maximum(a2, b2) << std::endl;
   std::cout << "maximum (string) : " << maximum(a3, b3) << std::endl;
   std::cout << std::endl;

   return 0;
}

template<typename T> T maximum(T a, T b){
   return a + b;
}