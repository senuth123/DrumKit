var numberOfDrum=document.querySelectorAll(".drum").length;

for(var i =0; i<numberOfDrum;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
  var buttonInnerHTML=this.innerHTML;
switch(buttonInnerHTML){
    case "w":
        var audio = new Audio();
        audio.src = 'sounds/crash.mp3'
        audio.play();
    break;
    case "a":
        var audio = new Audio();
        audio.src = 'sounds/kick-bass.mp3'
        audio.play();
    break;
    case "s":
        var audio = new Audio();
        audio.src = 'sounds/snare.mp3'
        audio.play();
    break;
    case "d":
        var audio = new Audio();
        audio.src = 'sounds/tom-1.mp3'
        audio.play();
    break;
    case "j":
        var audio = new Audio();
        audio.src = 'sounds/tom-2.mp3'
        audio.play();
    break;
    case "k":
        var audio = new Audio();
        audio.src = 'sounds/tom-3.mp3'
        audio.play();
    break;
    case "l":
        var audio = new Audio();
        audio.src = 'sounds/tom-4.mp3'
        audio.play();
    break;
    default:


        
}
   buttonAnimation(buttonInnerHTML); })
}

document.addEventListener("keydown",function(event){
    var obapuKey=event.key;
  switch(obapuKey){
      case "w":
          var audio = new Audio();
          audio.src = 'sounds/crash.mp3'
          audio.play();
      break;
      case "a":
          var audio = new Audio();
          audio.src = 'sounds/kick-bass.mp3'
          audio.play();
      break;
      case "s":
          var audio = new Audio();
          audio.src = 'sounds/snare.mp3'
          audio.play();
      break;
      case "d":
          var audio = new Audio();
          audio.src = 'sounds/tom-1.mp3'
          audio.play();
      break;
      case "j":
          var audio = new Audio();
          audio.src = 'sounds/tom-2.mp3'
          audio.play();
      break;
      case "k":
          var audio = new Audio();
          audio.src = 'sounds/tom-3.mp3'
          audio.play();
      break;
      case "l":
          var audio = new Audio();
          audio.src = 'sounds/tom-4.mp3'
          audio.play();
      break;
      default:
      
  
          
  }
      buttonAnimation(event.key);
    })  

function buttonAnimation(currentKey){
    document.querySelector("."+currentKey).classList.add("pressed");
    setTimeout(function(){
    document.querySelector("."+currentKey).classList.remove("pressed");    
    },100)
}






