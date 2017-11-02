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
            //profesor mouth animation
            let prof1 = document.querySelector(".professor1");
            let prof2 = document.querySelector(".professor2");
            setTimeout(function(){
            myLens.classList.remove("circle2");
            audswitch2on.play();
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
            }, 2300);
            setTimeout(function(){
            prof1.classList.add("hide")
            prof2.classList.remove("hide")
            }, 2600);
            setTimeout(function(){
            prof2.classList.add("hide")
            prof1.classList.remove("hide")
            }, 2900);
             setTimeout(function(){
            prof1.classList.add("hide")
            prof2.classList.remove("hide")
            }, 3100);
            //make glow of switch two
            let rect2glow = document.querySelector("#rect2glow");
            let pull2glow = document.querySelector("#pull2glow");
           setTimeout(function(){
        document.getElementById("pull2glow").setAttribute("filter","url(#f2)")
               document.getElementById("rect2glow").setAttribute("filter", "url(#f1)") }, 1200);
            console.log("glow");
        }
            switch2up.addEventListener("click",function(){
                audswitch.play();
                switch2up.classList.add("hide")
                switch2down.classList.remove("hide")
            })

        audswitch.addEventListener('ended', lens);
        function lens() {
        myLens.classList.add("circle")
            setTimeout(function(){
            window.location.href = "dance.html";
            }, 1400);
        }

        pageLoad();
