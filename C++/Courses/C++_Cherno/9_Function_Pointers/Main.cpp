#include <iostream>                                                         // Copy and paste everything inside iostream header file

void SayHello() {                                                           // Function responsible to say hello
	std::cout << "Hello" << std::endl;                                         // Prints hello
}

void CallTwice(void(*function)()) {                                         // Function responsible to call a function twice

	function();                                                                // first function call
	function();                                                                // second function call
	std::cout << function << std::endl;                                        // prints the address of the function in the inner scope
}

int main() {                                                                // Main function

	CallTwice(SayHello);                                                       // Call the function "CallTwice"

	std::cout << SayHello << std::endl;                                        // Prints the function addres in the outer scope
}

// ====================================================================================================================================

#include <iostream>                                                         // Copy and paste everything inside iostream header file

void CallTwice(int& value, void(*function)(int)) {                          // Function responsible to call a function twice using one argument passing by value

	function(value);                                                           // first function call
	function(value);                                                           // second function call
}

int main() {                                                                // Main function

	int value = 10;                                                            // store the value 10 inside "value"

	CallTwice(value, [](int _value) {                                          // Call our function to use our lambda expression twice using "value"
		std::cout << _Value << std::endl;                                         // Prints _value
		});
}