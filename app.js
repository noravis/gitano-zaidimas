let character = document.getElementById('character');
let block = document.getElementById('block');


let counter = document.getElementById("counter");
counter.innerHTML = 0;

const button1 = document.querySelector(".start");


character.addEventListener('click', () => {
    if(character.classList != "animate") {
    character.classList.add("animate");
    counter.innerHTML++;
    } 
    // if (counter.innerHTML >= 2) {
    //     block.classList.add("move2");
    // }
    // if (counter.innerHTML >= 6) {
    //     block.classList.add("move3");
    // }
    // if (counter.innerHTML >= 10) {
    //     block.classList.add("move3");
    // }

    setTimeout(function() {
        character.classList.remove("animate");
        
    }, 500)

   
   
})


let checkIfLost = setInterval(function() {
    let characterTopPosition = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeftPosition = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeftPosition<45 && blockLeftPosition > 0 && characterTopPosition >=140) {
        block.style.animation = "none";
        block.style.display = "none"
        alert('žmogeliukas bombos neperšoko. Bandykite dar kartą!');
        counter.innerHTML = 0;
        block.classList.remove("move");
    } 
}, 10)


button1.addEventListener('click', () => {
       counter.innerHTML = 0;
       block.classList.add("move");
        
       block.style.animation =  "block 2s infinite linear";
       block.style.display = "block";

       if (counter.innerHTML >= 2) {
        block.classList.add("move2");
    }

})





