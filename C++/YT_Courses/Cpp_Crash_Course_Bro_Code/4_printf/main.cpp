#include <iostream>
using namespace std;

int main()
{
	/*	
		printf() was made to work on C language, and will not support string directly.
		to make a string work, you need to use ".c_str()" method, that brings a pointer of the of the string 
		where start the chars in memory.
	*/

	string make = "Ford";
	string model = "Mustang";
	int year = 2021;
	double price = 9999.00;
	char for_sale = 'Y';
	
	cout << "================================================" << endl;
	printf("Your car is mabe by: %s", "Ford"); cout << endl;
	printf("Your car is made by: %s", make.c_str()); cout << endl;
	cout << "================================================" << endl;

	printf("Your car is a: %s %s", make.c_str(), model.c_str()); cout << endl;
	printf("Year %d", year); cout << endl;
	printf("Price %.2f", price); cout << endl;
	printf("For sale : %c", for_sale); cout << endl;
	cout << "================================================" << endl;

	return 0;
}