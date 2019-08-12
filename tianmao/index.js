window.onload=function() {
    //窗口加载事件
    let btns = document.querySelectorAll(".p1");
    let cons = document.querySelectorAll(".pp");
    let con = document.querySelectorAll('.p2');
     btns[0].style.color = 'white';
     btns[0].style.backgroundColor = '#00B262';
     cons[0].style.zIndex = 0;
     con[0].style.color = '#eee';
     con[0].style.zIndex = 0;
    btns.forEach((item, index) => {
        item.onmouseover = function () {
            cons.forEach(function (item, index) {
                cons[index].style.zIndex = 10;
                con[index].style.zIndex = 33;
                con[index].style.color = 'black';
                btns[index].style.color = '#999';
                btns[index].style.backgroundColor = '#ffffff'
            });
            btns[index].style.color = 'white';
            btns[index].style.backgroundColor = '#00B262';
            cons[index].style.zIndex = 0;
            con[index].style.color = '#eee';
            con[index].style.zIndex = 0
        }


    })
    function lunbo(imgName,dianName,boxName) {
        let img = document.querySelectorAll(imgName );
        let dian = document.querySelectorAll(dianName);
        console.log(dian);
        let l = document.querySelector(boxName);
        let now = 0, prev = 0;
        dian[0].style.backgroundColor = "white";
        let flag = true;

        function run(type = 0) {
            flag = false;
            if (type == 0) {
                now += 1;
                if (now >= img.length) {
                    now = 0
                }
                img[now].style.left = "1230px";
                animate(img[now], {left: 0}, 500);
                animate(img[prev], {left: -1230}, 500, function () {
                    dian.forEach(function (item, index) {
                        item.style.backgroundColor = "grey";
                    });
                    dian[now].style.backgroundColor = "white";

                });

                console.log(123);
            } else {
                now -= 1;
                if (now < 0) {
                    now = img.length - 1;
                }
                img[now].style.left = "-1230px";
                animate(img[now], {left: 0}, 500);
                animate(img[prev], {left: 1230}, 500, function () {
                    dian.forEach(function (item, index) {
                        item.style.backgroundColor = "grey";
                    });
                    dian[now].style.backgroundColor = "white";
                    console.log(123);
                });

            }
            prev = now
        }

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
lunbo(".banner .imgBox ",".xiaobiao div",".banner")
}
