/**
 * Created by wangzehao on 2017/5/7.
 */

//var header = document.getElementById("header");
var head = document.getElementsByTagName("head")[0];
var setIntervalNum = 0;

var headerNameArray = new Array(10);
headerNameArray[0] = "上海高级工程师的人生困境：更好的生活在墙外？";
headerNameArray[1] = "招聘旺季，我们为何要拒绝90%的公司？";
headerNameArray[2] = "资本寒冬？2016年互联网人年薪仍上涨17%";
headerNameArray[3] = "从技术 Leader 的招聘需求看，如何转岗为当前紧缺的大数据相关人才？";
headerNameArray[4] = "35岁以后的大龄程序员，正处于怎样一种状态?";
headerNameArray[5] = "互联网人离开美国时，都在想些什么？";
headerNameArray[6] = "​我们找了 4 家大数据公司技术 Leader，聊了聊算法和数据挖掘工程师的机会和选择";
headerNameArray[7] = "「阿里中间件需要怎样的架构师」知乎 Live 笔录";
headerNameArray[8] = "可能是「下一个滴滴」的共享单车，你愿意跳槽入行吗？";
headerNameArray[9] = "创业公司的技术 Leader，在 100offer 寻找怎样的工作机会？";





var style = document.createElement("style");
style.type = "text/css";
style.appendChild(document.createTextNode("#header{" +
    "background-image: url(页眉图片0.jpg);}"));
head.appendChild(style);



beforeHeaderConstruct();
function beforeHeaderConstruct(){
    var div = document.createElement("h1");
    div.id = "beforeHeader";

    div.appendChild(document.createTextNode("博客系统"));

    document.body.insertBefore(div,document.body.childNodes[0]);
}

//headerConstruct();
function headerConstruct(){
    var i = 0;
    var div = document.createElement("div");
    div.id = "header";

    for(i=0;i<5;i++){
        div.appendChild(document.createElement("br"))
    }

    var h2 = document.createElement("h2");
    h2.appendChild(document.createTextNode("招聘旺季，我们为什么要拒绝90%的公司"));
    div.appendChild(h2);

    div.appendChild(document.createElement("br"));

    var a = document.createElement("a");
    a.id = "headerA";
    a.href = "PracticeBlog0.html";
    a.appendChild(document.createTextNode("阅读全文 >"));
    div.appendChild(a);

    for(i=0;i<6;i++){
        div.appendChild(document.createElement("br"))
    }

    document.body.insertBefore(div,document.body.childNodes[1]);
}

function numChangeFunction(){
    var i = 0;

    style.replaceChild(document.createTextNode("#header{" +
        "background-image: url(页眉图片" +
        (setIntervalNum%5) +
        ".jpg);}"),style.lastChild);

    var headerH2 = document.getElementById("headerH2");
    headerH2.replaceChild(document.createTextNode(headerNameArray[(setIntervalNum%5)]),headerH2.firstChild);

    var headA = document.getElementById("headerA");
    headA.href = "PracticeBlog" +
        (setIntervalNum%5) +
        ".html";

    for(i=0;i<5;i++){
        document.getElementById("headerButton"+i).src = "按钮白.jpg";
    }
    document.getElementById("headerButton"+(setIntervalNum%5)).src = "按钮蓝.jpg";
}

setInterval(setIntervalFunction,10000);
function setIntervalFunction(){
    setIntervalNum++;

    numChangeFunction();
}









