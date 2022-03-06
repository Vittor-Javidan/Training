#include <iostream>
#include <memory>

using std::cout;
using std::endl;
using std::weak_ptr;
using std::shared_ptr;
using std::make_shared;

int main(){
	cout << "===========================================" << endl;

	weak_ptr<int> wePtr_1;
	{
		shared_ptr<int> shPtr_1 = make_shared<int>(25);
		wePtr_1 = shPtr_1;
	}

	cout << "===========================================" << endl;
	return 0;
}