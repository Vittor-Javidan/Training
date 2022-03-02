#include <iostream>
#include <string>

int main()
{
   //Empty string
   std::string full_name;       

   //Initialize with string literal                         
   std::string planet {"Earth. Where the sky is blue"};  

   //Initialize whit other existing string
   std::string prefered_planet {planet};  

   //Initialize with part of a string literalk. Contain "Hello"            
   std::string message {"Hello there", 5};   

   //Initialize with multiples copies of a char. Contains "eeee"            
   std::string weird_message(4, 'e');   

   //Initialize with part of an existing std::string starting at index 6, taking 5 characters. Will contain "World"
   std::string greetings {"Hello World"};
   std::string saying_hello {greetings, 6, 5};
   

   std::cout << "full_name : " << full_name << std::endl;
   std::cout << "planet : " << planet << std::endl;
   std::cout << "prefered_planet : " << prefered_planet << std::endl;
   std::cout << "message : " << message << std::endl;
   std::cout << "weird_message : " << weird_message << std::endl;
   std::cout << "greetings : " << greetings << std::endl;
   std::cout << "saying_hello : " << saying_hello << std::endl;

   return 0;
}