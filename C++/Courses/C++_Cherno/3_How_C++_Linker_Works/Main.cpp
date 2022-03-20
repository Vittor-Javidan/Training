#include <iostream>

void Log(const char* message);

static int Multiply(int a, int b) {												// Static in cpp means, "this thing will be used only in this file.
	int result = a * b;
	Log("Hello World");
}																							// If you compile this, you gonna notice the compile will find no errors. But there is actually two, the function not return a int information, and the function "Log" not existing.
																								// The compile will check for errors only where functions were called, and the linker will check for error only for files that can be access in through many files.
																								// In resume, our block of code are in the limbo, since the keyword "static" make it available only for the current file, and at the same time were are not using it. 

int main() {
	std::cin.get();
}