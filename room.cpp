#include "room.h"
#include <iostream>
#include<algorithm>
#include<time.h>

room::room()
{
    int index = 0;
    //设置随机数，以时间为单位
    srand(unsigned(time(NULL)));

    std::string poker_size[] = {"3","5","6","7","8","9","10","j","q","k","a","2","4"};
    std::string suit[] = {"spades","hearts","clubs","diamonds"};
        for(int i=0;i<13;i++){
        for(int j=0;j<4;j++){

                all_pokers.push_back(poker(poker_size[i],suit[j],index));
                index++;

        }
    }
    all_pokers.push_back(poker("joker","spades",52));
    all_pokers.push_back(poker("joker","hearts",53));
    std::random_shuffle(all_pokers.begin(),all_pokers.end());


}
std::vector<poker> room::get_players_pokers(int player_id){
std::vector<poker> current_player_pokers;
int begin = player_id*18;
int end = 18+begin;
for(int i=begin;i<end;i++){
    current_player_pokers.push_back(all_pokers[i]);
}

    return current_player_pokers;
}
void room::shuffle_pokers(){
std::random_shuffle(all_pokers.begin(),all_pokers.end());
}

room::~room()
{
    //dtor
}
