#include <iostream>

using std::cin;
using std::cout;
using std::endl;

int main(){
	cout << "===========================================" << endl;

	int rows, cols;
	cout << "rows, cols: ";
	cin >> rows >> cols;

	//Declaring rows and cols
	int** table = new int* [rows];
	for(int i = 0; i < rows; i++){
		table[i] = new int [cols];
	};

	//Assing values to rows and cols
	for(int i = 0; i < rows; i++){
		for(int j = 0; j < cols; j++){
			table[i][j] = i * j;
		}
	};

	//Displaying on console values of rows[cols]
	for(int i = 0; i < rows; i++){
		for(int j = 0; j < cols; j++){
			cout << table[i][j] << " ";
		}
		cout << endl;
	};

	cout << "===========================================" << endl;
	//Dealocating memory
	for(int i = 0; i < rows; i++){
		delete[] table[i]; table[i] = NULL;
	}
	delete[] table; table = NULL;

	return 0;
}