#ifndef POKER_H
#define POKER_H
#include <string>




class poker
{
    public:
        poker(std::string this_poker_size,std::string this_poker_suit,int this_poker_index);
        virtual ~poker();
        std::string get_size();
        std::string get_suit();
        int get_index();


    protected:
        std::string size;
        std::string suit;
        int index;



    private:
};

#endif // POKER_H
