#include <iostream>
#include <memory>

using std::cout;
using std::endl;
using std::shared_ptr;
using std::make_shared;

class MyClass {
public:
	MyClass(){
		cout << "Constructor invoked" << endl;
	};
	~MyClass(){
		cout << "Destructor invoked" << endl;
	}

};


int main(){
	cout << "===========================================" << endl;

	shared_ptr<MyClass> shPtr_1 = make_shared<MyClass>();
	cout << "Share count: " << shPtr_1.use_count() << endl;
	{
		shared_ptr<MyClass> shPtr_2 = shPtr_1; 
		cout << "Share count: " << shPtr_2.use_count() << endl;
	}
	cout << "Share count: " << shPtr_1.use_count() << endl;

	cout << "===========================================" << endl;
	return 0;
}