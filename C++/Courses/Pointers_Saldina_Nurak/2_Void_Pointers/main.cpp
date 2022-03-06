#include <iostream>

using std::cout;
using std::endl;
using std::string;

void print(void* pointer , char type){
	switch(type){
		case 'i': 
			cout << *((int*)pointer) << endl;
			break;
		case 'c':
			cout << *((char*)pointer) << endl;
			break;
		default:
			cout << "provide a valid type format" << endl;
	};
};

int main(){
	cout << "===========================================" << endl;

	int number = 5;
	char letter = 'a';
	print(&number, 'i');
	print(&letter, 'c');

	cout << "===========================================" << endl;
	return 0;
}