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
	virtual void Work(){
		cout << Name << " is checking email, task backlog, performing tasks..." << endl;
	};
};

class Developer: public Employee {
private:

	string Favorite_Programming_Language;

public:

	Developer( 
		string Name, 
		string Company, 
		int age, 
		string Favorite_Programming_Language 
	) 
		: Employee(Name, Company, age) 
	{
		this -> Favorite_Programming_Language = Favorite_Programming_Language;
	};

	void FixBug(){
		cout << get_Name() << " fixed bug using " << Favorite_Programming_Language << endl;
	};
	void Work(){
		cout << get_Name() << " is writing " <<  Favorite_Programming_Language << " code" << endl;
	};

};

class Teacher: public Employee {
private:

	string Subject;

public:

	Teacher(
		string Name, 
		string Company, 
		int age, 
		string Subject
	)
		: Employee(Name, Company, age)
	{
		this -> Subject = Subject;
	};

	void PrepareLesson(){
		cout << get_Name() << " is preparing " << Subject << endl;
	};
	void Work(){
		cout << get_Name() << " is teaching " << Subject << endl;
	}
};

int main()
{	
	cout << endl;

	Developer developer = Developer("Saldina", "YT-CodeBeauty", 25, "C++");
	developer.Work();

	Teacher teacher = Teacher("Jack", "Cool School", 35, "History");
	teacher.Work();

	Employee *p_employee1 = &developer;
	Employee *p_employee2 = &teacher;

	//the "virtual" keyword makes class Employees checks first if there is any child with that method"
	p_employee1 -> Work();
	p_employee2 -> Work();

	cout << endl;
	return 0;
}