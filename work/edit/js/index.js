window.onload = function() {
    //localStorage.tolist = [{title:'abc'},{done:true}]
    let doingData = localStorage.doingData?localStorage.doingData.split(","):[];
    let doneData = localStorage.doneData?localStorage.doneData.split(","):[];
    let num1 = document.getElementById("todocount");
    let num2 = document.getElementById("donecount");
    let input = document.getElementById("title");
    let clear = document.querySelector(".clear");

    let doingCon = document.querySelector(".doing");
    let doneCon = document.querySelector(".done");
    rend();
    input.onkeydown = function (e) {
        let s = e.keyCode;
        console.log(s);
        if (s === 13 && this.value != "") {
            doingData.unshift(this.value);
            localStorage.doingData = doingData;
            localStorage.doneData = doneData;
            rend();
            console.dir(doingData);
            this.value = "";
        }

    };
    function rend() {
        localStorage.doingData = doingData;
            localStorage.doneData = doneData;
        let d = "";
        doingData.forEach((item, index) => {
            d += `<div class="di"><input type="checkbox" class="change"><p class="p">${item}</p><a class="up">☯</a></div>`;

        });
        doingCon.innerHTML = d;
        num1.innerHTML = doingData.length;
        let p = "";
        doneData.forEach((item, index) => {

            p += `<div class="di"><input  type="checkbox" class="change" checked><p class="p">${item}</p><a class="down">☯</a></div>`;
        });
        doneCon.innerHTML = p;
        num2.innerHTML = doneData.length;
    }
    doingCon.onclick = function(event) {
        let tar = event.target;
        if (tar.className === "change") {
            let value = tar.nextElementSibling.innerText;
            let index = doingData.indexOf(value);
            doneData.unshift(doingData.splice(index, 1)[0]);
            rend();
            localStorage.doingData = doingData;
            localStorage.doneData = doneData;
        }
        else if(tar.className === "up")
        {doingData.length--;
            num1.innerHTML=doingData.length;
           console.log(tar.parentElement);
           doingCon.removeChild(tar.parentElement);
           localStorage.doingData = doingData;
            localStorage.doneData = doneData;
        }
    };
    doingCon.ondblclick = function(event){
        let tar = event.target;
        let p = doingData.length;
         if (tar.className === "p") {
             let oldtext = tar.innerText;
            let input = document.createElement("input");
            tar.innerText = "";
            doingData.splice(p-1,1);
            input.value = oldtext;
            input.onblur = function () {//当失去焦点并且内容发生改变时触发
                tar.innerText = this.value;
                doingData.push(input.value);
            localStorage.doingData = doingData;
            localStorage.doneData = doneData;};
            tar.appendChild(input);


             console.dir(doingData);
            input.focus();
         }


    };
    doneCon.onclick = function(event)
    {    let tar = event.target;
         if (tar.className === "change") {
            let value = tar.nextElementSibling.innerText;
            let index = doneData.indexOf(value);
            doingData.unshift(doneData.splice(index, 1)[0]);
            rend();
            localStorage.doingData = doingData;
            localStorage.doneData = doneData;
        }

        else if (tar.className === "down") {
            console.log(doneData.length);
            doneCon.removeChild(tar.parentElement);
            doneData.length--;
            num2.innerHTML=doneData.length;
            localStorage.doingData = doingData;
            localStorage.doneData = doneData;
        }
    };
    doneCon.ondblclick = function(event){
        let tar = event.target;
        let p = doneData.length;
         if (tar.className === "p") {
             let oldtext = tar.innerText;
            let input = document.createElement("input");
            tar.innerText = "";
            doneData.splice(p-1,1);
            input.value = oldtext;
            input.onblur = function () {//当失去焦点并且内容发生改变时触发
                tar.innerText = this.value;
                doneData.push(input.value);
            localStorage.doingData = doingData;
            localStorage.doneData = doneData;};
            tar.appendChild(input);


             console.dir(doneData);
            input.focus();
         }
    };
    clear.onclick = function(){
        doingData.splice(0);
        doneData.splice(0);
        rend();
        localStorage.doingData = doingData;
        localStorage.doneData = doneData;
    }
};

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