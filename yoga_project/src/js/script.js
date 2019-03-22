'use strict';

    import {tabs} from './parts/tabs';
    import {timer} from './parts/timer';
    import {modal} from "./parts/modal";
    import {scroll} from "./parts/scroll";
    import {forms} from "./parts/form";
    import {slider} from "./parts/slider";
    import {calc} from "./parts/calc";

    // let tabs = require('./parts/tabs'),
    //     timer = require('./parts/timer'),
    //     modal = require('./parts/modal'),
    //     scroll = require('./parts/scroll'),
    //     forms = require('./parts/form'),
    //     slider = require('./parts/slider'),
    //     calc = require('./parts/calc');

window.addEventListener('DOMContentLoaded', function () {
    
    tabs();
    timer();
    modal();
    scroll();
    forms();
    slider();
    calc();
    
});