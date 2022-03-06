// max(number 1, number 2) ---------------------------------------------------------

#include <iostream>
#include <algorithm>
using namespace std;

int main()
{
	double x;
	double y;

	cout << "This program will neter the max of two numbers" << endl;

	cout << "Enter in number 1: ";
	cin >> x;

	cout << "Enter in number 2: ";
	cin >> y;

	double z = max(x, y);
	cout << "Max value is " << z << endl;

	return 0;
}

// min(number 1, number 2) ---------------------------------------------------------

#include <iostream>
#include <algorithm>
using namespace std;

int main()
{
	double x;
	double y;

	cout << "This program will neter the min of two numbers" << endl;

	cout << "Enter in number 1: ";
	cin >> x;

	cout << "Enter in number 2: ";
	cin >> y;

	double z = min(x, y);
	cout << "Min value is " << z << endl;

	return 0;
}

// pow(number 1, number 2) ---------------------------------------------------------

#include <iostream>
#include <cmath>
using namespace std;

int main()
{
	double x;
	double y;

	cout << "This program will return x to the power of y (x^y)" << endl;

	cout << "Enter in number 1: ";
	cin >> x;

	cout << "Enter in number 2: ";
	cin >> y;

	double z = pow(x, y);
	cout << "result is " << z << endl;

	return 0;
}