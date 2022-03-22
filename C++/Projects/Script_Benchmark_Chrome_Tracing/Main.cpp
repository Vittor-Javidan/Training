#include <iostream>
#include <string>
#include <cmath>
#include <chrono>
#include <algorithm>
#include <fstream>

struct ProfileResult {

	std::string Name;
	long long Start, End;
};

struct InstrumentationSession {

	std::string Name;
};

class Instrumentor {
private:
	InstrumentationSession* m_CurrentSession;
	std::ofstream m_OutputStream;
	int m_ProfileCount;

public:
	Instrumentor()
		: m_CurrentSession(nullptr), m_ProfileCount(0)
	{}

	void BeginSession(const std::string& name, const std::string& filepath = "results.json") {

		m_OutputStream.open(filepath);
		WriteHeader();
		m_CurrentSession = new InstrumentationSession(name);
	}

	void EndSession() {

		WriteFooter();
		m_OutputStream.close();
		delete m_CurrentSession;
		m_CurrentSession = nullptr;
		m_ProfileCount = 0;
	}

	void WriteProfile(const ProfileResult& result) {

		if (m_ProfileCount++ > 0)
			m_OutputStream << ",";

		std::string name = result.Name;
		std::replace(name.begin(), name.end(), '"', '\'');

		m_OutputStream << "{";
		m_OutputStream << "\"cat\":\"function\",";
		m_OutputStream << "\"dur\":" << (result.End - result.Start) << ',';
		m_OutputStream << "\"name\":\"" << name << "\",";
		m_OutputStream << "\"ph\":\"X\",";
		m_OutputStream << "\"pid\":0,";
		m_OutputStream << "\"tid\":0,";
		m_OutputStream << "\"ts\":" << result.Start;
		m_OutputStream << "}";

		m_OutputStream.flush();
	}

	void WriteHeader() {

		m_OutputStream << "{\"otherData\": {},\"traceEvents\":[";
		m_OutputStream.flush();
	}

	void WriteFooter() {

		m_OutputStream << "]}";
		m_OutputStream.flush();
	}

	static Instrumentor& Get() {

		static Instrumentor* instance = new Instrumentor();
		return *instance;
	}
};

class Timer {
private:
	const char* m_Name;
	bool m_Stopped;
	std::chrono::time_point<std::chrono::steady_clock> m_StartTimepoint;

public:
	Timer(const char* name)
		: m_Name(name), m_Stopped(false)
	{
		m_StartTimepoint = std::chrono::high_resolution_clock::now();
	}

	void Stop() {

		auto endTimepoint = std::chrono::high_resolution_clock::now();

		long long start = std::chrono::time_point_cast<std::chrono::milliseconds>(m_StartTimepoint).time_since_epoch().count();
		long long end = std::chrono::time_point_cast<std::chrono::milliseconds>(endTimepoint).time_since_epoch().count();

		std::cout << m_Name << ": " << (end - start) << "ms \n";

		m_Stopped = true;
	}

	~Timer() {

		if (!m_Stopped) {
			Stop();
		}
	}
};

void Function1() {

	Timer time("Function1");

	for (int i = 0; i < 1000; i++)
		std::cout << "Hello World #" << i << std::endl;
}

void Function2() {

	Timer time("Function2");

	for (int i = 0; i < 1000; i++)
		std::cout << "Hello World #" << sqrt(i) << std::endl;
}

int main() {

	Function1();
	Function2();

	std::cin.get();
}