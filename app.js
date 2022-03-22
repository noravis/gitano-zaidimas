let character = document.getElementById('character');
let block = document.getElementById('block');


let counter = document.getElementById("counter");
counter.innerHTML = 0;

const button1 = document.querySelector(".start")

character.addEventListener('click', () => {
    if(character.classList != "animate") {
    character.classList.add("animate");
    }
    setTimeout(function() {
        character.classList.remove("animate");
        
    }, 500)

    if ( checkIfLost === true) {
        counter.innerHTML--
    }
    counter.innerHTML++
})


let checkIfLost = setInterval(function() {
    let characterTopPosition = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeftPosition = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeftPosition<40 && blockLeftPosition > 0 && characterTopPosition >=100) {
        block.style.animation = "none";
        block.style.display = "none"
        alert('Gitanas gitaros neperšoko. Bandykite dar kartą!');
        counter.innerHTML = 0;
        block.classList.remove("move");
    } 
}, 10)


button1.addEventListener('click', () => {
    
       block.classList.add("move");
        
       block.style.animation =  "block 2s infinite linear";
        block.style.display = "block"
     
        
        
    

})



