#include <iostream>

int main()
{
   //Scientific Notation
   double number1 {192400023};
   double number2 {1.92400023e8};
   double number3 {1.924e8};
   
   double number4 {0.00000000003498};
   double number5 {3.498e-11};

   return 0;
}

//-------------------------------------------------------------------------------------

#include <iostream>
#include <iomanip> //Library tha has the setprecision() function

int main()
{
   // Declare and Initialize the variables
   float number1{1.12345678901234567890f}; //Precision: 7
   double number2{1.12345678901234567890}; //Precision: 15
   long double number3{1.12345678901234567890L}; //Precision: More than 15

   // print out the sizer
   std::cout << "sizeof float: " << sizeof(float) << std::endl;
   std::cout << "sizeof double: " << sizeof(double) << std::endl;
   std::cout << "size of long double: " << sizeof(long double) << std::endl;

   // Precision
   std::cout << std::setprecision(20); // Control the precision from std::cout
   std::cout << "number1 is: " << number1 << std::endl;
   std::cout << "number2 is: " << number2 << std::endl;
   std::cout << "number3 is: " << number3 << std::endl;

   //FLoat: The precision is usually too limited
   //for a lot of applications
   float number4 {192400023.0f};

   std::cout << "number4 is: " << number4 << std::endl;

   return 0;
}