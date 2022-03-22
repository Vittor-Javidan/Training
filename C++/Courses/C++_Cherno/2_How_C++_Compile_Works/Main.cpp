#include <iostream>						// copy and past everything insisde iostream header file

int Multiply(int A, int B) {					// Our example function that mutiplies two numbers
	return A * B;							// returns the result of two multiplied numbers
#include "Endbrace.h"						// will copy and paste the "}" inside our "Endbrace.h" file, fixing our definition

int main() {							// Main function

	int result = Multiply(2, 2);					// Calls our function "Multiply"
	std::cout << result << std::endl;				// Prints the result in the console
}