#ifndef PLAYER_H
#define PLAYER_H

#include <string>
#include <iostream>
#include <string_view>
#include "person.h"

class Player : public Person
{
   friend std::ostream& operator<<(std::ostream& out, const Player& player);

   std::string m_game {"none"};

public:
   Player() = default;
   Player(
      std::string_view game_param, 
      std::string_view first_name_param, 
      std::string_view last_name_param
   );
};

#endif