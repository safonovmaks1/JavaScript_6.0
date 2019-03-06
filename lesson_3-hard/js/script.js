'use strit';

// 1
let str = "урок - 3 - был слишком легким";

let result = str[0].toUpperCase(0) + str.slice(1).replace(/-/g, ' ');
let newStr = result.slice(0, 23);
let newWord = "легкоо";
let result2 = newStr.concat(newWord);

console.log(result);
alert(result2);

// 2
let arr = [20, 33, 1, 'Человек', 2, 3];
arr.splice(3, 1);
let arr2 = 0;
for (let i = 0; i < arr.length; i++) {
        arr2 += arr[i] ** 3;
    }
console.log(Math.sqrt(arr2));

// 3
function name(something) {
    if ((typeof (something)) === 'string') {
        console.log('maybe');
        
    } else if (something.length > 50) {
        something.slice(0, 50) + '…';
    }
    something = something.trim();
}
