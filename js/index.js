// Your code goes here

//Transition on the img-content
const transition = document.querySelector('.img-content');

transition.addEventListener('transitionend', () => {
  console.log('Transition ended');
});

//for <p> under h2: Welcome to fun bus
document.addEventListener('keydown', logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}

//h2 Welcome Fun Bus Header
let test = document.getElementById("test");
  
test.addEventListener("mouseenter", function( event ) {   
  event.target.style.color = "yellow";

  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);

test.addEventListener("mouseover", function( event ) {   
  event.target.style.color = "orange";

  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);

const destination = document.querySelector('.destination');

destination.addEventListener('lostpointercapture', () => {
  console.log('I\'ve been released!');
});

destination.addEventListener('pointerdown', (event) => {
  destination.setPointerCapture(event.pointerId);
  console.log('Pointer down event');
});

//If transition of pics are cancelled
const trans = document.querySelector('.img-content');

trans.addEventListener('transitioncancel', () => {
  console.log('Transition canceled');
});

//Before printing
window.addEventListener('beforeprint', (event) => {
    console.log('Before print');
  });

//After printing
  window.addEventListener('afterprint', (event) => {
    console.log('After print');
  });

 //Width Changing
  const width = document.querySelector('width');
  function reportWindowSize() {
    console.log('Width changed.');
  }
  
  window.onresize = reportWindowSize;  

//when you double click on the fun-bus pic it gets larger.
  const card = document.querySelector('aside');

  card.addEventListener('dblclick', function (e) {
    card.classList.toggle('large');
  });


  const button = document.querySelector('button');

  button.addEventListener('click', event => {
    button.innerHTML = `Click count: ${event.detail}`;
  });