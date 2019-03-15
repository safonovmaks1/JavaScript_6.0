'use strict';

class Options {
    constructor({height, width, bg, fontSize, textAlign}) {
        // this.height = height;
        // this.width = width;
        // this.bg = bg;
        // this.fontSize = fontSize;
        // this.textAlign = textAlign;
       
        this.div = document.createElement('div');
        this.div.style.height     = height;
        this.div.style.width      = width;
        this.div.style.background = bg;
        this.div.style.fontSize   = fontSize;
        this.div.style.textAlign  = textAlign;
        
        this.div.textContent = 'Вызвать его метод и получить элемент на странице'; 
        /*
        Именно это имелось ввиду??
        */
        document.body.appendChild(this.div);
    }
}

let newOptions = new Options({
    height: 90,
    width: 200,
    bg: 'aqua',
    fontSize: '5em',
    textAlign: 'center'
});
