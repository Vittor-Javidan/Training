#include <iostream>							// Copy and paste everything inside iostream header file

struct Vector2 {							// struct to represent a vector with 2 dimensions
	float x, y;								// vector coordinates
};

struct Vector4 {							// struct to represent a vector wuth 4 dimensions

	union{									// the union will allow us to represent 2 groups of data with different types using the same memory addres
		struct {								//struct containing the first variable group
			float x, y, w, z;							// vector coordinates
		};
		struct {								// struct containing the second variable group 
			Vector2 a, b;								// subvectors
		};
	};
};

void PrintVector2(const Vector2& vector) {				// Function responsible to print the coordinates of a 2 dimensional vector

	std::cout << vector.x << ", " << vector.y << std::endl;			// prints the coordnates
}

int main() {								// Main function

	Vector4 vector = {1.0f, 2.0f, 3.0f, 4.0f};				// assingment of a Vector 4 instance vector
	PrintVector2(vector.a);							// Prints the vector a information from our vector 4
	PrintVector2(vector.b);							// Prints the vector b information from our vector 4
}