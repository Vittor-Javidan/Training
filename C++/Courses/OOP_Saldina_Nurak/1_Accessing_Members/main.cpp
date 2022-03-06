#include <iostream>

using std::string;
using std::cout;
using std::endl;

class Employee{
public:
	string Name;
	string Company;
	int Age;

	void IntroduceYourself(){
		cout << "Name - " 		<< Name 		<< endl;
		cout << "Company - " 	<< Company 	<< endl;
		cout << "Age - "		<< Age	  	<< endl;
	};
};

int main()
{	
	Employee employee1;
	employee1.Name = "Vittor";
	employee1.Company = "MySelf";
	employee1.Age = 28;
	employee1.IntroduceYourself();

	cout << "======================" << endl;

	Employee employee2;
	employee2.Name = "John";
	employee2.Company = "Amazon";
	employee2.Age = 35;
	employee2.IntroduceYourself();

	return 0;
}