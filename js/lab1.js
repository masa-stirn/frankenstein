let myLens = document.querySelector(".mylens");

        let switch1down = document.querySelector(".switch1down");
        let switch1up = document.querySelector(".switch1up");
        let switch2down = document.querySelector(".switch2down");
        let switch2up = document.querySelector(".switch2up");
        let switch3down = document.querySelector(".switch3down");
        let switch3up = document.querySelector(".switch3up");
        //audios
        let audswitch1on = document.querySelector(".audswitch1on");
        let audswitch2on = document.querySelector(".audswitch2on");
        let audswitch3on = document.querySelector(".audswitch3on");
        let audswitch = document.querySelector(".audswitch");

        function pageLoad(){
            //play profesor say switch one on
            audswitch1on.play();
            console.log("play aud 1");
            //profesor mouth animation
            let prof1 = document.querySelector(".professor1");
            let prof2 = document.querySelector(".professor2");
            prof1.classList.add("hide")
            prof2.classList.remove("hide")
            setTimeout(function(){
            prof2.classList.add("hide")
            prof1.classList.remove("hide")
            }, 100);
            setTimeout(function(){
            prof1.classList.add("hide")
            prof2.classList.remove("hide")
            }, 400);
            setTimeout(function(){
            prof2.classList.add("hide")
            prof1.classList.remove("hide")
            }, 700);
            setTimeout(function(){
            prof1.classList.add("hide")
            prof2.classList.remove("hide")
            }, 1000);
            setTimeout(function(){
            prof2.classList.add("hide")
            prof1.classList.remove("hide")
            }, 1300);
             setTimeout(function(){
            prof1.classList.add("hide")
            prof2.classList.remove("hide")
            }, 1600);
            setTimeout(function(){
            prof2.classList.add("hide")
            prof1.classList.remove("hide")
            }, 1900);
             setTimeout(function(){
            prof1.classList.add("hide")
            prof2.classList.remove("hide")
            }, 2100);
            //make glow of switch one
            let rect1glow = document.querySelector("#rect1glow");
            let pull1glow = document.querySelector("#pull1glow");
           setTimeout(function(){
        document.getElementById("pull1glow").setAttribute("filter","url(#f2)")
               document.getElementById("rect1glow").setAttribute("filter", "url(#f1)") }, 1200);
            console.log("glow");
        }


            switch1up.addEventListener("click",function(){
                audswitch.play();
                switch1up.classList.add("hide")
                switch1down.classList.remove("hide")
            })

        audswitch.addEventListener('ended', lens);

        function lens() {
        myLens.classList.add("circle")
            setTimeout(function(){
            window.location.href = "fart.html";
            }, 1500);
        }

        pageLoad();