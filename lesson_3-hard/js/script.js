'use strit';

// 1
let str = "урок - 3 - был слишком легким";
let firstСharacter = str[0];
let firstСharacterUp = firstСharacter.toUpperCase(0);
let cutStr = str.slice(1).replace(/-/g, ' ');
let result = firstСharacterUp + cutStr;
console.log(result);

let newStr = result.slice(0, 27);
let characterStr = "оо";
let result2 = newStr.concat(characterStr);

alert(result2);

// 2

let arr = [20, 33, 1, 'Человек', 2, 3];
let arr2 = arr.filter(function (number) {
    return !isNaN(Number(number));
});
let arr3 = 0;
for (let i = 0; i < arr2.length; i++) {
    arr3 += arr2[i] ** 3;
}
 console.log(Math.sqrt(arr3));

// 3
function name(something) {
    if ((typeof (something)) === 'string') {
        console.log('maybe');
        
    } else if (something.length > 50) {
        something.slice(0, 50) + '…';
    }
    something = something.trim();
}
