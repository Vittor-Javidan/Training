#include <iostream>                                                     // Copy and paste of everything from iostream header file into this file

class String                                                            // Custom String class
{
private:									// Makes every member bellow private
	char* m_Data;									// New char pointer declaration
	size_t m_Size;									// Size tracking of the string

public:										// Makes every member bellow public
	String() = default;                                                     	// Defatult constructor

	String(const char* string) 							// Main Constructor
	{
		printf("Created!\n");								// Prints "Created" to track if this constructor was used
		m_Size = strlen(string);							// store the string size
		m_Data = new char[m_Size];							// allocates heap space on memory for the string
		memcpy(m_Data, string, m_Size);							// copy a block of memory
	}

	String(const String& other) 							// Copy constructor
	{
		printf("Copied\n");								// Prints "Copy" to track if this constructor was used
		m_Size = other.m_Size;								// copy the size value from other
		m_Data = new char[m_Size];							// allocates heap space on memory for the copy of the string
		memcpy(m_Data, other.m_Data, m_Size);						// copy a block of memory
	}

	String(String&& other) noexcept							// Move constructor
	{
		printf("Moved on constructor\n");						// Prints "Moved on constructor" to track if this constructor was used
		m_Size = other.m_Size;								// copy the size value from other
		m_Data = other.m_Data;								// Copy the address where other.m_Data was pointing

		other.m_Size = 0;								// makes the other.m_Size equal to 0;
		other.m_Data = nullptr;								// makes the other.m_Data point to nothing;
	}

	String& operator=(String&& other) noexcept					// Move operator
	{
		printf("Moved on operator\n");							// Prints "Moved on operator" to track if this constructor was used

		if (this != &other)								// Prevents this instance to be pass as an argument for itself
		{
			delete[] m_Data;								// delete m_Data from this instance to prevent memory leak

			m_Size = other.m_Size;								// copy other.m_Size to this instance
			m_Data = other.m_Data;								// copy the address where other.m_Data was pointing

			other.m_Size = 0;								// sets other.m_Size to 0
			other.m_Data = nullptr;								// sets other.m_Data to point to nothing
		}

		return *this;									// returns this instance
	}

	~String() 									// Destructor
	{
		printf("Destroyed\n");								// Print "Destroyed" to track if the instance was destroyed
		delete m_Data;									// delete m_Data char pointer to prevend memory leak
	}

	void Print()									// Prints the string to console
	{
		for (size_t i = 0; i < m_Size; i++)						// Loop to iterate through all string characthers
			printf("%c", m_Data[i]);							// Prints the characther into the console

		printf("\n");									// Print a line break
	}
};

int main() 								// Main Function
{
	String apple = "Apple";							// Instantiate a String instance through the Main constructor with the const char* "Apple"
	String dest;								// Instantiate a String instance with no value, lengh 0

	std::cout << "Apple: "; apple.Print();					// Prints in the console the string value on apple
	std::cout << "Dest: "; dest.Print();					// Print in the console the string value on dest

	dest = std::move(apple);						// moves the string value from apple to dest, using the move operator

	std::cout << "Apple: "; apple.Print();					// Prints in the console the string value on apple
	std::cout << "Dest: "; dest.Print();					// Prints in the console the string value on dest

	std::cin.get();								// Pauses the code reading until Enter is pressed
}