function chooseCard(select) {
    let img = document.querySelectorAll(select)
    let now = 0;

    function run() {
        now += 1;
        if (now > img.length - 1) {
            now = 0;
        }
        img.forEach(function (item, index) {

            item.classList.remove("active")
        });
        img[now].classList.add("active")
    }

    setInterval(run, 3000)
}
 function lastlunbo(imgName,dianName,boxName,leftName,rightName) {
        let img = document.querySelectorAll(imgName );
        let dian = document.querySelectorAll(dianName);
        let le = document.querySelector(leftName);
        let ri = document.querySelector(rightName);
        console.log(dian);
        let l = document.querySelector(boxName);
        let now = 0, prev = 0;
        dian[0].style.backgroundColor = "#FF6709";
        let flag = true;

        function run(type = 0) {
            flag = false;
            if (type == 0) {
                now += 1;
                if (now >= img.length) {
                    now = 0
                }
                img[now].style.left = "296px";
                animate(img[now], {left: 0}, 500);
                animate(img[prev], {left: -296}, 500, function () {
                    dian.forEach(function (item, index) {
                        item.style.backgroundColor = "grey";
                    });
                    dian[now].style.backgroundColor = "#FF6709";

                });

                console.log(123);
            } else {
                now -= 1;
                if (now < 0) {
                    now = img.length - 1;
                }
                img[now].style.left = "-296px";
                animate(img[now], {left: 0}, 500);
                animate(img[prev], {left: 296}, 500, function () {
                    dian.forEach(function (item, index) {
                        item.style.backgroundColor = "grey";
                    });
                    dian[now].style.backgroundColor = "#FF6709";
                    console.log(123);
                });

            }
            prev = now
        }
        le.onclick = function(){
            run(1);
        };
        ri.onclick = function(){
            run();
        };
        dian.forEach(function (item, index) {
            item.onclick = function () {
                let dianIndex = now;
                if (index > dianIndex) {
                    now = index - 1;
                    run()
                } else if (index < dianIndex) {
                    now = index + 1;
                    run(1)
                }
            }
        });
        let t = setInterval(run, 2000);
        l.onmouseenter = function () {
            clearInterval(t)
        };
        l.onmouseleave = function () {
            t = setInterval(run, 2000)
        };
        window.onblur = function () {
            clearInterval(t)
        };
        window.onfocus = function () {
            t = setInterval(run, 2000)
        }
    }
        lastlunbo(".a div",".bots div",".a",".sss",".ssa");
        lastlunbo(".b div",".botsb div",".b",".sssb",".ssab");
        lastlunbo(".c div",".botsc div",".c",".sssc",".ssac");
        lastlunbo(".d div",".botsd div",".d",".sssd",".ssad");