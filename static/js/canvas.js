var img = new Image()
var back = new Image()
var canvas = document.getElementById("myowncanvas")
var canvas1 = canvas.getContext('2d')
//导入出牌按钮
var back = new Image()

img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAdCAIAAACMkBMGAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA6ElEQVR42u2W0Q2EIAyGdSO3gBXcwAVY4AZgCkZxCIfw2de7P9ekaWiumlMMuaMPBFqqX/5SQvesz7rG1JgaU/1M8zx779d1tbc93mZ7vmfKvpUxbds2TVNKiaNYwpllYf84jsuyVMGEsVc2DIPBdwcTRTm0q9l/MMkaUW6R2vV7pnWS6RTFeJlO9l3wqXaaifUuzqSjsnBF+g6ZzjmZr5m4KFInOPkUkpa8PKvTeSZMIAz8ND9ylV/MJFFCCPAbnUGgxZlkl2lJLtMJ53H3LtBNXpDpiLFOoIkxGr+/j6m96RpTY/oBphckKP9leAV1+wAAAABJRU5ErkJggg=="
canvas1.drawImage(img, 300, 430)
//canvas1.drawPokerCard(100, 100, 120, "spades", 3)
fucks = []
aa = []
function drawCard() {
    console.log(player_0_pokers)
    canvas1.drawImage(back, 0, 0)
    canvas1.drawImage(img, 908, 217)

    //比较画派
    for (var i2 = 0; i2 < player_0_pokers.length; i2++) {
        var up_down = 0
        for (var i3 = 0; i3 < fucks.length; i3++) {
            if (i2 == fucks[i3]) {
                up_down = 1
            }
        }
        if (up_down == 1) {
            //***
            canvas1.drawPokerCard(10 + (i2 + 1) * 50, 400 - 50, 120, player_0_pokers[i2].suit, player_0_pokers[i2].size)
        }
        else {
            //***
            canvas1.drawPokerCard(10 + (i2 + 1) * 50, 400, 120, player_0_pokers[i2].suit, player_0_pokers[i2].size)
        }
    }
    for (var i7 = 0; i7 < aa.length; i7++) {
        canvas1.drawPokerCard(769 + (i7 + 1) * 50, 400 - 50, 120, aa[i7].suit, aa[i7].size)
    }

}
function up(index) {
    var status = 0


    if (arguments.length != 0) {
        //生成状态
        for (var i1 = 0; i1 < fucks.length; i1++) {
            if (fucks[i1] == index) {
                status = 1
                break;
            }

        }
        if (status == 0) {
            fucks.push(index)
        }


    }
    drawCard()


    return status
}
function down(index, status) {
    //状态判断
    if (status == 1) {
        for (var i4 = 0; i4 < fucks.length; i4++) {
            if (fucks[i4] == index) {
                fucks.splice(i4, 1)
                break
            }
        }
        drawCard()
    }
}
function remove() {
    var aa = []
    //生产aa数组
    //debugger;
    fucks.sort()
    for (var i6 = 0; i6 < fucks.length; i6++) {
        var old_card = {"suit": player_0_pokers[fucks[i6]].suit, "size": player_0_pokers[fucks[i6]].size}
        aa.push(old_card)

    }
    for (var i5 = 0; i5 < fucks.length; i5++) {

        player_0_pokers.splice(fucks[i5], 1)
        //长度变化，相应减1
        for (var i8 = 0; i8 < fucks.length; i8++) {
            fucks[i8] -= 1
        }
    }
    fucks = []
    drawCard()


}





