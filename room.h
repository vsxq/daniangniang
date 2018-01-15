#ifndef ROOM_H
#define ROOM_H
#include "player.h"


class room
{
    public:
        room();
        virtual ~room();
        std::vector <poker> get_players_pokers(int player_id);
        void shuffle_pokers();

    protected:
        int room_id;
        std::vector <poker> all_pokers;

    private:
};

#endif // ROOM_H
