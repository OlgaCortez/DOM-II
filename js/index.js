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




