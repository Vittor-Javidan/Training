#include <iostream>
#include <vector>

using std::cin;
using std::cout;
using std::endl;
using std::vector;
using std::swap;

bool ascendingCompare(int a, int b){
	return a < b;
};
bool descendingCompare(int a, int b){
	return a > b;
};

void customSort(vector<int>& numbersVector, bool (*compareFuncPrt)(int, int)){

	/*
		in the protorype of this function you will notice whatever function you
		pass an argument, will be store inside another function pointer for this scope.

		If you pass a function as an argument to "customSort", will be equivalent as:

			"bool (*compareFuncPrt)(int, int) = ascendingCompare" 

		for example. Or if you store the store function inside another function pointer 
		before pass as argument, willbe equivalent to:

			"bool (*compareFuncPrt)(int, int) = ascendingCompare
			 bool (*compareFuncPrt2)(int, int) = compareFuncPrt"

		thats because the function itself is an address too, and its equivalent as pointer too,
		and that means you can create many function pointers as you want and it will its working

	*/

	for (int startIndex = 0; startIndex < numbersVector.size(); startIndex++){

		int bestIndex = startIndex;

		for (int currentIndex = startIndex + 1; currentIndex < numbersVector.size(); currentIndex++){
			
			// We are doing comparison here
			if(compareFuncPrt(numbersVector[currentIndex], numbersVector[bestIndex]))
				bestIndex = currentIndex;
		};
		swap(numbersVector[startIndex], numbersVector[bestIndex]);
	};
};

void printNumbers(vector<int>& numbersVector){
	for(int i = 0; i < numbersVector.size(); i++)
		cout << numbersVector[i] << " ";
	cout << endl;
}

int main(){
	cout << "===========================================" << endl;

	vector<int> myNumbers = {2, 5, 1, 3, 6, 4};

	/*
		You can pass a function as an argument in both ways, through a 
		function pointer, or through the fuction itself, since in 
		the function prototype the function argument will already store
		the function inside another function pointer.
	*/

	bool (*funcPtr)(int, int) = ascendingCompare;
	bool (*funcPtr2)(int, int) = funcPtr;
	bool (*funcPtr3)(int, int) = funcPtr2;
	bool (*funcPtr4)(int, int) = funcPtr3;
	bool (*funcPtr5)(int, int) = funcPtr4;
	customSort(myNumbers, funcPtr5);
	printNumbers(myNumbers);

	customSort(myNumbers, descendingCompare);
	printNumbers(myNumbers);

	cout << "===========================================" << endl;
	return 0;
}
