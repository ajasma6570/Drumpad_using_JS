var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for( let i=0 ;i < numberOfDrumButtons ; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    //detecting keypress
    let clickedButton = this.innerHTML; 

    makeSound(clickedButton)
    buttonCurrent(clickedButton)
       
    //detecting keyboard press
    document.addEventListener("keypress",function(e){
            makeSound(e.key)
            buttonCurrent(e.key)
    })

    })

}

function makeSound(key){
    switch (key) {

        case "w" :
            let w = new Audio("sounds/tom-1.mp3");
            w.play()
        
        case "a" :
            let a = new Audio("sounds/tom-2.mp3");
            a.play()

        case "s" :
            let s = new Audio("sounds/tom-3.mp3");
            s.play()

        case "d" :
            let d = new Audio("sounds/tom-4.mp3");
            d.play()

        case "j" :
            let j = new Audio("sounds/snare.mp3");
            j.play()

        case "k" :
            let k = new Audio("sounds/crash.mp3");
            k.play()

        case "l" :
            let l = new Audio("sounds/kick-bass.mp3");
            l.play()
        default :
            console.log("no sound")
    }
}

function buttonCurrent(current){

    var activeButton = document.querySelector("."+current)

    activeButton.classList.add("pressed")

    setTimeout(function(){
        activeButton.classList.remove("pressed")
    },100)
}