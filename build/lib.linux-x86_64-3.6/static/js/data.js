//捕捉所有数据
var get_poker_url = "/poker"
var get_user_grade_url = "/get_card"
cards = new Array()
function parse_poker() {

}
function get_data() {
    return fetch(get_poker_url, {
        method: 'get',

    }).then(function (response) {
        return response.json();
    }
        ).then(function (data) {
            console.log(data)

            player_0_pokers = data.play0
            player_1_pokers = data.play1
            player_2_pokers = data.play2

            drawCard()

        })


}
function get_poker(publish_pokers) {
    var str = "?index="
    if (arguments.length == 0) {
        str = str + "-1"
    }
    else {

        for (var k0 = 0; k0 < publish_pokers.length; k0++) {
            if (k0 == publish_pokers.length - 1) {
                str = str + publish_pokers[k0].index
            }
            else {
                str = str + publish_pokers[k0].index + ","
            }
        }
    }
    fetch(get_user_grade_url + str, {
        method: 'get',
    }).then(function (response) {
        return response.json();
    }
        ).then(function (data) {
            //console.log(data)
            //解析parse函数
            //parse_poker()
            if (data.status == "over") {
                alert("游戏结束")
            }
            else{
            poker1 = data.player1.result
            poker2 = data.player2.result
            if (poker1 == "null") { poker1 = new Array() }
            if (poker2 == "null") { poker2 = new Array() }
            drawCard()}
        })

}