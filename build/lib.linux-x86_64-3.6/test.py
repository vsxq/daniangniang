import example
from flask import Flask, render_template, jsonify, request,redirect
app = Flask(__name__)
game = example.daniangniang()
count = False


def parse_list(old_list):
    dd = {}
    if(old_list[0] == "null"):
        dd["result"] = "null"
        return dd
    l = []
    for i in range(0, len(old_list), 3):
        one_poker = {}
        one_poker["size"] = old_list[i]
        one_poker["suit"] = old_list[i + 1]
        one_poker["index"] = old_list[i + 2]
        l.append(one_poker)
    dd["result"] = l
    return dd


@app.route("/")
def welcome():
    return render_template("index.html")
@app.route("/xipai")
def xipai():
    game.xipai()
    return redirect("/")

@app.route("/poker")
def get_poker():
   
    
    pokers = {}
    for i in range(0, 3):
        all_poker = game.get_all_poker(i)
        l = []
        for j in range(0, len(all_poker), 3):
            d = {}
            d["size"] = all_poker[j]
            d["suit"] = all_poker[j + 1]
            d["index"] = all_poker[j + 2]
            l.append(d)
        pokers["play{}".format(i)] = l
    return jsonify(pokers)


@app.route("/get_card")
def get_card():
    chupai_poker = {}
    if not game.run():
        chupai_poker["status"] = "over"
        return jsonify(chupai_poker)
    if "index" in request.args:
        index = request.args["index"]
        index = index.split(",")
        if index[0] == "-1":
            chudebai = game.get_string_poker([])
        else:
            really_index = list(map(int, index))
            chudebai = game.get_string_poker(really_index)
        print(chudebai)

        for i in range(len(chudebai)):
            if chudebai[i] == "*":
                player1 = chudebai[0:i]
                player2 = chudebai[i + 1:]
                break
        chupai_poker["status"] = "runing"
        chupai_poker["player1"] = parse_list(player1)
        chupai_poker["player2"] = parse_list(player2)
    return jsonify(chupai_poker)


app.run("0.0.0.0", debug=True)
