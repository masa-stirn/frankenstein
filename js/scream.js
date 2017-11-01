let myLens = document.querySelector(".mylens");
        let creature = document.querySelector(".creature");
        let argh = document.querySelector(".argh");

        window.addEventListener("load",firstEvent)

        function firstEvent(){
        myLens.classList.add("circle2");
        }
        myLens.addEventListener("animationend", spriteLife)

        function spriteLife(){
            console.log("remove circle2");
            myLens.classList.remove("circle2")
            argh.play();
        }
        argh.addEventListener('ended', lens);

        function lens() {
        console.log("add circle");
        myLens.classList.add("circle")
           setTimeout(function(){
            window.location.href = "../credits/credits.html";
            }, 1500);
        }
