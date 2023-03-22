// // PASSAGEM DOS SLIDES
let time = 1;
document.getElementById("radio1");

setInterval(function () {
  nextImage();
}, 4500);

function nextImage() {
  time++;

  if (time > 3) {
    time = 1;
  }

  document.getElementById("radio" + time).checked = true;
};





document.getElementById("PG1").addEventListener("click", function() {
  window.open("Bruno.html", "_self");
});

document.getElementById("PG2").addEventListener("click", function() {
  window.open("Fabiano.html", "_self");
});

document.getElementById("PG3").addEventListener("click", function() {
  window.open("Luana.html", "_self");
});

document.getElementById("PG4").addEventListener("click", function() {
  window.open("Reinaldo.html", "_self");
});

document.getElementById("PG5").addEventListener("click", function() {
  window.open("Wellington.html", "_self");
});




const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
  const windowTop = window.pageYOffset + ((window.innerHeight * 3)/4);
  target.forEach(function(element) {
    if((windowTop) > element.offsetTop) {
      element.classList.add(animationClass) ;
    }else {
      element.classList.remove(animationClass);
    }
  })
}

animeScroll();

if(target.length) {
  window.addEventListener('scroll', function() {
    animeScroll();
  })
}
