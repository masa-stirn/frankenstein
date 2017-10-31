//circle opening


let audviolin = document.querySelector(".violin");
let scale = document.querySelector(".scale");
let doctor = document.querySelector("#doctor");
let creature = document.querySelector("#creature");
let igor = document.querySelector("#igor");


        function pageLoad(){
            scale.classList.add("scalemeup")
            audviolin.play();
            setTimeout(function(){
             scale.classList.remove("scalemeup")
            }, 5001);
            setTimeout(function(){
            doctor.classList.remove("hide")
            doctor.classList.add("doctorani")
            }, 5002);
            setTimeout(function(){
            creature.classList.remove("hide")
            creature.classList.add("creatureani")
            }, 5002);
            setTimeout(function(){
            igor.classList.remove("hide")
            igor.classList.add("igorani")
            }, 5002);
        }




pageLoad();
