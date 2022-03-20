#include <iostream>																													// Copy and paste of the information of iostream header files

class Log {																																// Our class log
public:																																		// Makes every variable below public
	const int logLevelError = 0;																											// logLevelError is just a constant number 0
	const int logLevelWarning = 1;																										// logLevelWarning is just a constant number 1
	const int logLevelInfo = 2;																											// logLevelInfor is just constant number 2

private:																																		// Makes every variable bellow private
	int m_level;																																// Current level warning

public:																																		// Makes every method bellow public
	void setLevel(int level) {																												// Sets the current level
		m_level = level;																															// store the level inside "m_level"
	}

	void Error(const char* message) {																									// Prints Error message

		if(m_level >= logLevelError)																											// If m_level >= 0, condition is true
			std::cout << "[ERROR]:  " << message << std::endl;																				// print the message in the console
	}

	void Warn(const char* message) {																										// Prints Warn message

		if(m_level >= logLevelWarning)																										// If m_level >= 1, condition is true
			std::cout << "[WARN]:  " << message << std::endl;																				// print the message in the console
	}

	void Info(const char* message) {																										// Print Infor message

		if (m_level >= logLevelInfo)																											// If m_level >= 2, condition is true
			std::cout << "[INFO]:  " << message << std::endl;																				// print the message in the console
	}
};

int main() {																															// Main function

	Log log;																																	// Instantiate Log Object "log"
	log.setLevel(log.logLevelWarning);																								// Set "log" to logLevelWarning
	log.Error("Hello World");																											// Prints a erro message "Hello World"
	log.Warn("Hello World");																											// Prints a Warn message "Hello World"
	log.Info("Hello World");																											// Prints a Info message "Hello World"

	std::cin.get();																														// Makes the code pause until the user press a key
}