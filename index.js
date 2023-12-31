//Detecting Button Pressed

var numberOfButtons = document.querySelectorAll(".drum").length;

for (var btn = 0; btn < numberOfButtons; btn++) {   
document.querySelectorAll(".drum")[btn].addEventListener("click", function() {
    
    var buttonClicked = this.innerHTML;

    makeSound(buttonClicked);
    animateBtn(buttonClicked);
});
}

// Detecting Keyboard presses

document.addEventListener("keydown", function(event) {
    makeSound(event.key)
    animateBtn(event.key);

});
    

 
function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case "l":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        default:
            console.log(key);
    }
}

// Adding Animation to the Buttons 
function animateBtn(currentKey) {
    var activeBtn = document.querySelector("." + currentKey); 

    activeBtn.classList.add("pressed"); // toggles the class on

    setTimeout(function() {
        activeBtn.classList.remove("pressed"); // toggles the class off
    }, 100);
}