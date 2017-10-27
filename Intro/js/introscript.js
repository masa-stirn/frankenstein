//elements
let castle = document.querySelector(".castle")
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
  bgsound.play;
    setTimeout(castleGlow, 1000);
    function castleGlow(){
        castle.classList.add("castleglow");}
    setTimeout(wolf, 5000);
    function wolf(){
        wolfsound.paly();
    }
};




wolfsound.addEventListner("ended", characterslide)

function characterslide(){
    professor.classList.add("appearprofessor");
    creature.classList.add("appearcreature");
    igor.classList.add("appearigor");
    setTimeout(eyeballdrop, 3000);
}

function eyeballdrop(){
    eyeball.classList.add("eyedrop");
}

eyeball.addEventListner("animationend", eyeballroll)

function eyeballroll(){
    eyeball.classList.remove("eyedrop");
    eyeball.classList.add("eyeroll");
}

eyeball.addEventListner("animationend",showArrow)

function showArrow(){
    arrow.classList.remove("hide");
}

pageLoad();
