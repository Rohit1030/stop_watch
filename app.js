const start = document.querySelector(".start");
const Stop = document.querySelector(".stop");
const Reset = document.querySelector(".reset");
const btns = document.querySelectorAll(".btn");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const milisec = document.getElementById("milisec");
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var Sec;

window.addEventListener("DOMContentLoaded", function(){
    timeString();
});

start.addEventListener("click", function(){
    clearInterval(Sec);
    Sec = setInterval(function(){
        d+=1;
        if(d>9){
            d=0;
            c+=1;
            if(c>9){
                c=0;
                b+=1;
                if(b>9){
                    b=0;
                    a+=1;
                    if(a>5){
                        a=0;
                        f+=1;
                        if(f>9){
                            f=0;
                            e+=1;
                        }
                    }
                }
            }
        }
        timeString();
    }, 10);
});

function timeString(){
    min.textContent =  `${e}${f}` 
    sec.textContent = `${a}${b}` 
    milisec.textContent = `${c}${d}`;
}

Stop.addEventListener("click", function(){
    clearInterval(Sec);
});

Reset.addEventListener("click", function(){
    a=b=c=d=e=f=0;
    timeString();
    clearInterval(Sec);
});

btns.forEach(function(item){
    item.addEventListener("mousedown", function(){
        item.classList.add("shrink");
    });
    
    item.addEventListener("mouseup", function(){
        item.classList.remove("shrink");
    });
});