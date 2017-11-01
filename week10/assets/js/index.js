var clickedItems = [];
var listitems = document.querySelectorAll("li");
var loadingimg = document.querySelector("section:nth-child(3) img");
var pverhalen = document.querySelector("section:nth-child(3) h2");
var tverhalen = document.querySelector(".verhalen");

for (i = 0; i < listitems.length; i++) {
  (function(i) {
    listitems[i].addEventListener('click', function() {
      //het item waar op geklikt is wordt in de clickeditems array
        clickedItems.push(this);
        this.style.backgroundColor = "#fff";
        this.style.borderRadius = "0.75em";
        if(this.classList.contains('houding')){
            this.style.backgroundColor = "#29129d";
            var image = this.querySelector("img");
            image.src = "assets/images/staand-wit.svg";
            this.style.color = "#fff";
        }
        //als er 2 items in zitten dan leegt hij de array en voert hij de funciton uit om de juiste verhalen te tonen.
        if(clickedItems.length == 2){
            //hide all stories
            clearArray(clickedItems);
            loading();
        }
    });
  })(i);
}
//maakt de array leeg
function clearArray(array) {
  while (array.length) {
    array.pop();
  }
}
function showstories(){
var verhalen = document.querySelectorAll("article.formeel");
for (i = 0; i < verhalen.length; i++) {
  (function(i) {
    verhalen[i].style.display="flex";
  })(i);
}
}
function loading() {
//hier laat ie de laatanimatie zien en vervolgens na 3sec weer verdwijnen. 
    loadingimg.style.display="block";
    pverhalen.style.display = "none";
    var verhalen = document.querySelectorAll("article");
    for (i = 0; i < verhalen.length; i++) {
      (function(i) {
        verhalen[i].style.display="none";
      })(i);
    }
    setTimeout(function(){ 
    loadingimg.style.display = "none";
    
    tverhalen.style.display = "flex";
        //zorgt er voor dat de verhalen verborgen worden die niet bij die bepaalde catagorie horen.
    showstories(); 
    }
    , 3000);
    
    
}
