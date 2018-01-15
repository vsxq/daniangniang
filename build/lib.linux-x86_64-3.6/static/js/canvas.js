var img = new Image()
var buchu_img = new Image()
var back = new Image()
var canvas = document.getElementById("myowncanvas")
var canvas1 = canvas.getContext('2d')
//导入出牌按钮
var back = new Image()
var poker1 = new Array()
var poker2 = new Array()
var status =0
buchu_img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAfCAIAAAD1IXMRAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA1ElEQVR42u2Wyw3DIBBEnY7cBZTiBmggBXDnTikUQRGcuSYjr4SI+NgmwbnsHCzLxvNYhrVYXv/TwmxmM3tAz12X2dbax2lt2xZjDCFIKZ1zLbb3XgiB60jd5I5pdd7OYsMot76PTSl08pvFhqMxBrnezcZorTV2E7Hhvq5raUHs/q6sfthkY6hSKu5KdeMhXEAC73yPXasbGVP/4D5npyBSg/2yv4mU+5bsBKAFyCdaZZNDtUU/2CWmxa4u0lfsUszu/nwONYV9qPG6+ezAbGYze0hvGkqzr6/nzXUAAAAASUVORK5CYII="
img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAdCAIAAACMkBMGAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA6ElEQVR42u2W0Q2EIAyGdSO3gBXcwAVY4AZgCkZxCIfw2de7P9ekaWiumlMMuaMPBFqqX/5SQvesz7rG1JgaU/1M8zx779d1tbc93mZ7vmfKvpUxbds2TVNKiaNYwpllYf84jsuyVMGEsVc2DIPBdwcTRTm0q9l/MMkaUW6R2vV7pnWS6RTFeJlO9l3wqXaaifUuzqSjsnBF+g6ZzjmZr5m4KFInOPkUkpa8PKvTeSZMIAz8ND9ylV/MJFFCCPAbnUGgxZlkl2lJLtMJ53H3LtBNXpDpiLFOoIkxGr+/j6m96RpTY/oBphckKP9leAV1+wAAAABJRU5ErkJggg=="
//canvas1.drawImage(img, 300, 430)
//canvas1.drawPokerCard(100, 100, 120, "spades", 3)
fucks = []
aa = []
function drawCard() {

    canvas1.drawImage(back, 0, 0)
    canvas1.drawImage(img, 697, 500)
    canvas1.drawImage(buchu_img, 556, 500)
    if(poker1.length==0&&status ==1){
        canvas1.drawImage(buchu_img, 125, 12)
    }
    for (var f1 = 0; f1 < poker1.length; f1++) {
        canvas1.drawPokerCard(125, 12 + (f1 + 1) * 30, 50, poker1[f1].suit, poker1[f1].size);
        for (var f3 = 0; f3 < player_1_pokers.length; f3++) {
            if (player_1_pokers[f3].index == poker1[f1].index) {
                player_1_pokers.splice(f3, 1)
                break;
            }
        }
    }
    if(poker2.length==0&&status==1){
        canvas1.drawImage(buchu_img, 1105, 12)
    }

    for (var f2 = 0; f2 < poker2.length; f2++) {
        canvas1.drawPokerCard(1105, 12 + (f2 + 1) * 30, 50, poker2[f2].suit, poker2[f2].size);
        for (var f4 = 0; f4 < player_2_pokers.length; f4++) {
            if (player_2_pokers[f4].index == poker2[f2].index) {
                player_2_pokers.splice(f4, 1)
                break;
            }
        }
    }


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
            canvas1.drawPokerCard(110 + (i2 + 1) * 50, 600 - 50, 120, player_0_pokers[i2].suit, player_0_pokers[i2].size)
        }
        else {
            //***
            canvas1.drawPokerCard(110 + (i2 + 1) * 50, 600, 120, player_0_pokers[i2].suit, player_0_pokers[i2].size)
        }
    }
    for (var j4 = 0; j4 < player_1_pokers.length; j4++) {
        canvas1.drawPokerCard(30, 10 + (j4 + 1) * 30, 50, player_1_pokers[j4].suit, player_1_pokers[j4].size);
    }
    for (var j5 = 0; j5 < player_2_pokers.length; j5++) {
        canvas1.drawPokerCard(1210, 10 + (j5 + 1) * 30, 50, player_2_pokers[j5].suit, player_2_pokers[j5].size);
    }

    for (var i7 = 0; i7 < aa.length; i7++) {

        canvas1.drawPokerCard(480 + (i7 + 1) * 50, 400 - 50, 120, aa[i7].suit, aa[i7].size)
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
    aa = []
    //生产aa数组
    //debugger;

    fucks.sort()
    for (var i6 = 0; i6 < fucks.length; i6++) {
        var old_card = { "suit": player_0_pokers[fucks[i6]].suit, "size": player_0_pokers[fucks[i6]].size, "index": player_0_pokers[fucks[i6]].index }
        aa.push(old_card)

    }

    console.log(aa.length)
    for (var i5 = 0; i5 < fucks.length; i5++) {

        player_0_pokers.splice(fucks[i5], 1)
        //长度变化，相应减1
        for (var i8 = 0; i8 < fucks.length; i8++) {
            fucks[i8] -= 1
        }
    }
    fucks = []
   // drawCard()


}





