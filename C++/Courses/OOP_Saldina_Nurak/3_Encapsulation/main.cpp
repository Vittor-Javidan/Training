#include <iostream>

using std::string;
using std::cout;
using std::endl;

class Employee{
private:
	string Name;
	string Company;
	int Age;

public:
	Employee(string Name, string Company, int Age){
		this -> Name = Name;
		this -> Company = Company;
		this -> Age = Age;
	};

   //Setters
   void set_Name(string Name){
      this -> Name = Name;
   };
   void set_Company(string Company){
      this -> Company = Company;
   };
   void set_Age(int Age){
      this -> Age = Age;
   };

   //Getters
   string get_Name(){
      return Name;
   };
   string get_Company(){
      return Company;
   };
   int get_Age(){
      return Age;
   };
};

int main()
{	
	cout << endl;

	Employee employee1("Vittor", "MySelf", 28);
   cout << "Name: " 		<< employee1.get_Name() << endl;
   cout << "Company: " 	<< employee1.get_Company() << endl;
   cout << "Age: " 		<< employee1.get_Age() << endl;

	cout << "======================" << endl;

	Employee employee2("John", "Amazon", 35);
   cout << "Name: "		<< employee2.get_Name() << endl;
   cout << "Company: "	<< employee2.get_Company() << endl;
   cout << "Age: " 		<< employee2.get_Age() << endl;

	cout << endl;
	return 0;
}