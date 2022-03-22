#include <iostream>						// Copy and paste everything from iostream header into this file
#include <thread>						// Copy and paste everything from thread header file into this file

static bool s_Finished = false;					// Boolean variable responsible to stop the while loop inside the DoWork function

void DoWork() {							// Function that will be inserted as argument into a new thread

	using namespace std::literals::chrono_literals;			// Namespace to reduce the variable name of the time type inside the std::this_thread::sleep_for() function

	while (!s_Finished) {						// while that will make the print "Working" keep continue

		std::cout << "Working..." << std::endl;				// Will print "Working..."
		std::this_thread::sleep_for(1s);				// Will make the thread sleep for 1 second
	};
};

int main() {							// Main function

	std::thread worker(DoWork);					// makes a new thread use the function DoWork

	std::cin.get();							// The program will wait for the key ENTER be pressed to continue the code reading
	s_Finished = true;						// makes s_Finished be false to stop the loop inside DoWork

	worker.join();							// The code will not keep foward until the thread worker stop his job
	std::cout << "Finished" << std::endl;				// Print "Finished" to give us a feedback about when the thread finished

	std::cin.get();							// The program will not continue until the key ENTER is pressed
};