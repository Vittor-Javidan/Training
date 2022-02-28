#include <iostream>
#include <cmath>

int main()
{
   // Log : reverse function of pow. If 2^3 = 8 , log 8 in base 2 = 3. Log is like asking
   // to wich exponent should we elevate 2 to get eight. Log, by default computes the log
   // in base e. The also is another function which uses base 10 called log10.

   // Try the reverse operation of e^4 = 54.59, it will be log 54.59 in base e = ?
   std::cout << "Log ; to get 54.59, you would elevate e to the power of : " << std::log(54.59) << std::endl;

   // log10, 10^4 = 10000, to get 10k, you'd need to elevate 10 to the power of ?, this is log in base 10
   std::cout << "To get 1000, you'd need to elevate 10 to the power of : " << std::log10(10000) << std::endl;

   return 0;
}