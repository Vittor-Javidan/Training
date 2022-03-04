#include <iostream>
#include <array>

using std::cout;
using std::endl;

void getMinAndMax(int numbers[], int numbers_Length,int* min, int* max){

	for (int i = 0; i < numbers_Length; i++){
		if(numbers[i] > *max)
			*max = numbers[i];
		if(numbers[i] < *min)
			*min = numbers[i];
	};
};

int main(){
	cout << "===========================================" << endl;

	int numbers[5] = {5, 4, -2, 29, 6};
	int numbers_Length = sizeof(numbers)/sizeof(numbers[0]);
	int min = numbers[0];
	int max = numbers[0];

	getMinAndMax(numbers, numbers_Length, &min, &max);
	
	cout << "Max number is: " << max << endl;
	cout << "Min number is: " << min << endl;

	cout << "===========================================" << endl;
	return 0;
}