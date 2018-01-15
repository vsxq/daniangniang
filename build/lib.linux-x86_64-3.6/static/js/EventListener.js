; (function (window) {
    window.G = {};
    function bindEvent(obj, event, fn) {
        if (obj.attachEvent) {
            obj.attachEvent('on' + event, function () {
                fn.call(obj);
            });
        } else {
            obj.addEventListener(event, fn, false);
        }
    }

    G.getPos = function (dom) {
        var oPos = { x: 0, y: 0 };
        bindEvent(dom, 'mousemove', function (ev) {
            var oEvent = ev || event, x, y;
            if (oEvent.pageX || oEvent.pageY) {
                x = oEvent.pageX;
                y = oEvent.pageY;
            } else {
                x = oEvent.clientX + document.body.scrollLeft || document.documentElement.scrollLeft;
                y = oEvent.clientX + document.body.scrollTop || document.documentElement.scrollTop;
            }
            x -= dom.offsetLeft;
            y -= dom.offsetTop;
            oPos.x = x;
            oPos.y = y;
        });
        return oPos;
    };

})(window);

var beginX = 150
oPos = G.getPos(canvas);
var Info = document.getElementById("tool")
//delete测试数组


//显示鼠标在canvas上的位置
canvas.addEventListener("mousemove", function (event) {
    Info.innerHTML = "x坐标" + oPos.x + "   y坐标" + oPos.y
})
//点击事件判断
canvas.addEventListener("click", function (event) {
    //***y区域
    if (oPos.y > 600 && oPos.y < 710) {

        if (player_0_pokers.length == 1) {
            //***微调
            if (oPos.x > beginX && oPos.x < beginX + 90) {
                down(0, up(0))
            }
        }
        if (player_0_pokers.length == 0) {
            alert("赢了")
        }
        if (player_0_pokers.length >= 2) {
            for (var i11 = 0; i11 < player_0_pokers.length - 1; i11++) {

                if (oPos.x > beginX + i11 * 50 && oPos.x < beginX + 40 + i11 * 50) {
                    // alert("12")
                    down(i11, up(i11))
                }
            }
            if (oPos.x > (player_0_pokers.length - 1) * 50 + beginX && oPos.x < (player_0_pokers.length - 1) * 50 + beginX + 84) {
                //alert(player_0_pokers.length-1)
                down(player_0_pokers.length - 1, up(player_0_pokers.length - 1))
            }
        }


    }//***出牌按钮实际区域
    if (oPos.y > 498 && oPos.y < 527 && oPos.x > 696 && oPos.x < 746) {
        remove()
        get_poker(aa)
        status =1
        

    }
    if (oPos.y > 500 && oPos.y < 530 && oPos.x > 550 && oPos.x < 597) {
        get_poker()
        aa=[]
    }
})