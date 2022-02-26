#include <iostream>

int AddNumbers(int first_number, int second_number){
   int sum = first_number + second_number;
   return sum;
}

int main(){
   
   int firstNumber = 12;
   int secondNumber = 9;

   int sum = firstNumber + secondNumber;

   sum = AddNumbers(firstNumber, secondNumber);

   sum = AddNumbers(34, 7);

   std::cout << "The sum of the two numbers is: " << sum << std::endl;
   std::cout << "The sum of the wto numbers is: " << AddNumbers(23, 8) << std::endl;

   return 0;
}

//------------------------------------------------------------------------------

#include <iostream>

int addNumbers( int first_param, int second_param ){

   int result = first_param + second_param;
   return result;
}

int mutiplyNumbers(int number_1, int number_2){
   return number_1 * number_2;
}

int main(){

   int first_number {3}; //statement
   int second_number {7};

   std::cout << "First number : " << first_number << std::endl;
   std::cout << "Second number : " << second_number << std::endl;

   int sum = first_number + second_number;
   std::cout << "Sum : " << sum << std::endl;

   sum = addNumbers(first_number, second_number);
   std::cout << "Sum: " << sum << std::endl;

   sum = addNumbers(30, 67);
   std::cout << "Sum: " << sum << std::endl;
   std::cout << "Sum: " << addNumbers(40, 34) << std::endl;

   std::cout << "result: " << mutiplyNumbers(first_number, second_number) << std::endl;

   return 0;
}