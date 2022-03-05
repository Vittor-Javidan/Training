#include <iostream>
#include <conio.h>
#include <windows.h>

using std::cout;
using std::endl;

bool gameOver;
const int width = 20;
const int height = 20;
int x, y, fruitX, fruitY, score;
int tailX[500], tailY[500];
int nTail;
enum eDirection { STOP = 0, LEFT, RIGHT, UP, DOWN};
eDirection dir;

void Setup(){
	gameOver = false;
	dir = STOP;
	x = width / 2;
	y = height / 2;
	fruitX = rand() % width;
	fruitY = rand() % height;
};

void Draw(){
	system("cls");

	cout << "SCORE: " << score << endl;
	cout << "x: " << x << "		y: " << y << endl;

	//Top Boundarie
	for(int i = 0; i < width; i++)
		cout << "# ";
	cout << endl;

	for(int i = 0; i < height; i++){
		for(int j = 0; j < width; j++){

			switch(j){

				//Left Boundarie
				case 0: 
					cout << "# "; 
					break;

				//Right Boundarie
				case (width - 1): 
					cout << "# "; 
					break;

				//Inner Scenario
				default:
					if (i == y && j == x)
						cout << "O ";
					else if (i == fruitY && j == fruitX)
						cout << "F ";
					else{
						bool print = false;
						for(int k = 0; k < nTail; k++){
							if(tailX[k] == j && tailY[k] == i){
								cout << "o ";	
								print = true;	
							}						
						}
						if(!print)
						cout << "  ";
					}
			}
		}
		cout << endl;
	}

	//Bottom Boundarie
	for(int i = 0; i < width; i++)
		cout << "# ";
	cout << endl;
};

void Input(){

	//Controls Input
	if (_kbhit()){
		switch(_getch()){
			case 'a':
				if(dir != RIGHT)
					dir = LEFT; 
				break;

			case 'd':
				if(dir != LEFT)
					dir = RIGHT; 
				break;

			case 'w':
				if(dir != DOWN)
					dir = UP; 
				break;

			case 's':
				if(dir != UP)
					dir = DOWN; 
				break;

			case 'x':
				gameOver = true;
				break;
		}
	}
};

void Logic(){

	int prevX = tailX[0];
	int prevY = tailY[0];
	int prev2X, prev2Y;
	tailX[0] = x;
	tailY[0] = y;

	//Tail construction
	for(int i = 1; i < nTail; i++){
		prev2X = tailX[i];
		prev2Y = tailY[i];
		tailX[i] = prevX;
		tailY[i] = prevY;
		prevX = prev2X;
		prevY = prev2Y;
	}

	//Controls Handler
	switch (dir){

		case LEFT:
			x--;
			break;
		case RIGHT:
			x++;
			break;
		case UP:
			y--;
			break;
		case DOWN:
			y++;
			break;
	}

	//Boundaries Colision
	if(x >= width - 1) x = 1;
	if(x <= 0) x = width - 2;
	if(y >= height) y = 0;
	if(y < 0) y = height - 1;

	for(int i =0; i < nTail; i++)
		if(tailX[i] == x && tailY[i] == y)
			gameOver = true;

	//Fruit Gattering
	if(x == fruitX && y == fruitY){
		nTail++;
		score += 10;
		fruitX = rand() % width;
		fruitY = rand() % height;
	}


};

int main(){

	Setup();

	while(!gameOver){

		Draw();
		Input();
		Logic();

		Sleep(5);
	}

	return 0;
}