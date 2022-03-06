#include <iostream>

//Function overload are functions with same name, but different return types or arguments
int max(int a, int b);
double max(double a, double b);

int main(){

   //Compile will decide wich max function will fit better to the situation
   int max_result1 = max(10, 50);
   double max_result2 = max(10.0, 50.0);

   return 0;
}

int max(int a, int b){
   std::cout << "max int" << std::endl;
   return a > b ? a : b;
}
double max(double a, double b){
   std::cout << "max double" << std::endl;
   return a > b ? a : b;
}