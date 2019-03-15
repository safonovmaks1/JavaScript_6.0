let tel = document.querySelector('#tel');


tel.addEventListener('input', function () {
    if (tel != 0) {
        if (!checkValidSum(tel.value)) {
            tel.value = tel.value.slice(0, -1);
        } 
    }
});

function checkValidSum(input) {
    return /\d$/.test(input);
}

// 1. как можно обратиться ко всем input по типу type="tel"