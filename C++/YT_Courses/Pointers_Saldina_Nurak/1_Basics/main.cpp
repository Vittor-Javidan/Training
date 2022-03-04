#include <iostream>

using std::cout;
using std::endl;

int main(){

	// number: variable
	// &number: address of variable "number"

	int number = 5;
	int* pointer_number = &number; // pointer_number: pointer wich points to the addres of "number"

	cout << "=========================================================================" << endl;
	cout << "address wich point_number points: " << pointer_number 							<< endl;
	cout << "value stored in the address wich point_number points: " << *pointer_number << endl;
	cout << "=========================================================================" << endl;

	return 0;
}