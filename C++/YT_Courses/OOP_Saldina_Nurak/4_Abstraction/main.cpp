#include <iostream>

using std::string;
using std::cout;
using std::endl;

class AbstractEmployee {
	virtual void AskForPromotion() = 0;
};

class Employee: AbstractEmployee{
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
   void set_Name(string Name){ this -> Name = Name; };
   void set_Company(string Company){ this -> Company = Company; };
   void set_Age(int Age){ this -> Age = Age; };

   //Getters
   string get_Name(){ return Name; };
   string get_Company(){ return Company; };
   int get_Age(){ return Age; };

	//Methods
	void AskForPromotion(){
		Age > 30
			? cout << Name << " got promoted!" << endl
			: cout << Name << " sorry, no promotion to you!" << endl;
	};
};

int main()
{	
	cout << endl;

	Employee employee1 =  Employee("Vittor", "MySelf", 28);
	employee1.AskForPromotion();

	cout << "======================" << endl;

	Employee employee2 = Employee("John", "Amazon", 35);
	employee2.AskForPromotion();

	cout << endl;
	return 0;
}