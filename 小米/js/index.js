window.onload=function() {
    //窗口加载事件
    let btns = document.querySelectorAll(".new1")
    let btn = document.querySelectorAll(".new1 d")
    let cons = document.querySelectorAll(".jiadianright")
    // let con = document.querySelectorAll(".rightbox1");
    console.log(cons)
    btns.forEach((item, index) => {
        item.onmouseenter = function () {
            cons.forEach(function (item, index) {
                btns[index].style.color = '#000';
                cons[index].style.zIndex = 0;
                btn[index].style.borderBottom = 'none'
                // item.style.zIndex=80
            });
            btns[index].style.color = '#ff6700';
            cons[index].style.zIndex = 20;
            btn[index].style.borderBottom = '2px solid #ff6700';
        }
    })


    function lunbo(left1, right1, dian1, img1, l1) {
        let left = document.querySelector(left1);
        let right = document.querySelector(right1);
        let dian = document.querySelectorAll(dian1)
        console.log(dian);
        dian[0].style.backgroundColor = "white"
        let img = document.querySelectorAll(img1);
        let now = 0;
        let l = document.querySelector(l1);

        function run(type = 0) {
            if (type === 0) {
                now += 1;
                if (now > img.length - 1) {
                    now = 0;
                }
            }
            else {
                now -= 1;
                if (now < 0) {
                    now = img.length - 1;
                }
            }
            img.forEach(function (item, index) {
                // dian[now].style.backgroundColor="white"
                item.classList.remove("active");

                dian.forEach(function (item, i) {
                    item.style.backgroundColor = "rgba(0,0,0,.4)"
                })
                dian[now].style.backgroundColor = "white"

            });
            img[now].classList.add("active");


        }

        // setInterval(run,3000)
        let t = setInterval(run, 3000);
        l.onmouseenter = function () {
            clearInterval(t)
        };
        l.onmouseleave = function () {
            t = setInterval(run, 3000)
        }
        left.onclick = function () {
            run(1)
        }
        right.onclick = function () {
            run()
        }
        dian.forEach(function (item, i) {
            item.onclick = function () {
                dian.forEach(function (iw, index) {
                    iw.style.backgroundColor = "rgba(0,0,0,.4";
                });
                dian[i].style.backgroundColor = "white";
                img.forEach(function (item, index) {

                    item.classList.remove("active");
                })
                img[i].classList.add("active");
                now = i;

            }


        })
        //  let left=document.querySelector(".lbjtl");
        // let right=document.querySelector(".lbjtr");
        // let dian=document.querySelectorAll(".lbyuan div")
        // dian[0].style.backgroundColor="white"
        // let img = document.querySelectorAll(".banner div");
        // let now = 0;
        // let l=document.querySelector(".banner");
        // function run( type=0){
        //     if(type === 0) {
        //         now+=1;
        //         if (now > img.length - 1) {
        //             now = 0;
        //         }
        //     }
        //     else{
        //         now-=1;
        //          if (now<0) {
        //             now = img.length-1;
        //         }
        //     }
        //     img.forEach(function(item,index){
        //         // dian[now].style.backgroundColor="white"
        //         item.classList.remove("active");
        //
        //              dian.forEach(function(item,i){
        //           item.style.backgroundColor = "rgba(0,0,0,.4)"
        //              })
        //          dian[now].style.backgroundColor = "white"
        //
        //     });
        //     img[now].classList.add("active");
        //
        //
        // }
        // // setInterval(run,3000)
        //     let t= setInterval(run,3000);
        //     l.onmouseenter = function(){
        //
        //         clearInterval(t)
        //     };
        //     l.onmouseleave = function(){
        //         t = setInterval(run,3000)
        //     }
        //     left.onclick = function(){
        //         run(1)
        //     }
        //     right.onclick = function () {
        //         run()
        //     }
        //     dian.forEach(function(item,i){
        //         item.onclick = function(){
        //            dian.forEach(function(iw,index){
        //              iw.style.backgroundColor="rgba(0,0,0,.4";
        //         });dian[i].style.backgroundColor="white";
        //             img.forEach(function(item,index){
        //
        //                 item.classList.remove("active");
        //             })
        //             img[i].classList.add("active");
        //             now = i;
        //
        //         }
        //
        //
        //
        //     })
         window.onblur = function () {
            clearInterval(t)
        };
        window.onfocus = function () {
            t = setInterval(run, 2000)
        }
        console.log(123)
    }

    lunbo(".lbjtl", ".lbjtr", ".lbyuan1", ".banner div", ".banner")
}