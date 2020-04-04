

$(function () {
    // 播放器
    $(".hide2").css({"background-color": "rgb(247, 147, 30)"});
    $(".hide2").mouseover(function () {
        $(".hide2").css({"background-color": "rgba(247, 147, 30,.7)"});
    }).mouseout(function () {
        $(".hide2").css({"background-color": "rgb(247, 147, 30)"});
    });
    var myVideo = document.getElementsByTagName('video')[1];
///myVideo.pause();
    $(".tx").hide();
    $(".closeVideo").hide();

    $(".ideo1").click(function () {
        $(".tx").show();
        $(".closeVideo").show();
        myVideo.play();
    });
    $(".closeVideo").click(function () {
        $(".tx").hide();
        $(".closeVideo").hide();
        myVideo.pause();
    });

    // 图片变换切换
    var $img = new Array("05.jpg", "06.jpg", "07.jpg");
    var i = 0;
    $(".innerImageBox").css({"background": "url('imag/" + $img[i] + "') no-repeat", "height": "690px"});
    function showTime() {
        if (i < $img.length - 1) {
            i++;
        } else {
            i = 0;
        }
        $(".innerImageBox").css({"background": "url('imag/" + $img[i] + "') no-repeat", "height": "690px"});
    }

//这里有问题
  // setInterval("showTime()", "6000");

    $(".m-lg").css({"background-color": "rgb(247, 147, 30)"});
    $(".m-lg").mouseover(function () {
        $(".m-lg").css({"background-color": "rgba(247, 147, 30,.7)"});
    }).mouseout(function () {
        $(".m-lg").css({"background-color": "rgb(247, 147, 30)"});
    });

    var img = document.getElementById("axi");
    $(".xiao a imag").mouseover(function () {
        $(this).css({"background-color": "rgb(247, 147, 30)"});
    }).mouseout(function () {
        $(this).css({"background-color": "rgba(247, 147, 30,.1)"});
    });
    $("#x1").mouseover(function () {
        $("#axi").css({"width": "400px", "height": "450px"});
        $(img.setAttribute("src", "imag/q1.png"));
        $(document.getElementById("spanOne").innerHTML = "D.Va");
        $(document.getElementById("spanTwo").innerHTML = "一名前职业玩家，而现在则利用自己的技巧驾驶一台尖端机甲包围国家。");
    }).mouseout(function () {
        $("#axi").css({"width": "400px", "height": "450px"});
    });
    $("#x2").mouseover(function () {
        $("#axi").css({"width": "400px", "height": "450px"});
        $(img.setAttribute("src", "imag/q2.png"));
        $(document.getElementById("spanOne").innerText = "奥丽莎");
        $(document.getElementById("spanTwo").innerText = "维护努巴尼秩序并保护努巴尼人民的维和机器人。");
    }).mouseout(function () {
        $("#axi").css({"width": "400px", "height": "450px"});
    });
    $("#x3").mouseover(function () {
        $("#axi").css({"width": "400px", "height": "450px"});
        $(img.setAttribute("src", "imag/q3.png"));
        $(document.getElementById("spanOne").innerText = "莱茵哈特");
        $(document.getElementById("spanTwo").innerText = "一名属于过去的勇士，时刻铭记着骑士的信条：无畏丶公正丶无私。");
    }).mouseout(function () {
        $("#axi").css({"width": "400px", "height": "450px"});
    });
    $("#x4").mouseover(function () {
        $("#axi").css({"width": "400px", "height": "450px"});
        $(img.setAttribute("src", "imag/q4.png"));
        $(document.getElementById("spanOne").innerText = "路霸");
        $(document.getElementById("spanTwo").innerText = "一名残暴的杀手丶因残忍和肆意破坏而臭名昭著。");
    }).mouseout(function () {
        $("#axi").css({"width": "400px", "height": "450px"});
    });
    $("#x5").mouseover(function () {
        $("#axi").css({"width": "400px", "height": "450px"});
        $(img.setAttribute("src", "imag/q5.png"));
        $(document.getElementById("spanOne").innerText = "温斯顿");
        $(document.getElementById("spanTwo").innerText = "一只经过改造，拥有高等智慧的大猩猩，也是一位出色的科学家和代表着人类潜力的勇士。");
    }).mouseout(function () {
        $("#axi").css({"width": "400px", "height": "450px"});
    });


    $("#x6").mouseover(function () {
        $("#axi").css({"width": "300px", "height": "450px"});
        $(img.setAttribute("src", "imag/q6.png"));
        $(document.getElementById("spanOne").innerText = "查里雅");
        $(document.getElementById("spanTwo").innerText = "世界上最强壮的女性之一。为了保卫祖国，毅然放弃了个人荣誉。");
    }).mouseout(function () {
        $("#axi").css({"width": "300px", "height": "450px"});
    });
    $("#x7").mouseover(function () {
        $("#axi").css({"width": "400px", "height": "450px"});
        $(img.setAttribute("src", "imag/q7.png"));
        $(document.getElementById("spanOne").innerText = "破坏球");
        $(document.getElementById("spanTwo").innerText = "驾驶这台滚动式坦克的是一只经过基因改造的仓鼠，他来自月球基地。");
    }).mouseout(function () {
        $("#axi").css({"width": "400px", "height": "450px"});
    });
    $("#x8").mouseover(function () {
        $("#axi").css({"width": "300px", "height": "450px"});
        $(img.setAttribute("src", "imag/q8.png"));
        $(document.getElementById("spanOne").innerText = "巴蒂斯特");
        $(document.getElementById("spanTwo").innerText = "一位配备了新型治疗设备的精英战地医疗兵。");
    }).mouseout(function () {
        $("#axi").css({"width": "300px", "height": "450px"});
    });
    $("#x9").mouseover(function () {
        $("#axi").css({"width": "300px", "height": "450px"});
        $(img.setAttribute("src", "imag/q9.png"));
        $(document.getElementById("spanOne").innerText = "艾什");
        $(document.getElementById("spanTwo").innerText = "肆虐美国西南部、臭名昭著的死局帮的首脑。");
    }).mouseout(function () {
        $("#axi").css({"width": "300px", "height": "450px"});
    });
    $("#x10").mouseover(function () {
        $("#axi").css({"width": "400px", "height": "450px"});
        $(img.setAttribute("src", "imag/q10.png"));
        $(document.getElementById("spanOne").innerText = "堡垒");
        $(document.getElementById("spanTwo").innerText = "一名可以切换形态的机器人，为自然着迷而探索世界，同时也对人类保持着戒心。");
    }).mouseout(function () {
        $("#axi").css({"width": "400px", "height": "450px"});
    });


    $("#x11").mouseover(function () {
        $("#axi").css({"width": "300px", "height": "450px"});
        $(img.setAttribute("src", "imag/q11.png"));
        $(document.getElementById("spanOne").innerText = "末日铁拳");
        $(document.getElementById("spanTwo").innerText = "一位利用个人头脑、魅力和蛮力来创建一个更强大世界的战术家。");
    }).mouseout(function () {
        $("#axi").css({"width": "300px", "height": "450px"});
    });
    $("#x12").mouseover(function () {
        $("#axi").css({"width": "300px", "height": "450px"});
        $(img.setAttribute("src", "imag/q12.png"));
        $(document.getElementById("spanOne").innerText = "源氏");
        $(document.getElementById("spanTwo").innerText = "一名致命的半机械忍者，通过他的机械躯体寻得了身心的和谐。");
    }).mouseout(function () {
        $("#axi").css({"width": "300px", "height": "450px"});
    });
    $("#x13").mouseover(function () {
        $("#axi").css({"width": "400px", "height": "450px"});
        $(img.setAttribute("src", "imag/q13.png"));
        $(document.getElementById("spanOne").innerText = "半藏");
        $(document.getElementById("spanTwo").innerText = "一名强大而致命的弓箭大师。");
    }).mouseout(function () {
        $("#axi").css({"width": "400px", "height": "450px"});
    });


    $("#x14").mouseover(function () {
        $("#axi").css({"width": "300px", "height": "450px"});
        $(img.setAttribute("src", "imag/q14.png"));
        $(document.getElementById("spanOne").innerText = "狂鼠");
        $(document.getElementById("spanTwo").innerText = "一名满脑子都是爆炸的变态疯子，只为了混乱和破坏而活。");
    }).mouseout(function () {
        $("#axi").css({"width": "300px", "height": "450px"});
    });
    $("#x15").mouseover(function () {
        $("#axi").css({"width": "300px", "height": "450px"});
        $(img.setAttribute("src", "imag/q15.png"));
        $(document.getElementById("spanOne").innerText = "麦克雷");
        $(document.getElementById("spanTwo").innerText = "一名亡命天涯的神枪手，以自己的方式伸张正义。");
    }).mouseout(function () {
        $("#axi").css({"width": "300px", "height": "450px"});
    });
    $("#x16").mouseover(function () {
        $("#axi").css({"width": "300px", "height": "450px"});
        $(img.setAttribute("src", "imag/q16.png"));
        $(document.getElementById("spanOne").innerText = "美");
        $(document.getElementById("spanTwo").innerText = "一名能够操控天气，为了保护环境而选择战斗的科学家。");
    }).mouseout(function () {
        $("#axi").css({"width": "300px", "height": "450px"});
    });
    $("#x17").mouseover(function () {
        $("#axi").css({"width": "300px", "height": "450px"});
        $(img.setAttribute("src", "imag/q17.png"));
        $(document.getElementById("spanOne").innerText = "法老之鹰");
        $(document.getElementById("spanTwo").innerText = "一名恪守岗位的战士，用实验性的“猛禽”作战服确保天空的安全。");
    }).mouseout(function () {
        $("#axi").css({"width": "300px", "height": "450px"});
    });
    $("#x18").mouseover(function () {
        $("#axi").css({"width": "300px", "height": "450px"});
        $(img.setAttribute("src", "imag/q18.png"));
        $(document.getElementById("spanOne").innerText = "死神");
        $(document.getElementById("spanTwo").innerText = "一名无情的杀手，一直在追杀前守望先锋的特工们。");
    }).mouseout(function () {
        $("#axi").css({"width": "300px", "height": "450px"});
    });
    $("#x19").mouseover(function () {
        $("#axi").css({"width": "200px", "height": "450px"});
        $(img.setAttribute("src", "imag/q19.png"));
        $(document.getElementById("spanOne").innerText = "士兵：76");
        $(document.getElementById("spanTwo").innerText = "一名试图自己将守望先锋敌人绳之于法的独行侠。");
    }).mouseout(function () {
        $("#axi").css({"width": "200px", "height": "450px"});
    });

//有问题
    $("#x20").mouseover(function () {
        $("#axi").css({"width": "200px", "height": "450px"});
        $(img.setAttribute("src", "imag/q20.png"));
        $(document.getElementById("spanOne").innerText = "黑影");
        $(document.getElementById("spanTwo").innerText = "臭名昭著的黑客，沉迷于揭秘——及其带来的权力。");
    }).mouseout(function () {
        $("#axi").css({"width": "200px", "height": "450px"});
    });

    $("#x21").mouseover(function () {
        $("#axi").css({"width": "300px", "height": "450px"});
        $(img.setAttribute("src", "imag/q21.png"));
        $(document.getElementById("spanOne").innerText = "秩序之光");
        $(document.getElementById("spanTwo").innerText = "一名通过控制高强度光束，将世界改造成她心目中完美、有序的模样的光子建筑师。");
    }).mouseout(function () {
        $("#axi").css({"width": "300px", "height": "450px"});
    });
    $("#x22").mouseover(function () {
        $("#axi").css({"width": "300px", "height": "450px"});
        $(img.setAttribute("src", "imag/q22.png"));
        $(document.getElementById("spanOne").innerText = "托比昂");
        $(document.getElementById("spanTwo").innerText = "一名天才工程师，可以在战场上打造武器系统。");

    }).mouseout(function () {
        $("#axi").css({"width": "300px", "height": "450px"});
    });
    $("#x23").mouseover(function () {
        $("#axi").css({"width": "250px", "height": "450px"});
        $(img.setAttribute("src", "imag/q23.png"));
        $(document.getElementById("spanOne").innerText = "猎空");
        $(document.getElementById("spanTwo").innerText = "一名前守望先锋特工，同时也是可以穿梭时间的充满正义的冒险家。");
    }).mouseout(function () {
        $("#axi").css({"width": "250px", "height": "450px"});
    });
    $("#x24").mouseover(function () {
        $("#axi").css({"width": "200px", "height": "450px"});
        $(img.setAttribute("src", "imag/q24.png"));
        $(document.getElementById("spanOne").innerText = "黑百合");
        $(document.getElementById("spanTwo").innerText = "一名完美的杀手：耐心、果断、无情。没有任何情感且事后毫无悔意。");
    }).mouseout(function () {
        $("#axi").css({"width": "200px", "height": "450px"});
    });
    $("#x25").mouseover(function () {
        $("#axi").css({"width": "200px", "height": "450px"});
        $(img.setAttribute("src", "imag/q25.png"));
        $(document.getElementById("spanOne").innerText = "安娜");
        $(document.getElementById("spanTwo").innerText = "守望先锋的创始成员之一，“起死回生”重返战场保护亲人和朋友。");
    }).mouseout(function () {
        $("#axi").css({"width": "200px", "height": "450px"});
    });
    $("#x26").mouseover(function () {
        $("#axi").css({"width": "300px", "height": "450px"});
        $(img.setAttribute("src", "imag/q26.png"));
        $(document.getElementById("spanOne").innerText = "布丽吉塔");
        $(document.getElementById("spanTwo").innerText = "一位渴望冒险，希望惩强扶弱的重装战士。");
    }).mouseout(function () {
        $("#axi").css({"width": "300px", "height": "450px"});
    });
    $("#x27").mouseover(function () {
        $("#axi").css({"width": "300px", "height": "450px"});
        $(img.setAttribute("src", "imag/q27.png"));
        $(document.getElementById("spanOne").innerText = "卢西奥");
        $(document.getElementById("spanTwo").innerText = "一位国际名人，通过音乐和巡演激发社会正能量。");
    }).mouseout(function () {
        $("#axi").css({"width": "300px", "height": "450px"});
    });
    $("#x28").mouseover(function () {
        $("#axi").css({"width": "300px", "height": "450px"});
        $(img.setAttribute("src", "imag/q28.png"));
        $(document.getElementById("spanOne").innerText = "天使");
        $(document.getElementById("spanTwo").innerText = "一名集顶尖的治疗者、出色的科学家和坚定的和平主义者于一身的守护天使。");
    }).mouseout(function () {
        $("#axi").css({"width": "300px", "height": "450px"});
    });
    $("#x29").mouseover(function () {
        $("#axi").css({"width": "400px", "height": "450px"});
        $(img.setAttribute("src", "imag/q29.png"));
        $(document.getElementById("spanOne").innerText = "莫伊拉");
        $(document.getElementById("spanTwo").innerText = "一位天才基因科学家，无视道德的束缚，一心追求科学发现。");
    }).mouseout(function () {
        $("#axi").css({"width": "400px", "height": "450px"});
    });
    $("#x30").mouseover(function () {
        $("#axi").css({"width": "300px", "height": "450px"});
        $(img.setAttribute("src", "imag/q30.png"));
        $(document.getElementById("spanOne").innerText = "禅雅塔");
        $(document.getElementById("spanTwo").innerText = "一位游走于世界寻找灵魂升华之道的机械僧侣。");
    }).mouseout(function () {
        $("#axi").css({"width": "300px", "height": "450px"});
    });
});

