#include <iostream>

int main(){

   int age;
   std::string name;

   std::cout << "Please type your Last Name: " << std::endl;
   std::cin >> name;

   std::cout << "Please type your age : " << std::endl;
   std::cin >> age;

   std::cout << "Helo" << name << "! You are " << age << "years old" << std::endl;
   
   return 0;
}

//---------------------------------------------------------------------------------

#include <iostream>

int main()
{

   int age;
   std::string name;

   std::cout << "Please type in your Last name and age, separated by space : " << std::endl;

   std::cin >> name >> age;
   
   std::cout << "Hello " << name << "! You are " << age << " years old." << std::endl;

   return 0;
}

//--------------------------------------------------------------------------------------------

#include <iostream>
#include <string>

int main(){

   int age;
   std::string full_name;

   std::cout << "Please type in your full name : " << std::endl;
   std::getline(std::cin, full_name);

   std::cout << "Type in your age: " << std::endl;
   std::cin >> age;
   std::cout << "Hello " << full_name << "! You are " << age << " years old." << std::endl;

   return 0;
}

//----------------------------------------------------------------------------------------------

#include <iostream>
#include <string>

int main()
{
   std::string full_name;
   int age;

   std::cout << "Please type in  your full name and age " << std::endl;

   std::getline(std::cin, full_name);

   std::cin >> age;

   std::cout << "Hello " << full_name << " you are " << age << " years old!" << std::endl;

   return 0;
}