#include <iostream>									// Copy and paste everything inside iostream header file
#include <vector>									// Copy and paste everything inside vector header file
#include <functional>									// Copy and paste everything inside functional header file

void ForEach(const std::vector<int>& values, const std::function<void(int)>& func) {	// Function responsible to take the lambda function with a int argument, and use it for each element inside a given vector

	for (int value : values)								// For each loop
		func(value);										// puts the value of each element inside the vection into the lambda function
}

int main() {										// Main function

	std::vector<int> values = { 1, 2, 3, 4, 5, 6 };						// Vector declaration with type int
	auto lambda = [](int value) {								// Lambda expression with argument int
		std::cout << "Value: " << value << std::endl;					// prints the int value
	};

	ForEach(values, lambda);								// Calls our ForEach function using a int vector and a lambda expression with 1 int argument
}