#include<iostream>
#include<vector>
#include "poker.h"
#include "player.h"
#include "room.h"
#include "daniangniang.h"




int main()
{
    daniangniang a ;
    std::vector<std::string> test1 =a.get_all_poker(0);

    std::cout<<"开始测试"<<std::endl;
    //获取玩家
    for(int i=0;i<test1.size();i++){
        std::cout<<test1[i]<<std::endl;
    }
    //出牌为
    std::vector<int> test2;
    while(a.run()){
            test2.clear();
            int count;
            int number;
            std::cin>>count;
            for(int i=0;i<count;i++){
                std::cin>>number;
                test2.push_back(number);
            }
            std::vector<std::string> test_receive_poker = a.get_string_poker(test2);
            for(int j6=0;j6<test_receive_poker.size();j6++){
                std::cout<< test_receive_poker[j6] <<std::endl;
            }


    }






}






//poker[3];

