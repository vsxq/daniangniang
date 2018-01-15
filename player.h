#ifndef PLAYER_H
#define PLAYER_H
#include "poker.h"
#include <vector>
#include <algorithm>


class player
{
friend class daniangniang;
    public:
        player(int player_id,std::string this_player_name,std::vector<poker> this_player_pokers);
        virtual ~player();
        std::vector<poker>  send(std::vector<int> receive_pokers );
        std::vector<poker> send();
        int get_size();
        void add_push_pokers_int_vector(int index);
        void clear_push_pokers();
        std::vector<int> get_push_pokers_int_vector();
        void show_current_poker();


    private:
        int player_id;
        std::string play_name;
        std::vector<poker> current_pokers;
        std::vector<int> push_pokers_int_vector;
};

#endif // PLAYER_H
