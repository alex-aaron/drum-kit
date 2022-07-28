

// window.addEventListener('load', () => {
//   let drum1 = document.getElementById('w');
// })


document.querySelectorAll('button').forEach((button) => {
  button.addEventListener('click', handleClick);
});

document. addEventListener('keydown', function(e){
  var key = e.key;

  switch (key) {
    case ('w'):
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case ('a'):
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case ('s'):
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case ('d'):
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    case ('j'):
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case ('k'):
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case ('l'):
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
  }
});

function handleClick(e){
  generateAnimation(this);

  this.style.color = 'white';
  var audio;
  if (this.id === 'w') {
    audio = new Audio('sounds/tom-1.mp3');
  } else if (this.id === 'a') {
    audio = new Audio('sounds/tom-2.mp3');
  } else if (this.id === 's') {
    audio = new Audio('sounds/tom-3.mp3');
  } else if (this.id === 'd') {
    audio = new Audio('sounds/tom-4.mp3');
  } else if (this.id === 'j') {
    audio = new Audio('sounds/snare.mp3');
  } else if (this.id === 'k') {
    audio = new Audio('sounds/crash.mp3');
  } else {
    console.log('hit this condition');
    audio = new Audio('sounds/kick-bass.mp3');
  }
  audio.play();
}


function generateAnimation(button){
  button.classList.add('pressed');
  setTimeout(function(){
    button.classList.remove('pressed');
  }, 100)
}
