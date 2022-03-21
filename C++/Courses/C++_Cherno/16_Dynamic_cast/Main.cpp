#include <iostream>                                                                         // Copy and paste everything from iostream library into this file

class Entity {};                                                                            // Class Entity, used to represent a class to inherith from
class Player : public Entity {};                                                            // Class Player, wich inherit from Entity
class Enemy : public Entity {};                                                             // Class Enemy, wich inherit form Entity

int main() {                                                                                // Main Function

	Player player;                                                                              // Player instantiation on stack memory
	Enemy enemy;                                                                                // Enemy instantiation on stack memory

	Entity* actuallyPlayer = &player;                                                           // Entity pointer pointing to player address
	Entity* actuallyEnemy = &enemy;                                                             // Entity pointer pointing to enemy address

	dynamic_cast<Player*>(actuallyEnemy)                                                        // If actuallyEnemy is a Player class, dynamic cast will cast it to Player class and return a Player pointer to the instance address
		? std::cout << "actallyEnemy do bellong Player class" << std::endl                          // Prints in case actuallyEnemy is a Player class
		: std::cout << "actuallyEnemy do not bellong Player class" << std::endl;                    // Prints in case actuallyEnenmy is not a Player class

	dynamic_cast<Player*>(actuallyPlayer)                                                       // If actuallyPlaayer is a Player class, dynamic cast will cast it to Player class and return a Player pointer to the instance address
		? std::cout << "actuallyplayer do bellong Player class" << std::endl                        // Prints in case actuallyPlayer is a Player class
		: std::cout << "actuallyPlayer do not bellong Player class" << std::endl;                   // Prints in case actuallyPlayer is not a Player class
}