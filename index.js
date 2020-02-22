window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sounds");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual")
    const colors = [
        "#f48fb1",
        "#80cbc4",
        "#b39ddb",
        "#ffcc80",
        "#ef9a9a",
        "#90caf9"
    ];


    //sound here
    pads.forEach((pad, index) => {
        pad.addEventListener("click", function() {
            sounds[index].currentTime = 0;
           sounds[index].play();
            createBubbles(index);
        });
    });q


    //create a function that makes bubbles
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index]
        bubble.style.animation = "jump 1.2s ease";
        bubble.addEventListener("animationEnd", function(){
            visual.removeChild(this);
        });
    };
});







