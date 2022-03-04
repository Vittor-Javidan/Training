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
	
	printf("Your car is mabe by: %s", "Ford"); cout << endl;
	printf("YOur car is made by: %s", make.c_str()); cout << endl;



	return 0;
}