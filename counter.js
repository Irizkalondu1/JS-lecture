if (!localStorage.getItem('counter')) {
    localStorage.setItem('counter', 0);
}
let counter = parseInt(localStorage.getItem('counter'));

function count() {
    counter++;
    localStorage.setItem('counter', counter);
    console.log(counter);
}

document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('button').onclick =count;

});