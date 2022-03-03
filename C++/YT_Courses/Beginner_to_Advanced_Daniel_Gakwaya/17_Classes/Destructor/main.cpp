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
   Dog(std::string_view name_param, std::string_view breed_param, int age_param);
   ~Dog();
};

void some_func()
{
   //When you create a object using a pointer, you need to delete the object manually to call ~Dog destructor
   Dog *p_dog = new Dog("Fluffy", "Shepherd", 2);

   delete p_dog;
};

//Main Code --------------------------------------------------------------------------------------------
int main()
{
   some_func();

   //Destructors are call automatic after the object scope ends, except if the object was created using a pointer;
   Dog my_dog("Snow", "pincher", 5);

   std::cout << "Done!" << std::endl;
   return 0;
}

//Definitions--------------------------------------------------------------------------------------------
Dog::Dog(std::string_view name_param, std::string_view breed_param, int age_param)
{
   name = name_param;
   breed = breed_param;
   p_age = new int;
   *p_age = age_param;

   std::cout << "Dog constructor called for : " << name << std::endl;
}

Dog::~Dog()
{
   delete p_age;
   std::cout << "Dog destructor called for : " << name << std::endl;
}
