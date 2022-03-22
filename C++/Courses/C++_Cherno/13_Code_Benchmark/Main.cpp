#include <iostream>								// Copy and paste everything from iostream header file into this file
#include <chrono>								// Copy and paste everything from chrono header file into this file
#include <thread>								// Copy and paste everything from thread header file into this file

struct Timer {									// Out Timer class responsible to benchmark 

	std::chrono::time_point<std::chrono::steady_clock> start, end;			// Variables responsable to start both start and end time of benchmark
	std::chrono::duration<float> duration;						// Variable responsible to store the difference time between start and end;

	Timer() {									// The constructor will assing the time value inside start when triggered;
		start = std::chrono::high_resolution_clock::now();				// Assingment to start variable
	};

	~Timer() {									// The destructor will assing the time valuse inside end and calculate the diff time when triggered

		end = std::chrono::high_resolution_clock::now();				// Assigment to end variable
		duration = end - start;								// Difference between end and start times

		float ms = duration.count() * 1000.0f;						// Output format to ms
		std::cout << "Timer took " << ms << "ms" << std::endl;				// Print the benchmarked time
	};
};

void UselessFunction() {							// Useless Function, with a random loop just to test the timer

	Timer time;									// Timer being instantiate

	for (size_t i = 0; i < 100000; i++) {						// Useless loop printing "What i'm doing with my life..."
		std::cout << "What i'm doing with my life...\n";				// Prints "What i'm doing with my life..."
	}
}

int main() {									// Main function

	UselessFunction();								// UselessFunction being called
}