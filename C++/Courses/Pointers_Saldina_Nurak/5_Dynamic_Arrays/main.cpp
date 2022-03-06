#include <iostream>
#include <array>

using std::cout;
using std::cin;
using std::endl;

int main(){
	cout << "===========================================" << endl;

	/*
		Since the compiler need to know how much space arrays will need
		in memory to compile, there is no other way to create array in
		runtime other than using pointers.

		the word "new" means the program will allocate memory during runtime

		but since we allocating in runtime, we must delete that memory in runtime aswell
	*/

	int size;
	cout << "Array size: ";
	cin >> size;

	int* myArray = new int [size];

	for(int i = 0; i < size; i++){
		cout << "Array[" << i << "]: ";
		cin >> myArray[i];
	}

	cout << "myArray[" << size << "] = {";
	for(int i = 0; i < size; i++){
		(i < size - 1)
			? cout << myArray[i] << ", " 
			: cout << myArray[i];			
	}
	cout << "}" << endl;

	cout << "===========================================" << endl;

	/*
		In our case, we are allocating space in memory for a array, and for that
		reason we had use "new int [size]". look how we used  a "[]" for determine
		a group of address. For that reason we need to delete a group, and for that
		we use "delete[]" insted just "delete";

		Its a good practice to make the pointer be equal to null right after the delete,
		to make sure to avoid the chance of using value o memory addresses that are
		not from our program. That can make our program behavior wird or make it crash.
	*/
	delete[] myArray; myArray = nullptr; 

	return 0;
}