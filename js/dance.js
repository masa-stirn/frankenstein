let myLens = document.querySelector(".mylens");
let dances = document.querySelectorAll(".dances");
let safety = document.querySelector(".safety");
let prof1 = document.querySelector(".prof1");
let prof2 = document.querySelector(".prof2");
let prof3 = document.querySelector(".prof3");
let prof4 = document.querySelector(".prof4");

function pageLoad() {
    myLens.classList.add("circle2")
}
myLens.addEventListener("animationend", spriteFart)
function spriteFart() {
    let bgmusic = document.querySelector(".bgmusic")
    bgmusic.play();
    for(let i = 500; i<4100; i+=100){
        setTimeout(function(){
            prof2.classList.toggle("hide");
        }, i) }

    for(let i = 4900; i<7300; i+=100){
        setTimeout(function(){
            prof2.classList.toggle("hide");
        }, i) }

    for(let i = 8300; i<8900; i+=100){
        setTimeout(function(){
            prof2.classList.toggle("hide");
        }, i) }

    for(let i = 10800; i<11600; i+=100){
        setTimeout(function(){
            prof2.classList.toggle("hide");
        }, i) }

    setTimeout(function () {
        dances[0].classList.remove("hide");
        dances[0].classList.add("slideLeft");
    }, 10500);
    setTimeout(function () {
        dances[0].classList.remove("slideLeft");
        dances[0].classList.add("hide");
        dances[1].classList.remove("hide");
    }, 12000);
    setTimeout(function () {
        dances[1].classList.add("hide");
        dances[2].classList.remove("hide");
    }, 12050);
    setTimeout(function () {
        dances[2].classList.add("hide");
        dances[3].classList.remove("hide");
    }, 12100);
    setTimeout(function () {
        dances[3].classList.add("hide");
        dances[4].classList.remove("hide");
    }, 12150);
    setTimeout(function () {
        dances[4].classList.add("hide");
        dances[5].classList.remove("hide");
    }, 12200);
    setTimeout(function () {
        dances[5].classList.add("hide");
        dances[6].classList.remove("hide");
    }, 12250);
    setTimeout(function () {
        dances[6].classList.add("hide");
        dances[7].classList.remove("hide");
    }, 12300);
    setTimeout(function () {
        dances[7].classList.add("hide");
        dances[8].classList.remove("hide");
    }, 12350);
    setTimeout(function () {
        dances[8].classList.add("hide");
        dances[9].classList.remove("hide");
    }, 12400);
    setTimeout(function () {
        dances[9].classList.add("hide");
        dances[10].classList.remove("hide");
    }, 12450);
    setTimeout(function () {
        dances[10].classList.add("hide");
        dances[11].classList.remove("hide");
    }, 12500);
    setTimeout(function () {
        dances[11].classList.add("hide");
        dances[12].classList.remove("hide");
    }, 12550);
    setTimeout(function () {
        dances[12].classList.add("hide");
        dances[13].classList.remove("hide");
    }, 12600);
    setTimeout(function () {
        dances[13].classList.add("hide");
        dances[14].classList.remove("hide");
    }, 12650);
    setTimeout(function () {
        dances[14].classList.add("hide");
        dances[13].classList.remove("hide");
    }, 12700);
    setTimeout(function () {
        dances[13].classList.add("hide");
        dances[12].classList.remove("hide");
    }, 12750);
    setTimeout(function () {
        dances[12].classList.add("hide");
        dances[11].classList.remove("hide");
    }, 12800);
    setTimeout(function () {
        dances[11].classList.add("hide");
        dances[10].classList.remove("hide");
    }, 12850);
    setTimeout(function () {
        dances[10].classList.add("hide");
        dances[9].classList.remove("hide");
    }, 12900);
    setTimeout(function () {
        dances[9].classList.add("hide");
        dances[8].classList.remove("hide");
    }, 12950);
    setTimeout(function () {
        dances[8].classList.add("hide");
        dances[7].classList.remove("hide");
    }, 13000);
    setTimeout(function () {
        dances[7].classList.add("hide");
        dances[6].classList.remove("hide");
    }, 13050);
    setTimeout(function () {
        dances[6].classList.add("hide");
        dances[5].classList.remove("hide");
    }, 13100);
    setTimeout(function () {
        dances[5].classList.add("hide");
        dances[4].classList.remove("hide");
    }, 13150);
    setTimeout(function () {
        dances[4].classList.add("hide");
        dances[3].classList.remove("hide");
    }, 13200);
    setTimeout(function () {
        dances[3].classList.add("hide");
        dances[2].classList.remove("hide");
    }, 13250);
    setTimeout(function () {
        dances[2].classList.add("hide");
        dances[1].classList.remove("hide");
    }, 13300);
    setTimeout(function () {
        dances[1].classList.add("hide");
        dances[0].classList.remove("hide");
    }, 13350);
    setTimeout(function () {
        dances[0].classList.add("hide");
        dances[1].classList.remove("hide");
    }, 13400);
    setTimeout(function () {
        dances[1].classList.add("hide");
        dances[2].classList.remove("hide");
    }, 13450);
    setTimeout(function () {
        dances[2].classList.add("hide");
        dances[3].classList.remove("hide");
    }, 13500);
    setTimeout(function () {
        dances[3].classList.add("hide");
        dances[4].classList.remove("hide");
    }, 13550);
    setTimeout(function () {
        dances[4].classList.add("hide");
        dances[5].classList.remove("hide");
    }, 13600);
    setTimeout(function () {
        dances[5].classList.add("hide");
        dances[6].classList.remove("hide");
    }, 13650);
    setTimeout(function () {
        dances[6].classList.add("hide");
        dances[7].classList.remove("hide");
    }, 13700);
    setTimeout(function () {
        dances[7].classList.add("hide");
        dances[8].classList.remove("hide");
    }, 13750);
    setTimeout(function () {
        dances[8].classList.add("hide");
        dances[9].classList.remove("hide");
    }, 13800);
    setTimeout(function () {
        dances[9].classList.add("hide");
        dances[10].classList.remove("hide");
    }, 13850);
    setTimeout(function () {
        dances[10].classList.add("hide");
        dances[11].classList.remove("hide");
    }, 13900);
    setTimeout(function () {
        dances[11].classList.add("hide");
        dances[12].classList.remove("hide");
    }, 13950);
    setTimeout(function () {
        dances[12].classList.add("hide");
        dances[13].classList.remove("hide");
    }, 14000);
    setTimeout(function () {
        dances[13].classList.add("hide");
        dances[12].classList.remove("hide");
    }, 14050);
    setTimeout(function () {
        dances[12].classList.add("hide");
        dances[11].classList.remove("hide");
    }, 14100);
    setTimeout(function () {
        dances[11].classList.add("hide");
        dances[10].classList.remove("hide");
    }, 14150);
    setTimeout(function () {
        dances[10].classList.add("hide");
        dances[9].classList.remove("hide");
    }, 14200);
    setTimeout(function () {
        dances[9].classList.add("hide");
        dances[8].classList.remove("hide");
    }, 14250);
    setTimeout(function () {
        dances[8].classList.add("hide");
        dances[7].classList.remove("hide");
    }, 14300);
    setTimeout(function () {
        dances[7].classList.add("hide");
        dances[6].classList.remove("hide");
    }, 14350);
    setTimeout(function () {
        dances[6].classList.add("hide");
        dances[5].classList.remove("hide");
    }, 14400);
    setTimeout(function () {
        dances[5].classList.add("hide");
        dances[4].classList.remove("hide");
    }, 14450);
    setTimeout(function () {
        dances[4].classList.add("hide");
        dances[3].classList.remove("hide");
    }, 14500);
    setTimeout(function () {
        dances[3].classList.add("hide");
        dances[2].classList.remove("hide");
    }, 14550);
    setTimeout(function () {
        dances[2].classList.add("hide");
        dances[1].classList.remove("hide");
    }, 14600);
    setTimeout(function () {
        dances[1].classList.add("hide");
        dances[0].classList.remove("hide");
    }, 14650);
    setTimeout(function () {
        dances[0].classList.add("hide");
        dances[1].classList.remove("hide");
    }, 14700);
    setTimeout(function () {
        dances[1].classList.add("hide");
        dances[2].classList.remove("hide");
    }, 14750);
    setTimeout(function () {
        dances[2].classList.add("hide");
        dances[3].classList.remove("hide");
    }, 14800);
    setTimeout(function () {
        dances[3].classList.add("hide");
        dances[4].classList.remove("hide");
    }, 14850);
    setTimeout(function () {
        dances[4].classList.add("hide");
        dances[5].classList.remove("hide");
    }, 14900);
    setTimeout(function () {
        dances[5].classList.add("hide");
        dances[4].classList.remove("hide");
    }, 14950);
    setTimeout(function () {
        dances[4].classList.add("hide");
        dances[3].classList.remove("hide");
    }, 15000);
    setTimeout(function () {
        dances[3].classList.add("hide");
        dances[2].classList.remove("hide");
    }, 15050);
    setTimeout(function () {
        dances[2].classList.add("hide");
        dances[1].classList.remove("hide");
    }, 15100);
    setTimeout(function () {
        dances[1].classList.add("hide");
        dances[0].classList.remove("hide");
    }, 15150);
    setTimeout(function () {
        dances[0].classList.add("hide");
        dances[1].classList.remove("hide");
    }, 15200);
    setTimeout(function () {
        dances[1].classList.add("hide");
        dances[2].classList.remove("hide");
    }, 15250);
    setTimeout(function () {
        dances[2].classList.add("hide");
        dances[3].classList.remove("hide");
    }, 15300);
    setTimeout(function () {
        dances[3].classList.add("hide");
        dances[4].classList.remove("hide");
    }, 15350);
    setTimeout(function () {
        dances[4].classList.add("hide");
        dances[5].classList.remove("hide");
    }, 15400);
    setTimeout(function () {
        dances[5].classList.add("hide");
        dances[4].classList.remove("hide");
    }, 15450);
    setTimeout(function () {
        dances[4].classList.add("hide");
        dances[3].classList.remove("hide");
    }, 15500);
    setTimeout(function () {
        dances[3].classList.add("hide");
        dances[2].classList.remove("hide");
    }, 15550);
    setTimeout(function () {
        dances[2].classList.add("hide");
        dances[1].classList.remove("hide");
    }, 15600);
    setTimeout(function () {
        dances[1].classList.add("hide");
        dances[0].classList.remove("hide");
    }, 15650);
    setTimeout(function () {
        dances[0].classList.add("hide");
        dances[1].classList.remove("hide");
    }, 15700);
    setTimeout(function () {
        dances[1].classList.add("hide");
        dances[2].classList.remove("hide");
    }, 15750);
    setTimeout(function () {
        dances[2].classList.add("hide");
        dances[3].classList.remove("hide");
    }, 15800);
    setTimeout(function () {
        dances[3].classList.add("hide");
        dances[4].classList.remove("hide");
    }, 15850);
    setTimeout(function () {
        dances[4].classList.add("hide");
        dances[5].classList.remove("hide");
    }, 15900);
    setTimeout(function () {
        dances[5].classList.add("hide");
        dances[4].classList.remove("hide");
    }, 15950);
    setTimeout(function () {
        dances[4].classList.add("hide");
        dances[3].classList.remove("hide");
    }, 16000);
    setTimeout(function () {
        dances[3].classList.add("hide");
        dances[2].classList.remove("hide");
    }, 16050);
    setTimeout(function () {
        dances[2].classList.add("hide");
        dances[1].classList.remove("hide");
    }, 16100);
    setTimeout(function () {
        dances[1].classList.add("hide");
        dances[0].classList.remove("hide");
    }, 16150);
    setTimeout(function () {
        dances[0].classList.add("hide");
        dances[1].classList.remove("hide");
    }, 16200);
    setTimeout(function () {
        dances[1].classList.add("hide");
        dances[2].classList.remove("hide");
    }, 16250);
    setTimeout(function () {
        dances[2].classList.add("hide");
        dances[3].classList.remove("hide");
    }, 16300);
    setTimeout(function () {
        dances[3].classList.add("hide");
        dances[4].classList.remove("hide");
    }, 16350);
    setTimeout(function () {
        dances[4].classList.add("hide");
        dances[5].classList.remove("hide");
    }, 16400);
    setTimeout(function () {
        dances[5].classList.add("hide");
        dances[4].classList.remove("hide");
    }, 16450);
    setTimeout(function () {
        dances[4].classList.add("hide");
        dances[3].classList.remove("hide");
    }, 16500);
    setTimeout(function () {
        dances[3].classList.add("hide");
        dances[2].classList.remove("hide");
    }, 16550);
    setTimeout(function () {
        dances[2].classList.add("hide");
        dances[1].classList.remove("hide");
    }, 16600);
    setTimeout(function () {
        dances[1].classList.add("hide");
        dances[0].classList.remove("hide");
    }, 16650);
    setTimeout(function () {
        dances[0].classList.add("hide");
        dances[1].classList.remove("hide");
    }, 16700);
    setTimeout(function () {
        dances[1].classList.add("hide");
        dances[2].classList.remove("hide");
    }, 16750);
    setTimeout(function () {
        dances[2].classList.add("hide");
        dances[3].classList.remove("hide");
    }, 16800);
    setTimeout(function () {
        dances[3].classList.add("hide");
        dances[4].classList.remove("hide");
    }, 16850);
    setTimeout(function () {
        dances[4].classList.add("hide");
        dances[5].classList.remove("hide");
    }, 16900);

    setTimeout(function () {
        dances[5].classList.add("hide");
        dances[4].classList.remove("hide");
    }, 16950);
    setTimeout(function () {
        dances[4].classList.add("hide");
        dances[3].classList.remove("hide");
    }, 17000);
    setTimeout(function () {
        dances[3].classList.add("hide");
        dances[2].classList.remove("hide");
    }, 17050);
    setTimeout(function () {
        dances[2].classList.add("hide");
        dances[1].classList.remove("hide");
    }, 17100);
    setTimeout(function () {
        dances[1].classList.add("hide");
        dances[0].classList.remove("hide");
    }, 17150);
    setTimeout(function () {
        dances[0].classList.add("hide");
        dances[1].classList.remove("hide");
    }, 17200);
    setTimeout(function () {
        dances[1].classList.add("hide");
        dances[2].classList.remove("hide");
    }, 17250);
    setTimeout(function () {
        dances[2].classList.add("hide");
        dances[3].classList.remove("hide");
    }, 17300);
    setTimeout(function () {
        dances[3].classList.add("hide");
        dances[4].classList.remove("hide");
    }, 17350);
    setTimeout(function () {
        dances[4].classList.add("hide");
        dances[5].classList.remove("hide");
    }, 17400);
    setTimeout(function () {
        dances[5].classList.add("hide");
        dances[6].classList.remove("hide");
    }, 17450);
    setTimeout(function () {
        dances[6].classList.add("hide");
        dances[7].classList.remove("hide");
    }, 17500);
    setTimeout(function () {
        dances[7].classList.add("hide");
        dances[8].classList.remove("hide");
    }, 17550);

    setTimeout(function () {
        dances[8].classList.add("hide");
        dances[7].classList.remove("hide");
    }, 17600);
    setTimeout(function () {
        dances[7].classList.add("hide");
        dances[6].classList.remove("hide");
    }, 17650);
    setTimeout(function () {
        dances[6].classList.add("hide");
        dances[5].classList.remove("hide");
    }, 17700);
    setTimeout(function () {
        dances[5].classList.add("hide");
        dances[4].classList.remove("hide");
    }, 17750);
    setTimeout(function () {
        dances[4].classList.add("hide");
        dances[5].classList.remove("hide");
    }, 17800);
    setTimeout(function () {
        dances[5].classList.add("hide");
        dances[6].classList.remove("hide");
    }, 17850);
    setTimeout(function () {
        dances[6].classList.add("hide");
        dances[7].classList.remove("hide");
    }, 17900);
    setTimeout(function () {
        dances[7].classList.add("hide");
        dances[8].classList.remove("hide");
    }, 17950);
    setTimeout(function () {
        dances[8].classList.add("hide");
        dances[9].classList.remove("hide");
    }, 18000);
    setTimeout(function () {
        dances[9].classList.add("hide");
        dances[10].classList.remove("hide");
    }, 18050);
    setTimeout(function () {
        dances[10].classList.add("hide");
        dances[11].classList.remove("hide");
    }, 18100);
    setTimeout(function () {
        dances[11].classList.add("hide");
        dances[10].classList.remove("hide");
    }, 18150);
    setTimeout(function () {
        dances[10].classList.add("hide");
        dances[09].classList.remove("hide");
    }, 18200);
    setTimeout(function () {
        dances[09].classList.add("hide");
        dances[08].classList.remove("hide");
    }, 18250);
    setTimeout(function () {
        dances[08].classList.add("hide");
        dances[07].classList.remove("hide");
    }, 18300);
    setTimeout(function () {
        dances[07].classList.add("hide");
        dances[06].classList.remove("hide");
    }, 18350);
    setTimeout(function () {
        dances[06].classList.add("hide");
        dances[05].classList.remove("hide");
    }, 18400);
    setTimeout(function () {
        dances[05].classList.add("hide");
        dances[04].classList.remove("hide");
    }, 18450);
    setTimeout(function () {
        dances[04].classList.add("hide");
        dances[05].classList.remove("hide");
    }, 18500);
    setTimeout(function () {
        dances[05].classList.add("hide");
        dances[06].classList.remove("hide");
    }, 18550);
    setTimeout(function () {
        dances[06].classList.add("hide");
        dances[07].classList.remove("hide");
    }, 18600);
    setTimeout(function () {
        dances[07].classList.add("hide");
        dances[08].classList.remove("hide");
    }, 18650);
    setTimeout(function () {
        dances[08].classList.add("hide");
        dances[09].classList.remove("hide");
    }, 18700);
    setTimeout(function () {
        dances[09].classList.add("hide");
        dances[10].classList.remove("hide");
    }, 18750);
    setTimeout(function () {
        dances[10].classList.add("hide");
        dances[11].classList.remove("hide");
    }, 18800);
    setTimeout(function () {
        dances[11].classList.add("hide");
        dances[12].classList.remove("hide");
    }, 18850);
    setTimeout(function () {
        dances[12].classList.add("hide");
        dances[13].classList.remove("hide");
    }, 18900);
    setTimeout(function () {
        dances[13].classList.add("hide");
        dances[14].classList.remove("hide");
    }, 18950);
    setTimeout(function () {
        dances[14].classList.add("hide");
        dances[15].classList.remove("hide");
    }, 19000);
    setTimeout(function () {
        dances[15].classList.add("hide");
        dances[16].classList.remove("hide");
    }, 19050);
    setTimeout(function () {
        dances[16].classList.add("hide");
        dances[17].classList.remove("hide");
    }, 19100);
    setTimeout(function () {
        dances[17].classList.add("hide");
        dances[18].classList.remove("hide");
    }, 19150);
    setTimeout(function () {
        dances[18].classList.add("hide");
        dances[19].classList.remove("hide");
    }, 19200);
    setTimeout(function () {
        let laughter = document.querySelector(".laughter")
        laughter.play();
    }, 17500);
    setTimeout(function () {
        prof1.classList.add("hide");
        prof3.classList.remove("hide");
        setTimeout(function () {
            prof3.classList.add("hide");
            prof4.classList.remove("hide");
        }, 300);
        setTimeout(function () {
            prof4.classList.add("hide");
            prof3.classList.remove("hide");
        }, 500);
        setTimeout(function () {
            prof3.classList.add("hide");
            prof4.classList.remove("hide");
        }, 600);
        setTimeout(function () {
            prof4.classList.add("hide");
            prof3.classList.remove("hide");
        }, 700);
        setTimeout(function () {
            prof3.classList.add("hide");
            prof4.classList.remove("hide");
        }, 800);
        setTimeout(function () {
            prof4.classList.add("hide");
            prof3.classList.remove("hide");
        }, 900);
        setTimeout(function () {
            prof3.classList.add("hide");
            prof4.classList.remove("hide");
        }, 1000);

        setTimeout(function () {
            prof3.classList.add("hide");
            prof4.classList.remove("hide");
        }, 2000);
        setTimeout(function () {
            prof4.classList.add("hide");
            prof3.classList.remove("hide");
        }, 2500);
        setTimeout(function () {
            prof3.classList.add("hide");
            prof4.classList.remove("hide");
        }, 2600);
        setTimeout(function () {
            prof4.classList.add("hide");
            prof3.classList.remove("hide");
        }, 2700);
        setTimeout(function () {
            prof3.classList.add("hide");
            prof4.classList.remove("hide");
        }, 2800);
        setTimeout(function () {
            prof4.classList.add("hide");
            prof3.classList.remove("hide");
        }, 2900);
        setTimeout(function () {
            prof3.classList.add("hide");
            prof4.classList.remove("hide");
        }, 3000);
        setTimeout(function () {
            prof4.classList.add("hide");
            prof3.classList.remove("hide");
        }, 3100);
        setTimeout(function () {
            prof3.classList.add("hide");
            prof4.classList.remove("hide");
        }, 3200);
        setTimeout(function () {
            prof4.classList.add("hide");
            prof3.classList.remove("hide");
        }, 3300);
        setTimeout(function () {
            prof3.classList.add("hide");
            prof4.classList.remove("hide");
        }, 3400);
        setTimeout(function () {
            prof4.classList.add("hide");
            prof3.classList.remove("hide");
        }, 3500);
        setTimeout(function () {
            prof3.classList.add("hide");
            prof4.classList.remove("hide");
        }, 3600);
        setTimeout(function () {
            prof4.classList.add("hide");
            prof3.classList.remove("hide");
        }, 3700);
        setTimeout(function () {
            prof3.classList.add("hide");
            prof4.classList.remove("hide");
        }, 3800);
        setTimeout(function () {
            prof4.classList.add("hide");
            prof3.classList.remove("hide");
        }, 4000);
        setTimeout(function () {
            prof3.classList.add("hide");
            prof4.classList.remove("hide");
        }, 4400);
        safety.play();
    }, 20800);
}
safety.addEventListener('ended', lens);
function lens() {
    myLens.classList.add("circle")
    setTimeout(function () {
        window.location.href = "lab3.html";
    }, 1200);
}

pageLoad();

