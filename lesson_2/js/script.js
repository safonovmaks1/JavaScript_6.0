'use strit';

// Переменные (money и time)
let money = +prompt("Ваш бюджет на месяц?", ''), // число
    time = prompt("Введите дату в формате DD.MM.YYYY", ''),
    i = 0;

// Объект appData
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

// let firstQuestion = prompt("Введите обязательную статью расходов в этом месяце", ''),
//     firstAnswer = prompt("Во сколько обойдется?", ''), 
//     secondQuestion = prompt("Введите обязательную статью расходов в этом месяце", ''),
//     secondAnswer = prompt("Во сколько обойдется?", ''); 

// appData.expenses[firstQuestion] = firstAnswer;
// appData.expenses[secondQuestion] = secondAnswer;

// console.log(appData);

for (i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
        console.log("done");

        appData.expenses[a] = b;
    } else {
        i--; // условие чтобы вернуться к вопросу заново
    }
}

// 1

// do {
//     i++;
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');
//     if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
//         console.log("done");

//         appData.expenses[a] = b;
//     } else {
//         i--;
//     }
// }
// while (i < 2);

// 2

// while (i < 2) {
//     i++;

//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');
//     if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
//         console.log("done");

//         appData.expenses[a] = b;
//     } else {
//         i--;
//     }

// }

appData.moneyPerDay = appData.budget / 30;

// Бюджет на 1 день
alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}