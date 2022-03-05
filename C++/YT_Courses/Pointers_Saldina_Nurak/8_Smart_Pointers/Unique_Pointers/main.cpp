#include <iostream>
#include <memory>

using std::cout;
using std::endl;
using std::unique_ptr;
using std::make_unique;
using std::move;


int main(){
	cout << "===========================================" << endl;

	/*
		You cannot share unique pointers. That means you can make a
		unique pointer points another pointer. What yoy can do is move
		the ownership between unique pointers, using "std::move()", and
		after that the pointer will be empty in order to give his data to 
		another unique pointer.
	*/

	unique_ptr<int> unPtr_1 = make_unique<int>(25);
	unique_ptr<int> unPtr_2 = move(unPtr_1);

	cout << unPtr_2 << endl;
	cout << *unPtr_2 << endl;


	cout << "===========================================" << endl;
	return 0;
}