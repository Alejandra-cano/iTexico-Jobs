//Menu//
function displayMenu(){
    var display;
    var nav = document.getElementById("nav");
    display = nav.style.display;

    if (display == "none"){
        nav.style.display = "block"
    }
    else{
        nav.style.display = "none"
    }
}
//Acordion//
var acc = document.getElementsByClassName("acordion-btn");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}