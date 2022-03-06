#include <iostream>

int main()
{
   const size_t size{10};

   /*
      Different ways you can declare an array  dynamically
      and how they are initialized
   */ 

   double *p_salarie {new double[size]}; // salaries array will cointain garbage values
   int *p_students {new(std::nothrow) int[size]}; // All values initialized to 0
   double *p_scores {new(std::nothrow) double[size]{1, 2, 3, 4, 5}}; /* Allocating memory space
      for an array of size double vars. First 5 will be initialized with 1, 2, 3, 4, 5, and the rest
      will be 0's
   */

  //nullptr check and use the allocated array
   if(p_scores){
      std::cout << "size of scores (it's a regular pointer) : " << sizeof(p_scores) << std::endl;
      std::cout << "Successfuly allocated memory for scores." << std::endl;

      for( size_t i{}; i < size; i++){
         std::cout << "value : " << p_scores[i] << " : " << *(p_scores + i) << std::endl;
      }
   }

   delete[] p_salarie; p_salarie = nullptr;
   delete[] p_students; p_students = nullptr;
   delete[] p_scores; p_scores = nullptr;

   return 0;
}

//--------------------------------------------------------------------------------------------------

#include <iostream>

//Static arrays Vs dynamic arrays
int main()
{
   std::cout << "===================================================" << std::endl;
   int scores[10] {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}; // Lives on the stack

   std::cout << "scores size : " << std::size(scores) << std::endl;
   for(auto s : scores){
      std::cout << "value : " << s << std::endl;
   }

   std::cout << "===================================================" << std::endl;
   int *p_scores = new int[10] {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}; // Lives on the heap
   /* 
      std::size() AND for(auto value:array), will not work for p_scores
   */

   delete[] p_scores; p_scores = nullptr;

   return 0;
}