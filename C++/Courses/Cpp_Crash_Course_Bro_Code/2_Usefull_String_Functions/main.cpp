// string.lenght() ---------------------------------------------------------------------------

#include <iostream>
#include <string>

using namespace std;

int main(){

   //GetLine(cin, variable): Use "std::cin to get a full line input (including whitespaces)
	//string.lenght(): Return the string lenght

	string first_name;

	cout << "Enter your first name: ";
	getline(cin, first_name);

	int length = first_name.length();

	length >= 12
		? cout << "Your name can't be over 12 characters long"
		: cout << "Welcome " << first_name << endl;

   return 0;
}

// string.clear()-----------------------------------------------------------------------------

#include <iostream>
#include <string>

using namespace std;

int main(){
   
   string first_name = "Spongebob Squarepants";

   cout << "Welcome " << first_name << endl;

   // string.clear(): clear a string
   first_name.clear();

	cout << "Your name has been cleared" << endl;
	cout << "Welcome " << first_name << endl;

   return 0;
}

// string.append(string value)------------------------------------------------------------------

#include <iostream>
#include <string>

using namespace std;

int main(){
	
	string user_name;

	cout << "Enter your username: ";
	getline(cin, user_name);

   //string1.append(string2): appends a string
	string email = user_name.append("@gmail.com"); 

	cout << "Your email is now: " << email << endl;

   return 0;
}

// string.at(int index)---------------------------------------------------------------------------

#include <iostream>
#include <string>

using namespace std;

int main() {

	string first_name;
	string middle_name;
	string last_name;
	
	cout << "Enter your first name: ";
	getline(cin, first_name);
	cout << "Enter your middle name: ";
	getline(cin, middle_name);
	cout << "Enter your last name: ";
	getline(cin, last_name);

   // string.at(i): returns a char letter at the index i
	char letter1 = first_name.at(0); 
	char letter2 = middle_name.at(0);
	char letter3 = last_name.at(0);

	cout 
		<< "Your initials is : "
		<< letter1
		<< letter2
		<< letter3
		<< endl;

	return 0;
}

// string.substr(int start_index, int lenght)----------------------------------------------------

#include <iostream>
#include <string>

using namespace std;

int main() {

	string first_name;

	cout << "Enter your first name: ";
	getline(cin, first_name);

	// string.substr(start_index, lenght) retrieve a portion of the string
	string nickname = first_name.substr(0, 3);	

	cout << "Your nickname is: " << nickname << endl;
	cout << "Hello " << nickname << endl;

	return 0;
}

// string.insert(int index, string value)------------------------------------------------------

#include <iostream>
#include <string>

using namespace std;

int main()
{
	string user_name;

	cout << "Enter your user_name: ";
	getline(cin, user_name);

	// string.insert(index, value): Insert a string on a chose index
	user_name.insert(0, "@");

	cout << "reply: " << user_name << endl;

	return 0;
}

// string.find(string value)--------------------------------------------------------------------

#include <iostream>
#include <string>

using namespace std;

int main()
{
	string first_name;
	cout << "Enter your first name: ";
	getline(cin, first_name);

	string substring;
	cout << "Search for which character/s?: ";
	getline(cin, substring);

	// string1.find(string2): returns index of string2
	int position = first_name.find(substring);

	cout << "Found characters at position: " << position << endl;

	return 0;
}

// string.erase(int start_index, int lenght)----------------------------------------------------

#include <iostream>
#include <string>

using namespace std;

int main()
{
	string phone_number;
	cout << "Enter your phone number: ";
	getline(cin, phone_number);

	//string.erase(start_index, lenght)
	phone_number.erase(0, 4);

	cout << "phone number: " << phone_number << endl;

	return 0;
}