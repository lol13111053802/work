let word1 = document.querySelectorAll("footer div div");
let word2 = document.querySelectorAll(".h2 div");
let word3 = document.querySelectorAll(".h3 div");
let play = document.querySelector(".three");
let worda = document.querySelectorAll(".word div");
let word7 = document.querySelectorAll(".word7 div");
let word8 = document.querySelectorAll(".word8 div");
let word9 = document.querySelectorAll(".word9 div");
let now = Math.random()*26;
document.addEventListener("keydown",function(){
        console.log("document 冒泡");
        // clearInterval(t);
    },false);
play.touchstart = function(){
    play.removeChild(img);
};
    window.document.onkeydown = function key(e) {
        // setInterval(run,1000);
        let keynum = window.event ? e.keyCode : e.which;
        // 通过判别浏览器，获得键值，数字形式的
        // var keychar = String.fromCharCode(keynum);
        // 将数字形式的键值转化为真实的按键
        // alert(keynum + ':' + keychar);
        word1.forEach(function (item) {
            item.style.color = "rgba(45,80,203,0.95)";
        });
        word2.forEach(function (item) {
            item.style.color = "rgba(45,80,203,0.95)";
        });
        if (keynum === 81) {

            word1[0].style.color = "white";
        }
        if (keynum === 87) {

            word1[1].style.color = "white";
        }
        if (keynum === 69) {

            word1[2].style.color = "white";
        }
        if (keynum === 82) {

            word1[3].style.color = "white";
        }
        if (keynum === 84){

            word1[4].style.color = "white";
        }
        if (keynum === 89) {

            word1[5].style.color = "white";
        }
        if (keynum === 85) {

            word1[6].style.color = "white";
        }
        if (keynum === 73) {

            word1[7].style.color = "white";
        }
        if (keynum === 79) {

            word1[8].style.color = "white";
        }
        if (keynum === 80) {

            word1[9].style.color = "white";
        }


        if (keynum === 65) {

            word2[0].style.color = "white";
        }
        if (keynum === 83) {

            word2[1].style.color = "white";
        }
        if (keynum === 68) {

            word2[2].style.color = "white";
        }
        if (keynum === 70) {

            word2[3].style.color = "white";
        }
        if (keynum === 71) {

            word2[4].style.color = "white";
        }
        if (keynum === 72) {

            word2[5].style.color = "white";
        }
        if (keynum === 74) {

            word2[6].style.color = "white";
        }
        if (keynum === 75) {

            word2[7].style.color = "white";
        }
        if (keynum === 76) {

            word2[8].style.color = "white";
        }


        if (keynum === 90) {

            word3[0].style.color = "white";
        }
        if (keynum === 88) {

            word3[1].style.color = "white";
        }
        if (keynum === 67) {

            word3[2].style.color = "white";
        }
        if (keynum === 86) {

            word3[3].style.color = "white";
        }
        if (keynum === 66) {

            word3[4].style.color = "white";
        }
        if (keynum === 78) {

            word3[5].style.color = "white";
        }
        if (keynum === 77) {
            word3[6].style.color = "white";
        }
    };

