//zorgt er dat de functie wordt aangeroepen zodra de pagina geladen is.
window.onload = function(){
    showpopup();
}
function showpopup() {
//roept de class "popup" aan. 
    var balloon = document.getElementsByClassName("popup");
    //zorgt dat het eerste element in de array, in dit geval balloon, getoont wordt.
    balloon[0].style.display = "block"; 
    //na 3 sec. wordt de display veranderd naar none, dus de balloon verdwijnt.
    setTimeout(function(){ 
    balloon[0].style.display = "none";
   }, 3000);
}
//als er op het document wordt geklikt.
document.onclick = function(e) { 
    //als de plek waar op geklikt is de class select heeft dan voert hij de function "SelectText" uit.
    if (e.target.classList.contains('select')) {
        SelectText('select');
    }
};
//eerts wordt de class "textballon" aangesproken. Vervolgens als er nog geen woord in aangeklikt wordt er de class "grow" aan gesproken en als deze al aan is gesproken dan wordt de balloon op display none gezet en krimpt de tekst.
function SelectText(element) {
    var text = document.getElementsByClassName(element)
        , balloon = document.getElementsByClassName("textballon");
    
    if(!text[0].classList.contains('grow')){
        text[0].classList.add('grow');
        fadeIn(balloon[0], 1000);
    }
    else{
        balloon[0].style.display="none";
        text[0].classList.remove('grow');
    }
}
//fadeIn wordt aangeroepen als de tekst aangeklikt wordt zodat de tekstballon verschijnt.
function fadeIn(el, time) {
     el.style.opacity = 0;
     el.style.display = "block";
    
    // time = 1 sec, dus binnen 1 seconde laat hij de afbeelding/balloon zien.
     var last = +new Date();
     var fade = function() {
          el.style.opacity = +el.style.opacity + (new Date() - last) / time;
          last = +new Date();

          if (+el.style.opacity < 1) {
               (window.requestAnimationFrame && requestAnimationFrame(fade)) ||      setTimeout(fade, 16)
          }
     };
     //hier wordt de functie fade aangeroepen.
     fade();
 }
