#include <iostream>																// Will copy and paste the header file of iostream

int Multiply(int a, int b) {													// A function that multiplies two numbers
	return a * b;																		// Returns the mutiply number
}

void MultiplyAndLog(int a, int b) {											// A function that multiply two numbers and logs it in the console
	std::cout << Multiply(a, b) << std::endl;								   // Prints the result of multiply in the console
}

int main() {

	MultiplyAndLog(5, 10);														// Multiply and log 5 * 10
	MultiplyAndLog(10, 20);														// Multiply and log 10 * 20
	MultiplyAndLog(20, 40);														// Multiply and log 20 * 40

	std::cin.get();
}