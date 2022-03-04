#include <iostream>
#include <array>

using std::cout;
using std::endl;

void getMinAndMax(int numbers_array[], int size,int* min, int* max){

	for (int i = 0; i < size; i++){
		if(numbers_array[i] > *max)
			*max = numbers_array[i];
		if(numbers_array[i] < *min)
			*min = numbers_array[i];
	};
};

int main(){
	cout << "===========================================" << endl;

	int numbers[5] = {5, 4, -2, 29, 6};
	int min = numbers[0];
	int max = numbers[0];

	getMinAndMax(numbers, sizeof(numbers)/4, &min, &max);
	
	cout << "Max number is: " << max << endl;
	cout << "Min number is: " << min << endl;

	cout << "===========================================" << endl;
	return 0;
}