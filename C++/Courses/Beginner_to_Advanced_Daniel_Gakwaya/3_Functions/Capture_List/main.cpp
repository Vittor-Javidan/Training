#include <iostream>

int main(){

   double a = 10.0;
   double b = 20.0;

   std::cout << std::endl;
   std::cout << "a address : " << &a << std::endl;
   std::cout << "b address : " << &b << std::endl;

   //Capture by value
   auto func1 = [a, b](){
      std::cout << std::endl;
      std::cout << "CAPTURE BY VALUE =============================" << std::endl;

      std::cout << "a + b : " << a + b << std::endl;
      std::cout << "a address : " << &a << std::endl;
      std::cout << "b address : " << &b << std::endl;
   };
   func1();

   //Capture by reference
   auto func2 = [&a, &b](){
      std::cout << std::endl;
      std::cout << "CAPTURE BY REFERENCE==========================" << std::endl;

      std::cout << "a + b : " << a + b << std::endl;
      std::cout << "a address : " << &a << std::endl;
      std::cout << "b address : " << &b << std::endl;
   };
   func2();

   //Capture all by value
   auto func3 = [=](){
      std::cout << std::endl;
      std::cout << "CAPTURE ALL BY VALUE==========================" << std::endl;

      std::cout << "a + b : " << a + b << std::endl;
      std::cout << "a address : " << &a << std::endl;
      std::cout << "b address : " << &b << std::endl;
   };
   func3();

   //Capture all by reference
   auto func4 = [&](){
      std::cout << std::endl;
      std::cout << "CAPTURE ALL BY REFERENCE======================" << std::endl;

      std::cout << "a + b : " << a + b << std::endl;
      std::cout << "a address : " << &a << std::endl;
      std::cout << "b address : " << &b << std::endl;
   };
   func4();

   std::cout << std::endl;

   return 0;
}

/*
   In c++ we don't have the luxury of getting access to outer scope variables like others languages like
   Python, Javascript, Java, etc. That's why we need capture list, in case the need of outer scope variables
   used to build the logic inside the function body, but we don't want them to be the arguments of the function itself.
*/