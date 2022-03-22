#include <iostream>							// Copy and paste everything inside iostream header file
#include <string>							// Copy and paste everything inside string header file

int main() {								// Main function
	
	std::string name = std::string("Vittor") + " Hello";			// Store inside the variable "name" the string "Vittor" + " Hello". If you just add two const char* string, the compiler will complain.
	bool contains = name.find("ttor") != std::string::npos;			// Return 1 (true) if "ttor" is inside the string "name", and 0 (false) if not 

	contains								// Ternary operator to print "true" is "contains" has 1 inside it, and "False" if "contains" has the value of 0
		? std::cout << "True" << std::endl					// Prints "True"
		: std::cout << "False" << std::endl;					// Prints "False

	std::cin.get();								// Pause the console until a key is pressed 
}