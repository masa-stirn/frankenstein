let myLens = document.querySelector(".mylens");
        let creature = document.querySelector(".creature");
        let creature2 = document.querySelector(".creature2");
        let creature3 = document.querySelector(".creature3");
        let creature4 = document.querySelector(".creature4");
        let creature5 = document.querySelector(".creature5");
        let creature6 = document.querySelector(".creature6");
        let creature7 = document.querySelector(".creature7");
        let creature8 = document.querySelector(".creature8");
        let audfart = document.querySelector(".audfart");
        let audmmm = document.querySelector(".audmmm");

        window.addEventListener("load",firstEvent)

        function firstEvent(){
        myLens.classList.add("circle2");
        }
        myLens.addEventListener("animationend", spriteLife)

        function spriteLife(){
            console.log("remove circle2");
            myLens.classList.remove("circle2")
            let givelife = document.querySelector(".givelife")
            givelife.play();
            setTimeout(function(){
            creature.classList.add("creatureglow");
            }, 1000);
            givelife.addEventListener("ended", endglow);
            function endglow(){
            creature.classList.remove("creatureglow");

            let heart = document.querySelector(".heart");

            heart.play();
            console.log("first beat")
            creature2.classList.remove("hide");
            setTimeout(function(){
            creature2.classList.add("hide");
            }, 500);
            setTimeout(function(){
            console.log("second beat")
            creature2.classList.remove("hide");
            }, 900);
            setTimeout(function(){
            creature2.classList.add("hide");
            }, 1400);
            setTimeout(function(){
            console.log("third beat")
            creature2.classList.remove("hide");
            }, 1900);
            setTimeout(function(){
            creature2.classList.add("hide");
            }, 2400);
            setTimeout(function(){
            console.log("fourth beat")
            creature2.classList.remove("hide");
            }, 2900);
            setTimeout(function(){
            console.log("stop heart beat")
            heart.pause();
            creature2.classList.add("hide");
            }, 3300);
            }
            givelife.addEventListener("ended", fartysceen);

            /*creature farts*/
            function fartysceen (){
            creature.classList.add("hide");
            creature3.classList.remove("hide");
            setTimeout(function(){
            console.log("second fart")
            creature.classList.add("hide");
            creature2.classList.add("hide");
            creature3.classList.add("hide");
            creature4.classList.remove("hide");
            }, 5000);
            setTimeout(function(){
            creature.classList.add("hide");
            creature2.classList.add("hide");
            creature3.classList.add("hide");
            creature4.classList.add("hide");
            creature5.classList.remove("hide");
            }, 5500);
            setTimeout(function(){
            console.log("third fart")
            creature.classList.add("hide");
            creature2.classList.add("hide");
            creature3.classList.add("hide");
            creature4.classList.add("hide");
            creature5.classList.add("hide");
            creature6.classList.remove("hide");
            audfart.play();
            }, 6000);
            setTimeout(function(){
            creature.classList.add("hide");
            creature2.classList.add("hide");
            creature3.classList.add("hide");
            creature4.classList.add("hide");
            creature5.classList.add("hide");
            creature6.classList.add("hide");
            creature7.classList.remove("hide");
            }, 6500);
            setTimeout(function(){
            creature.classList.add("hide");
            creature2.classList.add("hide");
            creature3.classList.add("hide");
            creature4.classList.add("hide");
            creature5.classList.add("hide");
            creature6.classList.add("hide");
            creature7.classList.add("hide");
            creature8.classList.remove("hide");
            }, 7000);
            setTimeout(function(){
            creature.classList.add("hide");
            creature2.classList.add("hide");
            creature3.classList.add("hide");
            creature4.classList.add("hide");
            creature5.classList.add("hide");
            creature6.classList.add("hide");
            creature7.classList.add("hide");
            creature8.classList.remove("hide");
            audmmm.play();
            }, 7500);
            setTimeout(function(){
            creature.classList.add("hide");
            creature2.classList.remove("hide");
            creature3.classList.add("hide");
            creature4.classList.add("hide");
            creature5.classList.add("hide");
            creature6.classList.add("hide");
            creature7.classList.add("hide");
            creature8.classList.add("hide");
            }, 8000);
            setTimeout(function(){
            creature.classList.add("hide");
            creature2.classList.remove("hide");
            creature3.classList.add("hide");
            creature4.classList.add("hide");
            creature5.classList.add("hide");
            creature6.classList.add("hide");
            creature7.classList.add("hide");
            creature8.classList.add("hide");
            }, 8500);
            setTimeout(function(){
            creature.classList.remove("hide");
            creature2.classList.add("hide");
            creature3.classList.add("hide");
            creature4.classList.add("hide");
            creature5.classList.add("hide");
            creature6.classList.add("hide");
            creature7.classList.add("hide");
            creature8.classList.add("hide");
            }, 9500);
        }
        }

        audmmm.addEventListener('ended', lens);

        function lens() {
            console.log("add circle");
        myLens.classList.add("circle")
           setTimeout(function(){
                window.location.href = "lab2.html";
            }, 1400);
        }

