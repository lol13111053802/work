window.onload = function ( ) {
let word1 = document.querySelectorAll("footer");
class Game {
    constructor(screenClassName,keyBoard,btn,life,score,gameOver,Score,ggg) {
        this.screen = document.querySelector(screenClassName);
        this.gameOver = document.querySelector(gameOver);
        this.Score = document.querySelector(Score);
        this.ggg = document.querySelector(ggg);
        this.life = document.querySelector(life);
        this.score = document.querySelector(score);
        this.letters = [];
        this.btn = document.querySelector(btn);
        this.KEY = document.querySelectorAll(keyBoard);
        this.isKill = true;
        this.makeWord();
        // this.kill();
        // this.over();
        this.p = document.createElement("p");
        this.lifeNum = 20;
        this.p.innerHTML = `${this.lifeNum}`;
        this.life.appendChild(this.p);



        this.s = document.createElement("p");
        this.scoreNum = 10;
        this.s.innerHTML = `${this.scoreNum}`;
        this.score.appendChild(this.s);

         // this.play();
         // this.run();
    }
    //出现字母
    makeWord(num = 5) {
        console.dir(this.Score);
        for (let i = 0; i < num; i++) {
            let div = document.createElement("div");
            div.classList.add("letter");
            let letter = String.fromCharCode(parseInt(Math.random() * 26 + 65));
            //如果有重复就重新生成一个数
            while (this.isRepeat(letter)) {
                letter = String.fromCharCode(parseInt(Math.random() * 26 + 65));
            }
            let left = Math.random() * 3.4;
            //如果有重复就重新生成一个数
            while (this.isOverlap(left)) {
                left = Math.random() * 3.4;
            }
            let top = 0;
            div.setAttribute("style", `background: url("img/A_Z/${letter}.png");top:${top}rem;left:${left}rem;position: absolute; background-size:cover;`);

            let obj = {'title':"",'left':"",'top':"",'node':''};
            obj['title'] = letter;
            obj['top'] = top;
            obj['left'] = left;
            obj['node'] = div;
            this.letters.push(obj);
            // console.log(letter);
            this.screen.appendChild(div);
        }

    }

    //去掉字母重叠
    isOverlap(left) {
        let status = this.letters.findIndex((item) => {
            if (Math.abs(left - item.left) < 0.6) {
                return item;
            }
        });
        if (status != -1) {
            return true;
        } else {
            return false;
        }
    }

    //去掉字母重复
    isRepeat(letter) {
        let status = this.letters.findIndex((item) => {
            if (letter === item.title) {
                return item;
            }
        });
        if(status === -1) {
            return false;
        }
        else {
            return true;
        }
    }

    //播放和暂停
    play() {
        let s=0;
         this.btn.onclick=()=>{
            if(s===0)
            {
                this.run();
                // this.kill();
                this.btn.setAttribute("style","background: url(./img/Play.png) no-repeat; background-size: cover;");
                s++;
                this.isKill = true;
                this.kill();
            }
            else{
                clearInterval(this.t);
                this.isKill = false;
                if(s===0) {

                }
                this.btn.setAttribute("style","background: url(./img/Pause.png) no-repeat;background-size: cover;");
            }

        };
    }

    //字母下落
    run() {
        this.t = setInterval(() => {
            this.letters.forEach((item, index) => {
                item.node.style.top = item.top + 'rem';item.top += 0.3;
                if (item.top > 7) {
                    this.screen.removeChild(item.node);
                    this.letters.splice(index, 1);
                    this.makeWord(1);
                    this.lifeNum--;
                    this.p.innerHTML = `${this.lifeNum}`;
                    this.life.appendChild(this.p);
                    if(this.lifeNum===0){
                        clearInterval(this.t);
                        this.r=1;
                        this.isKill=false;
                        this.kill();
                        this.over();
                    }
                            }

            })
        }, 500);
       ;

    }

    //鼠标点击事件
    kill(){
             this.KEY.forEach((item, index) => {
                item.onclick=()=>{

                    if(!this.isKill)
                 {
                     return;
                 }
                 let letter = item.innerText;
                    let index = this.letters.findIndex((item) => {
                        if (item.title === letter) {
                            this.scoreNum++;
                            this.s.innerHTML = `${this.scoreNum}`;
                            this.score.appendChild(this.s);
                            this.ScoreNum = this.scoreNum;
                            return item;
                        }
                    });
                    if(this.isKill) {
                        this.removeChild(index);

                    }
            };
        });

    }
    over(){
        if(this.lifeNum===0) {
            // console.dir(this.gameOver);
            this.ggg.setAttribute("style","background-color:rgba(0,0,0,0.5);height: 11rem;width: 7.5rem;top:-4rem;display: block;right: 0;position: relative;z-index: 45604561234;overflow: hidden;");
            this.gameOver.setAttribute( "style","width:7.5rem;position: absolute;top:0;display: block;height: 10rem;z-index: 300;");

            this.ScoreNum = this.scoreNum;
            this.Score.innerText = `${this.ScoreNum}`;
        }
    }

    removeChild(index){
            this.screen.removeChild(this.letters[index].node);
            this.letters.splice(index,1);
            this.makeWord(1);
        }

}

let game = new Game(".playArea","footer div div",".three",".oo",".tt",".gameOver img",".Score",".ggg");
setInterval(game.play(),500);
// game.kill();
document.addEventListener("keydown", function () {
    console.log("document 冒泡");
    // clearInterval(t);
}, false);
let index = 0;
};

