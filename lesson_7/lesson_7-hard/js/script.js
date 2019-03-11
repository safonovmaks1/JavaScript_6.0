'use strit';

let start = 0,
    btn = document.querySelector('.start'),
    box = document.querySelector('#box');


function bottom() {
    start +=.5;
    box.style.top = start + "px";
    requestAnimationFrame(bottom);
}
// requestAnimationFrame(bottom);

btn.addEventListener('click', bottom);