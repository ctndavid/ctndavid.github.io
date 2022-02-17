mybutton = document.getElementById("topbtn");


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  
} 

function opgh(){
  window.open('https://github.com/Yttrriium', 'blank');
}
function opsof(){
  window.open('https://stackoverflow.com/users/15778196/yttrrium', '_blank');
}


