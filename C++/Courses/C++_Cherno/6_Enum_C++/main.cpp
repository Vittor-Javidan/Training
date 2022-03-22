#include <iostream>								// Copy and paste of the information inside the iostream header file

class Log {									// Our class log
public:											// Makes the enum below public
	enum Level {										// Our enum "Level"
		LevelError = 0,										// first enum "LevelError" representing the value 0
		LevelWarning = 1,									// second enum "LevelWarning" representing the value 1
		LevelInfo										// third enum "LevelInfo" representing the value 2. Note how you don't need to assinng the value to 2, that because enum increment automatic by one the next values
	};

private:										// Makes the variable m_LogLevel private
	Level m_LogLevel = LevelInfo;								// Declaration of m_Loglevel assinged with the value of "LevelInfo"

public:											// Makes every method below public
	void SetLevel(Level level) {								// Sets the current level
		m_LogLevel = level;									// store the level inside "m_LogLevel" to "level"
	};
	
	void Error(const char* message) {							// Prints Error message
		if (m_LogLevel >= LevelError)								// If m_LogLevel >= 0, print error
			std::cout << "[Error]: " << message << std::endl;					// prints the message in the console
	};
	void Warn(const char* message) {							// Prints Warn message
		if (m_LogLevel >= LevelWarning)								// If m_LogLevel >= 1, print warn
			std::cout << "[Warn]: " << message << std::endl;					// prints the message in the console
	};
	void Info(const char* message) {							// Prints Info message
		if (m_LogLevel >= LevelInfo)								// If m_LogLevel >= 2, print info
			std::cout << "[Info]: " << message << std::endl;					// prints the message in the console
	};

};

int main() {									// Main function

	Log log;									// Instantiate Log Object "log"
	log.SetLevel(Log::LevelWarning);						// Set "logLevel" to "LevelWarning"
	log.Error("Hello World");							// Prints a erro message "Hello World"
	log.Warn("Hello World");							// Prints a warn message "Hello World"
	log.Info("Hello World");							// Prints a info message "Hello World"

	std::cin.get();									// Makes the code pause until the user press a key
}