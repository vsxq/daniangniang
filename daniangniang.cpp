#include "daniangniang.h"
#include "room.h"
#include "string.h"
#include "sstream"
#include "iostream"
std::vector<player> players ;
room b;
bool daniangniang::run()
{
    return players[0].get_size()!=0&& players[1].get_size()!=0&& players[2].get_size()!=0;
}
void show(std::vector<poker> shangjia_pokers,int benjia_id)
{
    std::cout<<"玩家"<<benjia_id+1<<"剩余牌数为"<<players[benjia_id].get_size()<<std::endl;
    for(int i=0; i<shangjia_pokers.size(); i++)
    {
        std::cout<<"第"<<i+1<<"张牌"<<std::endl;
        std::cout<<shangjia_pokers[i].get_size()<<std::endl;
        std::cout<<shangjia_pokers[i].get_suit()<<std::endl;
        std::cout<<shangjia_pokers[i].get_index()<<std::endl;
        players[(benjia_id)%3].add_push_pokers_int_vector(shangjia_pokers[i].get_index());
    }
}
daniangniang::daniangniang()

{


    b.shuffle_pokers();

    players.push_back(player(0,"vsxq",b.get_players_pokers(0)));
    players.push_back(player(1,"mzx",b.get_players_pokers(1)));
    players.push_back(player(2,"wojiaxi",b.get_players_pokers(2)));
    //ctor
}
std::vector<std::string> daniangniang::get_all_poker(int id)
{
    std::vector<std::string> daniangniang_poker;
    for(int i=0; i<players[id].current_pokers.size(); i++)
    {
        std::ostringstream ss;
        daniangniang_poker.push_back(players[id].current_pokers[i].get_size());
        daniangniang_poker.push_back(players[id].current_pokers[i].get_suit());
        ss << players[id].current_pokers[i].get_index();
        //借助字符串流完成修改
        daniangniang_poker.push_back(ss.str());

    }
    return daniangniang_poker;
}
std::vector<std::string> daniangniang::get_string_poker(std::vector<int> player_one_inout)
{
    std::vector<std::string> daniangniang_poker;


    if(players[0].get_push_pokers_int_vector().size()!=0)
    {
        players[0].clear_push_pokers();
    }
    //解析player_one_parse
    for(int i=0; i<player_one_inout.size(); i++)
    {
        players[0].add_push_pokers_int_vector(player_one_inout[i]);
    }
    if(players[0].get_push_pokers_int_vector().size()!=0)
    {

        players[2].clear_push_pokers();
    }
    else
    {
        std::cout<<"一号玩家要不起"<<std::endl;
    }
    for(int i=0; i<2; i++)
    {


        std::vector<poker> players1_poker = players[i+1].send(players[i].get_push_pokers_int_vector());
        if(i+2==3)
        {
            daniangniang_poker.push_back("*");
        }
        if(players1_poker.size()!=0)
        {

            players[i].clear_push_pokers();


            for(int jj=0; jj<players1_poker.size(); jj++)
            {
                std::ostringstream sd;
                sd << players1_poker[jj].get_index();
                daniangniang_poker.push_back(players1_poker[jj].get_size());
                daniangniang_poker.push_back(players1_poker[jj].get_suit());
                daniangniang_poker.push_back(sd.str());
            }
            show(players1_poker,i+1);
        }
        else
        {
            //todo 塞入
            std::cout<<"上家出牌数"<<players[i].get_push_pokers_int_vector().size()<<std::endl;
            std::cout<<i+2<<"号玩家要不起"<<std::endl;

            daniangniang_poker.push_back("null");
        }

        std::cout<<"玩家"<<i+2<<"剩余牌"<<std::endl;
        players[i+1].show_current_poker();
    }

    return daniangniang_poker;




}
void daniangniang::xipai()
{
     b.shuffle_pokers();
     players.clear();
     players.push_back(player(0,"vsxq",b.get_players_pokers(0)));
    players.push_back(player(1,"mzx",b.get_players_pokers(1)));
    players.push_back(player(2,"wojiaxi",b.get_players_pokers(2)));

}



daniangniang::~daniangniang()
{
    //dtor
}



