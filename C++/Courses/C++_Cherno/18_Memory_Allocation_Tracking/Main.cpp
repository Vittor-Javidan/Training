#include <iostream>                                                                             // Copy and paste everything from iostream library into this file
#include <memory>                                                                               // Copy and paste everything from memory library into this file

struct AllocationMetrics {                                                                      // Class wich will handle the memory tracking

	uint32_t TotalAllocated = 0;                                                                    // store the Total memory allocated amount in bytes
	uint32_t Totalfree = 0;                                                                         // Store the Total memory allocation amount free in bytes

	uint32_t CurrentUsage() { return TotalAllocated - Totalfree; }                                  // Method that returns the difference bettem memory allocated and free
};

static AllocationMetrics s_AllocationMetrics;                                                   // Creates a static instance of AllocationMetrics class

void* operator new(size_t size) {                                                               // Override the operator new to track the new allocations

	s_AllocationMetrics.TotalAllocated += size;                                                     // add the size in bytes into the TotalAllocated

	return malloc(size);                                                                            // calls the malloc function to not interrupt the allocation process
}

void operator delete(void* memory, size_t size) {                                               // Override the operator delete to track the free allocations

	s_AllocationMetrics.Totalfree += size;                                                          // add the size in bytes into the TotalFree

	free(memory);                                                                                   // calls free function to not interrupt the free allocation process
}

static void PrintMemoryUsage() {                                                                // Prints the current memory usage to a given line of code

	std::cout << "Memory Usage: " << s_AllocationMetrics.CurrentUsage() << "bytes\n";               // Prints the current memory
}

struct Object {                                                                                 // Our Object class, to use as dummy to register the allocations

	int x, y, z;                                                                                    // 3 int variables, 4 bytes each, that means a instance of this object gonna have 12 bytes
};

int main() {                                                                                    // Main function

	PrintMemoryUsage();                                                                             // Calls a print for the current memory usage
	std::string string = "Vittor";                                                                  // Stores the name "Vittor" into a string variable
	PrintMemoryUsage();                                                                             // Calls a print for the current memory usage
	{                                                                                               // A new scope just to force the unique pointer to call its destructor
		std::unique_ptr<Object> obj = std::make_unique<Object>();                                       // unique pointer declaration with a assingment pointing to a new Object instance
		PrintMemoryUsage();                                                                             // Calls a print for the current memory usage
	}
	PrintMemoryUsage();                                                                             // Calls a print for the current memory usage
	
}