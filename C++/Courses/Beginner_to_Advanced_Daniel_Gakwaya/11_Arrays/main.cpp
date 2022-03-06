#include <iostream>

int main()
{
   //WARNING!!: if you decide to declare the array with a defined lenght without initialize, the system will fill the array with some junk values; 
   
   int myArray[10];

   for(int i = 0; i < 10; i++){
      std::cout << myArray[i] << std::endl;
   }

   return 0;
}

//---------------------------------------------------------------------------

#include <iostream>

int main()
{
   double salaries [5] {12.7, 7.5, 13.2, 8.1, 9.3};

   for(int i = 0; i < 5; i++){
      std::cout << "salary[" << i << "] : " << salaries[i] << std::endl;
   }   

   return 0;
}

//--------------------------------------------------------------------------

#include <iostream>

int main()
{
   //If you initialize at least 1 element in the array. the others elements will be automatic initialized with the value " 0" 
   double salaries [5] {12.7, 7.5};

   for(int i = 0; i < 5; i++){
      std::cout << "salary[" << i << "] : " << salaries[i] << std::endl;
   }   

   return 0;
}

//---------------------------------------------------------------------------

#include <iostream>

int main()
{
   //If you omit the size of the array at declaration, the compiler will do for you
   double salaries [] {12.7, 7.5, 13.2, 8.1, 9.3};

   //the way to loop through the array without know its lenght
   for(auto value : salaries){
      std::cout << "value : " << value << std::endl;
   }   

   return 0;
}

//---------------------------------------------------------------------------

#include <iostream>

int main()
{
   int scores [] {2, 5, 8, 2, 5, 6, 9};
   int sum {0};

   //You can modifie the value identifier to whatever you want
   for (int score : scores){
      sum += score;
   }

   std::cout << "total score : " << sum << std::endl;

   return 0;
}

//-----------------------------------------------------------------------------

#include <iostream>

int main()
{
   int scores [] {2, 5, 8, 2, 5, 6, 9};
   int sum {0};

   //If you need to get the lenght of the array, you can use the std::size(array) to get it
   int count {std::size(scores)};

   for (int i = 0; i < count; i++){
      sum += scores[i];
   }

   std::cout << "total score : " << sum << std::endl;

   return 0;
}