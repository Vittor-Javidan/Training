#include <iostream>                                                  // Copy and paste of declarations inside iostream files
#include <string>                                                    // Copy and paste of declarations insifr string  files

template<typename T>                                                 // Template declaration. Templates are not functions. They are blueprints that will be used on copile time to create the functions called in your code. 
void Print(T value) {                                                //Prints the value of whatever type T is introduce
	std::cout << value << std::endl;                                     // Prints the value inserted
}

template<typename T, int N>                                          // Template declaration. Templates are not meant to create complex functions, because the complexity of understanding of how data flows inside it increases too.
class Array {                                                        // class name
private:                                                                // variable private member
	T m_Array[N];                                                           // Array of type T with N slots
public:                                                                 // method public member
	int GetSize() const { return N; }                                       // Returns the array size N
};

int main() {                                                         // Main function
		
	Print<int>(10);                                                      // Print the integer number 10
	Print<std::string>("Hellow World");                                  // Print the std::string "Hellow World"
	Print<float>(25.5f);                                                 // Print the float number 25.5

	Array<std::string, 5> array;                                         // creates an array of type std::string with 5 slots
	std::cout << array.GetSize() << std::endl;                           // prints the size of the array
}