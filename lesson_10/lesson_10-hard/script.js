'use strict';

document.querySelectorAll('input[type="tel"]').forEach(item => {
    item.addEventListener('input', function(){
        if (item != 0) {
            if (!checkValidSum(item.value)) {
                item.value = item.value.slice(0, -1);
            }
        }
    });
});

function checkValidSum(input) {
    return /\d$/.test(input);
}