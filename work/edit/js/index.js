window.onload = function() {
    let doingData = [];
    let doneData = [];
    let num1 = document.getElementById("todocount");
    let num2 = document.getElementById("donecount");
    let input = document.getElementById("title");
    let doingCon = document.querySelector(".doing");
    let doneCon = document.querySelector(".done");
    // let up = document.querySelectorAll(".up");
    let down = document.querySelectorAll(".done a");
    input.onkeydown = function (e) {
        let s = e.keyCode;
        console.log(s);
        if (s === 13 && this.value != "") {
            doingData.unshift(this.value);
            rend();
            console.dir(doingData);
            this.value = "";
        }

    };
    function rend() {
        let d = "";
        doingData.forEach((item, index) => {
            d += `<div><input type="checkbox" class="change"><p>${item}</p><a class="up">☯</a></div>`;
        });
        doingCon.innerHTML = d;
        num1.innerHTML = doingData.length;
        let p = "";
        doneData.forEach((item, index) => {

            p += `<div><input  type="checkbox" class="change" checked><p>${item}</p><a class="down">☯</a></div>`;
        });
        doneCon.innerHTML = p;
        num2.innerHTML = doneData.length;
    }
    doingCon.onclick = function (event) {
        let tar = event.target;
        if (tar.className === "change") {
            let value = tar.nextElementSibling.innerText;
            let index = doingData.indexOf(value);
            doneData.unshift(doingData.splice(index, 1)[0]);
            rend();
        }
        else if(tar.className === "up")
        {doingData.length--;
            num1.innerHTML=doingData.length;
           console.log(tar.parentElement);
           doingCon.removeChild(tar.parentElement);
        }
    }
    doneCon.onclick = function(event)
    {
        let tar = event.target;
        if (tar.className === "down") {
            console.log(doneData.length);
            doneCon.removeChild(tar.parentElement);
            doneData.length--;
            num2.innerHTML=doneData.length;
        }
    }



}

// let obj={'name':'小包'};
//     function horns(a,b,c){
//         console.log(this,a,b,c);
//     }
//     horns.call(obj,"a","b","c");
//     horns.apply(obj,["a","b","c"])
//     let fn = horns.bind(obj);
//     fn("1","2","3");
//
// };