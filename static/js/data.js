//捕捉所有数据
var get_poker_url = "/poker"
var get_user_grade_url = "/plays_name?room="
cards = new Array()
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
function get_user_grade_data(room) {
    return fetch(get_user_grade_url+room, {
        method: 'get',
        credentials: "include"
    }).then(function (response) {
            return response.json();
        }
    ).then(function (data) {
        console.log(data)

    })

}