#include <iostream>																		// Imports iostream library

void Log(const char* message);														// Declaration of the function "Log"

int main() {																				// Main Function. If you don't return 0, it just assumes the main function is returning 0, but works only with the main function

	Log("Hello World");																		// Calls our function to print "Hello World"
	std::cin.get();																			// Makes the code stops until the user press a key
}