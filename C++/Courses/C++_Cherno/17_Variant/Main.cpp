#include <iostream>							// Copy and paste everything from iostream header file into this file 
#include <variant>							// Copy and paste everything from variante header file into this file
								   
int main() {								// Main function

	std::variant<std::string, int> data;					// Variant declaration with 2 data types, int and std::string
	
	data = "Vittor";							// Assingning the string "Vittor" into data
	std::cout << std::get<std::string>(data) << std::endl;			// Printing the value from data

	data = 20;								// Assingning the int 20 into data
	std::cout << std::get<int>(data) << std::endl;				// Printing the value from data
}								   