// ScrollReveal().reveal('header', {delay: 200});
// ScrollReveal().reveal('.intro', { delay: 10 00 });
// ScrollReveal().reveal('nav', { delay: 700 });

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.getElementById("shrinkTitle").style.fontSize = "4vw";
    document.getElementById("hiddenTitle").style.display = "none";
    mybutton.style.display = "block";
  } else {
    document.getElementById("shrinkTitle").style.fontSize = "12.5vw";
    document.getElementById("hiddenTitle").style.display = "block";
    mybutton.style.display = "none";
  }
}


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
