#include <iostream>						// Copy and paste everything inside from iostream header file
#include <string>						// Copy and paste everything inside from string header file
#include <algorithm>						// Copy and paste ererything inside from algorithm header file

namespace apple {						// You can consider this like the "Library" apple

	void print(const std::string& text) {				// Print function from our Library apple
		std::cout << text << std::endl;				// Print the text
	};
};

namespace orange {						// You can consider this like the "Library" orange 

	void print(const char* text) {					// Print function from our Library orange
		std::string temp = text;					// stores text inside our varible temp
		std::reverse(temp.begin(), temp.end());				// Reverses temp string from begin to end
		std::cout << temp << std::endl;					// Print temp 
	};
};

int main() {							// Main function

	apple::print("Hello");						// Calls print function from the apple library
	orange::print("Hello");						// Calls print function from the orange library

	std::cin.get();							// Makes the code pause until the user press a key
};