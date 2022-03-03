#include <iostream>
#include <string_view>

//Prototypes --------------------------------------------------------------------------------------------
class Dog
{
   std::string name;
   std::string breed;
   int *p_age{nullptr};

public:
   Dog() = default;
   Dog(std::string_view name, std::string_view breed, int age);
   ~Dog();

   void print_info(){
      std::cout << "Dog (" << this << ") : [ name: " << name
         << ", breed: " << breed << ", age: " << *p_age << " ]" << std::endl;
   };

   //setters
   //Chained calls using references
   Dog& set_dog_name(std::string_view name){
      this -> name = name;
      return *this;
   };
   Dog& set_dog_breed(std::string_view breed){
      this -> breed = breed;
      return *this;
   };
   Dog& set_dog_age(int age){
      *(this -> p_age) = age;
      return *this;
   };
};

//Definitions--------------------------------------------------------------------------------------------
Dog::Dog(std::string_view name, std::string_view breed, int age)
{
   this -> name = name;
   this -> breed = breed;
   p_age = new int;
   *p_age = age;

   std::cout << "Dog constructor called for : " << name << " at " << this << std::endl;
}

Dog::~Dog()
{
   delete p_age;
   std::cout << "Dog destructor called for : " << name << " at " << this << std::endl;
}

//Main Code --------------------------------------------------------------------------------------------
int main()
{
   Dog dog1("Snowball", "pinchie", 2);
   dog1.print_info();

   dog1.set_dog_name("Pumba").set_dog_breed("Wire Fox Terrier").set_dog_age(4);
   dog1.print_info();

   std::cout << "Done!" << std::endl;
   return 0;
}
