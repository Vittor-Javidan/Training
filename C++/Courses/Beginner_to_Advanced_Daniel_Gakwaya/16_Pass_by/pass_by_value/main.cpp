#include <iostream>

void say_age(int age);

int main(){

   /* Pass by value means the function will make a copy of the variables you put as arguments */

   int age = 23;

   std::cout << "====================================================" << std::endl;

   std::cout << "age - before : " << age << std::endl;   
   std::cout << "age address - before : " << &age << std::endl;   
   say_age(age);
   std::cout << "age - after : " << age << std::endl;   
   std::cout << "age address - after : " << &age << std::endl; 

   std::cout << "====================================================" << std::endl;

   return 0;
}

void say_age(int age){

   std::cout << "====================================================" << std::endl;

   ++age;
   std::cout << "Hello! You are " << age << " years old." << std::endl;
   std::cout << "age address - inside say_age : " << &age << std::endl; 

   std::cout << "====================================================" << std::endl;
}