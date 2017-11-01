var plus = document.querySelector('div p');
var eentje = document.querySelector('.erbij');

function show() {
    plus.classList.toggle('toevoegen');
    eentje.classList.toggle('toegevoegd');
    if ( plus.classList.contains('toevoegen') ) {
        plus.innerHTML = '-';
    }
    else {
        plus.innerHTML = '+';
    }
}


plus.addEventListener('click', show);