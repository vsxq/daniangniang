#include "player.h"
#include <iostream>
#include <algorithm>
extern  std::vector<player> players;

bool compare_index(poker a,poker b)
{
    return a.get_index()<b.get_index();
}
player::player(int this_player_id,std::string this_player_name, std::vector<poker> this_player_pokers)
{
    player_id= this_player_id;
    play_name = this_player_name;

    sort(this_player_pokers.begin(),this_player_pokers.end(),compare_index);
    for(auto poker:this_player_pokers)
    {
        std::cout<<poker.get_index()<<"  "<<poker.get_size()<<std::endl;

    }
    current_pokers = this_player_pokers;

}


player::~player()
{
    //dtor
}
std::vector<poker> player:: send(std::vector<int> receive_pokers )
{

    std::vector<poker> send_index;
    if (receive_pokers.size()==0)
        //上家出牌为空
    {

        std::cout<<"上家为空"<<std::endl;
        if(push_pokers_int_vector.size()!=0)
        {

            //说明没人管的上，出新牌


            if(current_pokers[0].get_index()!=53&&current_pokers[0].get_index()!=52)
            {

                int temp_value = current_pokers[0].get_index()/4;

                std::cout<<temp_value<<std::endl;
                for(int i=0; i<5; i++)
                {
                    if(current_pokers[i].get_index()/4==temp_value)
                    {
                        send_index.push_back(current_pokers[i]);

                    }
                    else
                    {
                        break;
                    }

                }
            }
            else
            {
                send_index.push_back(current_pokers[0]);
            }


            clear_push_pokers();
        }
        else
        {

            //todo
            for(int i=0; i<players.size(); i++)
            {
                if(players[i].get_push_pokers_int_vector().size()!=0)
                {
                    return send(players[i].get_push_pokers_int_vector());
                }
            }
        }
    }
    else
    {

        if(receive_pokers[0]!=53&&receive_pokers[0]!=52)
        {
            sort(receive_pokers.begin(),receive_pokers.end());
            int old_poker_size=receive_pokers[0]/4;
            int old_poker_length=receive_pokers.size();
            int t=0;
            int s =0;
            for(int k1; k1<current_pokers.size(); k1++)
            {


                if(current_pokers[k1].get_index()/4>old_poker_size)
                {

                    s =current_pokers[k1].get_index()/4;
                    t=0;
                    int end12=k1+5;
                    if(end12>=current_pokers.size())
                    {
                        end12 = current_pokers.size();
                    }

                    for(int k2=k1; k2<end12; k2++)
                    {
                        if(current_pokers[k2].get_index()/4==s)
                        {
                            t++;

                        }
                        if(t==old_poker_length)
                        {



                            for(int d1 =0; d1<t; d1++)
                            {
                                send_index.push_back(current_pokers[k2-d1]);
                            }

                            for(auto delete_item:send_index)
                            {
                                for(int j=0; j<current_pokers.size(); j++)
                                {
                                    if(current_pokers[j].get_index()==delete_item.get_index())
                                    {
                                        current_pokers.erase(current_pokers.begin()+j);
                                        break;
                                    }
                                }

                            }

                            return send_index;
                        }

                    }
                }





            }

        }
        else
        {
            if(receive_pokers[0]==52)
            {
                if(current_pokers[current_pokers.size()-1].get_index()==53)
                {
                    send_index.push_back(current_pokers[current_pokers.size()-1]);
                }
            }
        }

    }
    for(auto delete_item:send_index)
    {
        for(int j=0; j<current_pokers.size(); j++)
        {
            if(current_pokers[j].get_index()==delete_item.get_index())
            {
                current_pokers.erase(current_pokers.begin()+j);
                break;
            }
        }

    }

    return send_index;
}
int player::get_size()
{
    return current_pokers.size();
}
std::vector<int> player::get_push_pokers_int_vector()
{
    return push_pokers_int_vector;
}
void player::add_push_pokers_int_vector(int index)
{
    push_pokers_int_vector.push_back(index);
}
void player::clear_push_pokers()
{
    push_pokers_int_vector.clear();
}
void  player::show_current_poker()
{
    for(int i=0; i<current_pokers.size(); i++)
    {
        std::cout<<current_pokers[i].get_index()<<"  "<<current_pokers[i].get_size()<<std::endl;
    }
}

