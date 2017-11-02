//elements
let castle = document.querySelector(".mycastle")
let professor = document.querySelector(".professor")
let creature = document.querySelector(".creature")
let igor = document.querySelector(".igor")
let eyeball = document.querySelector(".eyeball")
let arrow = document.querySelector(".arrow")

//audio
let bgsound = document.querySelector(".bgsound");
let wolfsound = document.querySelector(".wolf");
let popsound = document.querySelector(".pop");
let rollsound = document.querySelector(".roll");




function pageLoad() {
    professor.classList.add("hide");
     creature.classList.add("hide");
     igor.classList.add("hide");
  bgsound.play();
    setTimeout(castleGlow, 2000);
    function castleGlow(){
     console.log("castle glow")
 document.getElementById("castleglow").setAttribute("filter", "url(#f1)");
    }
    setTimeout(wolf, 2000);
    function wolf(){
    console.log("wolf sound")
    wolfsound.play();
    wolfsound.addEventListener("ended", characterslide)
    }

};


function characterslide(){
     professor.classList.remove("hide");
     professor.classList.add("appearprofessor");
     creature.classList.remove("hide");
    creature.classList.add("appearcreature");
     igor.classList.remove("hide");
    igor.classList.add("appearigor");

}


setTimeout(eyeballdrop, 5000);

function eyeballdrop(){
    eyeball.classList.add("eyedrop");
    popsound.play()
}

eyeball.addEventListener("animationend", showArrow)

/*
eyeball.addEventListener("animationend", eyeballroll)

function eyeballroll(){
    eyeball.classList.remove("eyedrop");
    eyeball.classList.add("eyeroll");
}

eyeball.addEventListener("animationend", showArrow)
*/
function showArrow(){
    setTimeout(function(){
    arrow.classList.remove("hide");
}, 10);

 setTimeout(function(){
 document.getElementById("arrow1").setAttribute("filter", "url(#f3)");
     let linktolab1 = document.querySelector(".linktolab1");
     linktolab1.classList.remove("hide");
     arrow.addEventListener("click", linkme)
     function linkme(){
         window.location.href = "../lab1.html";
     }
}, 500);}

window.addEventListener("load", pageLoad);
