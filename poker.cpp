#include "poker.h"

poker::poker(std::string this_poker_size,std::string this_poker_suit,int this_poker_index)
{
    size =this_poker_size;
    suit =this_poker_suit;
    index = this_poker_index;
}

poker::~poker()
{

}
std::string poker::get_size()
{
    return size;
}
std::string poker::get_suit()
{
    return suit;
}
int poker::get_index()
{
    return index;
}

