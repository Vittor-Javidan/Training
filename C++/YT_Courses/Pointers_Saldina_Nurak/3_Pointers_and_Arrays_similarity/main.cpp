#include <iostream>

using std::cout;
using std::endl;

int main(){
	cout << "===========================================" << endl;

	/*
		If you try to print the array using directly the array identifier, 
		you gonna get it address. So, using "array_name" or "&array_name", 
		means the same.

		Arrays address are defined by the address of it first element
	*/

	int luck_Number[5] = {2, 3, 5, 7, 9};
	cout << luck_Number 		<< endl;
	cout << &luck_Number[0] << endl;

	cout << "===========================================" << endl;

	/*
		Since arrays are address, we can get the values inside it just
		by using the dereference operator, same as we do using pointers.

		And for reason of the memory address being hexadecimal numbers,
		you can access others elements of an array using mathematical
		operations, like:
	*/

	cout << "luck_number[0]: " << *luck_Number 			<< endl;
	cout << "luck_number[1]: " << *(luck_Number + 1) 	<< endl;
	cout << "luck_number[2]: " << *(luck_Number + 2) 	<< endl;
	cout << "luck_number[3]: " << *(luck_Number + 3) 	<< endl;
	cout << "luck_number[4]: " << *(luck_Number + 4) 	<< endl;

	cout << "===========================================" << endl;
	return 0;
}