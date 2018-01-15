#ifndef DANIANGNIANG_H
#define DANIANGNIANG_H
#include <vector>
#include <string>


class daniangniang
{
    public:
        daniangniang();
        virtual ~daniangniang();
        std::vector<std::string> get_string_poker(std::vector<int> player_one_inout);
        std::vector<std::string> get_all_poker(int id);
        bool run();
        void xipai();

    protected:

    private:
};

#endif // DANIANGNIANG_H
