
//.drum class is used bz we may have other button class also
var numOfDrumBtn= document.querySelectorAll(".drum").length;
for (var i=0;i<numOfDrumBtn;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

    var buttoninnerhtml= this.innerHTML;  // get to know which btn(click) is pressed
    makesound(buttoninnerhtml)            // send that btn to makesound
    
    btnanimation(buttoninnerhtml)
    });

}

document.addEventListener("keydown",function(event){
    makesound(event.key);

    btnanimation(event.key)
});

function makesound(key){
    
    switch (key) {
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
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
            var kick_Bass = new Audio("sounds/kick-bass.mp3");
            kick_Bass.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        default: console.log(key)
            break;
    }

}

function  btnanimation(currentkey){
    var activekey=document.querySelector("."+currentkey)
    activekey.classList.add("pressed");   //isse vo shadowed(light) hi rhega vapas normal nhi hoga
    // settimeout(fun,time)
    setTimeout(function(){
        activekey.classList.remove("pressed")
    }, 100)                       //100=100ms=1sec
}