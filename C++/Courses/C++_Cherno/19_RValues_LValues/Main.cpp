#include <iostream>								// Copy and paste everything from iostream header file into this file

void Print_lValues(std::string& value) {					// Handles Printing coming from std::string lvalues

	std::cout << value << std::endl;					        // Print the value
}

void Print_rValues(std::string&& value) {					// Handles Printing coming from std::string rValues

	std::cout << value << std::endl;						// Print the value
}

void Print_lr_Values(const std::string& value) {				// Handles Printing coming from std::string lValues and rValues

	std::cout << value << std::endl;					        // Print the value
}

int main() {									// Main function

	std::string name = "Vittor ";						        // Store the string "vittor "
	std::string lastname = "Javidan";						// Store the stirng "Javidan"
	std::string fullname = name + lastname;						// Store the the sum of "Vittor " and "Javidan"

	std::cout << "================================================\n";

	Print_lValues(name);								// Print the lValue name
	Print_lValues(lastname);							// Print the lValue lastname
	Print_lValues(fullname);							// Print the lValue fullname

	std::cout << "================================================\n";

	Print_rValues("Vittor");							// Print the rValue "Vittor"
	Print_rValues("Javidan");							// Print the rValue "Javidan"
	Print_rValues(name + lastname);							// Print the rValue (name + lastname). Its considerer rValue because is a operation

	std::cout << "================================================\n";

	Print_lr_Values(name);								// Print the lValue name
	Print_lr_Values(lastname);							// Print the lValue lastname
	Print_lr_Values(name + lastname);						// Print the rValue (name + lastname)

	std::cout << "================================================\n";
}