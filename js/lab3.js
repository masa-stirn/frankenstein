let myLens = document.querySelector(".mylens");

        let switch1down = document.querySelector(".switch1down");
        let switch1up = document.querySelector(".switch1up");
        let switch2down = document.querySelector(".switch2down");
        let switch2up = document.querySelector(".switch2up");
        let switch3down = document.querySelector(".switch3down");
        let switch3up = document.querySelector(".switch3up");
        //audios
        let audswitch2on = document.querySelector(".audswitch2on");
        let audswitch3on = document.querySelector(".audswitch3on");
        let audswitch = document.querySelector(".audswitch");

        function pageLoad(){
            myLens.classList.add("circle2");
            let prof1 = document.querySelector(".professor1");
            let prof2 = document.querySelector(".professor2");
             setTimeout(function(){
            myLens.classList.remove("circle2");
            audswitch3on.play();
            prof1.classList.add("hide")
            prof2.classList.remove("hide")
            }, 1500);
            setTimeout(function(){
            prof2.classList.add("hide")
            prof1.classList.remove("hide")
            }, 1800);
            setTimeout(function(){
            prof1.classList.add("hide")
            prof2.classList.remove("hide")
            }, 2100);
            setTimeout(function(){
            prof2.classList.add("hide")
            prof1.classList.remove("hide")
            }, 2400);
            setTimeout(function(){
            prof1.classList.add("hide")
            prof2.classList.remove("hide")
            }, 2700);
            setTimeout(function(){
            prof2.classList.add("hide")
            prof1.classList.remove("hide")
            }, 3000);
             setTimeout(function(){
            prof1.classList.add("hide")
            prof2.classList.remove("hide")
            }, 3300);
            setTimeout(function(){
            prof2.classList.add("hide")
            prof1.classList.remove("hide")
            }, 5600);
             setTimeout(function(){
            prof1.classList.add("hide")
            prof2.classList.remove("hide")
            }, 5900);
            setTimeout(function(){
            prof2.classList.add("hide")
            prof1.classList.remove("hide")
            }, 6200);
             setTimeout(function(){
            prof1.classList.add("hide")
            prof2.classList.remove("hide")
            }, 6500);
             setTimeout(function(){
            prof2.classList.add("hide")
            prof1.classList.remove("hide")
            }, 6900);
             setTimeout(function(){
            prof1.classList.add("hide")
            prof2.classList.remove("hide")
            }, 7200);
            //make glow of switch two
            let rect3glow = document.querySelector("#rect3glow");
            let pull3glow = document.querySelector("#pull3glow");
           setTimeout(function(){
        document.getElementById("pull3glow").setAttribute("filter","url(#f2)")
               document.getElementById("rect3glow").setAttribute("filter", "url(#f1)") }, 1200);
            console.log("glow");
        }

            switch3up.addEventListener("click",function(){
                audswitch.play();
                switch3up.classList.add("hide")
                switch3down.classList.remove("hide")
            })

        audswitch.addEventListener('ended', lens);

        function lens() {
        myLens.classList.add("circle")
            setTimeout(function(){
            window.location.href = "scream.html";
            }, 1400);
        }

        window.addEventListener("load", pageLoad);
